const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_photos_url: { type: String, required: true },
  roles: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) {
        return reject(err);
      }

      return resolve(same);
    });
  });
};

const User = mongoose.model("user", userSchema); // table name - users

module.exports = User;
