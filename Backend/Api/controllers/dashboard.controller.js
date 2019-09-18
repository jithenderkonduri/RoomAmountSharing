var _ = require("lodash");
var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var models = require("../../models.js");
var User = models.User;
var Expenses = models.Expenses;

exports.getUserTotals = async function(req, res) {
  try {
    const users = await User.aggregate([{ $count: "usersTotal" }]);
    res.status(200).send({ error: false, result: users, msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
exports.getExpensesTotals = async function(req, res) {
  try {
    const expenses = await Expenses.aggregate([
      {
        $group: {
          _id: {},
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 }
        }
      }
    ]);
    res.status(200).send({ error: false, result: expenses, msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
exports.getPayments = async function(req, res) {
  try {
    const expenses = await Expenses.aggregate([
      {
        $group: { _id: "$user_id", total: { $sum: "$amount" } }
      }
    ]);
    var expensesObj = {};
    expenses.map(function(v, i) {
      expensesObj[v._id] = v.total;
    });
    res
      .status(200)
      .send({ error: false, result: splitPayments(expensesObj), msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};

// To calculate the expenses and who pays to whom and how much amount
function splitPayments(payments) {
  const people = Object.keys(payments);
  const valuesPaid = Object.values(payments);

  const sum = valuesPaid.reduce((acc, curr) => curr + acc);
  const mean = sum / people.length;

  const sortedPeople = people.sort(
    (personA, personB) => payments[personA] - payments[personB]
  );
  const sortedValuesPaid = sortedPeople.map(person => payments[person] - mean);

  let i = 0;
  let j = sortedPeople.length - 1;
  let debt;
  let resultArr = new Array();
  while (i < j) {
    debt = Math.min(-sortedValuesPaid[i], sortedValuesPaid[j]);
    sortedValuesPaid[i] += debt;
    sortedValuesPaid[j] -= debt;
    let resultObj = new Object();
    resultObj.from = sortedPeople[i];
    resultObj.to = sortedPeople[j];
    resultObj.amount = debt;
    resultArr.push(resultObj);
    if (sortedValuesPaid[i] === 0) {
      i++;
    }

    if (sortedValuesPaid[j] === 0) {
      j--;
    }
  }
  return resultArr;
}
