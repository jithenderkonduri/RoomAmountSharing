var async = require("async");
var express = require("express");
var router = express.Router();
var models = require("../models.js");
var Expenses = models.Expenses;

var ExpensesCtrl = require("../Api/controllers/expenses.controller.js");

router.get("/", ExpensesCtrl.expenses);
router.post("/create", ExpensesCtrl.addExpenses);
router.get("/delete/:id", ExpensesCtrl.delete);

module.exports = router;
