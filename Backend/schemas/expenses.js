var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var expensesSchema = mongoose.Schema({
  user_id: { type: ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  date: { type: Date }
});

module.exports = expensesSchema;
