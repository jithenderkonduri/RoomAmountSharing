var mongoose = require("mongoose");

var userSchema = require("./schemas/user.js");
var expensesSchema = require("./schemas/expenses.js");
var reimbursementsSchema = require("./schemas/reimbursements.js");
/*
 * Connect to mongodb.
 */
(async function() {
  let connection;
  try {
    // Connection URL
    var MONGO_URI = process.env.db;
    // Use connect method to connect to the Server
    connection = await mongoose.connect(MONGO_URI);

    console.log("database connected successfully");
  } catch (err) {
    console.log(err.stack);
  }

  if (connection) {
    client.close();
  }
})();

exports.User = mongoose.model("User", userSchema);
exports.Expenses = mongoose.model("Expenses", expensesSchema);
exports.Reimbursements = mongoose.model("reimbursements", reimbursementsSchema);
