var _ = require("lodash");
var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var models = require("../../models.js");
var Expenses = models.Expenses;
var Reimbursements = models.Reimbursements;

exports.addReimbursements = function(req, res) {
  if (!(req.body.amount && req.body.user_id)) {
    return res.status(400).json({ success: false, message: "InvalidRequest" });
  }
  let reimbursements = new Reimbursements(req.body);
  reimbursements
    .save()
    .then(game => {
      res.status(200).json({ sucess: "Reimbursements is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};
exports.reimbursements = async function(req, res) {
  try {
    const expenses = await Expenses.aggregate([
      {
        $lookup: {
          from: "reimbursements",
          localField: "user_id",
          foreignField: "user_id",
          as: "refundAmount"
        }
      },

      {
        $unwind: "$refundAmount"
      },
      {
        $lookup: {
          localField: "refundAmount.user_id",
          from: "users",
          foreignField: "_id",
          as: "usr"
        }
      },
      {
        $unwind: "$usr"
      },
      {
        $project: {
          _id: 1,
          name: "$usr.name",
          amount: { $sum: "$refundAmount.amount" },
          total: { $sum: "$amount" }
        }
      }
    ]);
    res.status(200).send({ error: false, result: expenses, msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
