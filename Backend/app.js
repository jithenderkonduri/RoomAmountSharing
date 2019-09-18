var express = require("express");
var expressSession = require("express-session");
var subdomain = require("express-subdomain");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

// Instantiate App
var app = express();

// Local additions for the application
app.locals.moment = require("moment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization,token,x-access-token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/dashboard", require("./routes/dashboard.routes.js"));
app.use("/users", require("./routes/users.routes.js"));
app.use("/expenses", require("./routes/expenses.routes.js"));
app.use("/reimbursements", require("./routes/reimbursements.routes.js"));

// development and non-production error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    return res.status(err.status || 500).json({ error: err.message });
  });
} else if (app.get("env") !== "production") {
  app.use(function(err, req, res, next) {
    return res.status(err.status || 500).json({ error: err.message });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  return res.status(err.status || 500).json({ error: "RequestError" }); //send('Application Error');
});

// Start Background Jobs
// require('./bin/background');

module.exports = app;
