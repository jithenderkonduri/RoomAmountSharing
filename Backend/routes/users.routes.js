var async = require("async");
var express = require("express");
var router = express.Router();
var models = require("../models.js");
var User = models.User;

var Users = require("../Api/controllers/users.controller.js");

router.get("/", Users.users);
router.post("/create", Users.addnewUser);
router.get("/delete/:id", Users.delete);

module.exports = router;
