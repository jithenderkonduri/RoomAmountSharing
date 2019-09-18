var async = require("async");
var express = require("express");
var router = express.Router();
var models = require("../models.js");

var DashboardCtrl = require("../Api/controllers/dashboard.controller.js");

router.get("/users-total", DashboardCtrl.getUserTotals);
router.get("/expenses-total", DashboardCtrl.getExpensesTotals);
router.get("/final-payments", DashboardCtrl.getPayments);

module.exports = router;
