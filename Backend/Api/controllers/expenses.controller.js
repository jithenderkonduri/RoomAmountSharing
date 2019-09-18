var _ = require("lodash");
var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var models = require("../../models.js");
var Expenses = models.Expenses;

exports.addExpenses = function(req, res) {
  if (!(req.body.amount && req.body.date)) {
    return res.status(400).json({ success: false, message: "InvalidRequest" });
  }
  let expenses = new Expenses(req.body);
  expenses
    .save()
    .then(game => {
      res.status(200).json({ sucess: "Expenses is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};
exports.expenses = async function(req, res) {
  try {
    const expenses = await Expenses.find().populate("user_id");
    res.status(200).send({ error: false, result: expenses, msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
exports.delete = function(req, res) {
  Expenses.findByIdAndRemove({ _id: req.params.id }, function(err, results) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
};
