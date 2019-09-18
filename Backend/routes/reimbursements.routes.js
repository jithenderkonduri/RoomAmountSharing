var async = require("async");
var express = require("express");
var router = express.Router();
var models = require("../models.js");
var Expenses = models.Expenses;

var ReimbursementsCtrl = require("../Api/controllers/reimbursements.controller.js");

router.post("/create", ReimbursementsCtrl.addReimbursements);
router.get("/", ReimbursementsCtrl.reimbursements);
module.exports = router;
