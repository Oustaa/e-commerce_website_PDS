require("dotenv").config();
const jwt = require("jsonwebtoken");

function authanticateUser(req, res, next) {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) return res.status(401).json({ message: "you must be logged in" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
    console.log(user);
    if (err || !user)
      return res.status(403).json({ message: "you must be logged in as user" });
    req.user = user;
    next();
  });
}

function authanticateAdmin(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "you must be logged in" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
    if (err || !user || user.privileges === "user")
      return res
        .status(403)
        .json({ message: "you must be logged in as admin" });
    req.user = user;
    next();
  });
}

module.exports = { authanticateUser, authanticateAdmin };
