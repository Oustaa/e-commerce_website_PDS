require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET =
  process.env.ACCESS_TOKEN_SECRET ||
  "456854y698hitr9854hgrtg9845yg8r9tgfgw98rgt";

async function logIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials", email: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials", password: false });
    }
    const token = jwt.sign(
      { id: user._id, privileges: user.privileges },
      JWT_SECRET
    );
    res.status(200).json({ accessToken: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { logIn };
