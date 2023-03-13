const User = require("../models/user.model");
const bcrypt = require("bcrypt");

async function getUsers(req, res) {
  const users = await User.find({ deleted_at: null }, { password: 0, __v: 0 });
  res.status(200).send(users);
}

async function suspendUser(req, res) {
  const { id } = req.params;
  const user = await User.updateOne({ _id: id }, { $set: { suspended: true } });
  if (user.modifiedCount === 1)
    return res.json({
      user_id: id,
      message: `user with id ${id} has been suspended`,
    });
}

async function postUser(req, res) {
  console.log("signing in");
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = new User({ ...req.body, password: hash });

  try {
    const savedUser = await user.save();
    res.status(201).json({
      email: savedUser.email,
      username: savedUser.username,
      id: savedUser._id,
      privileges: savedUser.privileges,
    });
  } catch (err) {
    if (err.code === 11000)
      return res.status(300).json({
        existed_account: 1,
        message: `account already exists, try logging in`,
      });
    else if (err.name === "ValidationError") {
      return res.status(400).json({
        message: `missing required fields`,
      });
    } else return res.status(500).json(err);
  }
}

module.exports = { getUsers, suspendUser, postUser };
