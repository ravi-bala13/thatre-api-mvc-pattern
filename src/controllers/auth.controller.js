const User = require("../models/users.model");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exists", status: "Failed" });
    }

    user = await User.create(req.body);

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .json({
          message: "can't find account with this email",
          status: "Failed",
        });
    }

    const matchPassword = await user.checkPassword(req.body.password);

    if (!matchPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect Email or password", status: "Failed" });
    }

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = { register, login };
