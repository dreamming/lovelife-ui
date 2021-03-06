import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    passwordHash: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, default: "" }
  },
  {
    timestamps: true
  }
);

schema.methods.isPasswdCorrect = function isPasswdCorrect(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.authJsonToken = function authJsonToken() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT()
  };
};

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    { email: this.email, confirmed: this.confirmed },
    "secretKey",{
      expiresIn: "60h"
    }
  );
};

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

schema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
};

schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`;
};

schema.methods.generateResetPasswordUrl = function generateResetPasswordUrl() {
  return `${process.env
    .HOST}/resetPassword/${this.generateResetPasswordToken()}`;
};

schema.methods.generateResetPasswordToken = function generateResetPasswordToken() {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "60h"
  });
};

schema.plugin(uniqueValidator, { message: "This email is already token" });

export default mongoose.model("User", schema);
