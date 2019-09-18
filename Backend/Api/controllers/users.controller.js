var _ = require("lodash");
var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var models = require("../../models.js");
var User = models.User;

exports.addnewUser = function(req, res) {
  if (!(req.body.name && req.body.email)) {
    return res.status(400).json({ success: false, message: "InvalidRequest" });
  }
  let user = new User(req.body);
  user
    .save()
    .then(game => {
      res.status(200).json({ sucess: "User is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};
exports.users = async function(req, res) {
  try {
    const users = await User.find();
    res.status(200).send({ error: false, result: users, msg: "" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
exports.delete = async function(req, res) {
  try {
    const users = await User.findByIdAndRemove({ _id: req.params.id });
    res
      .status(200)
      .send({ error: false, result: [], msg: "Successfully removed" });
  } catch (err) {
    res.status(500).send({ error: true, result: [], msg: err.stack });
  }
};
