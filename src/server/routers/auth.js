import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { sendResetPasswordEmail } from "../mailer";

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isPasswdCorrect(credentials.password)) {
      res.json({ user: user.authJsonToken() });
    } else {
      res.status(400).json({ errors: { gloable: "Invalid Credentials" } });
    }
  });
});

router.post("/confirmation", (req, res) => {
  const { token } = req.body;
  User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: "", confirmed: true },
    { new: true }
  ).then(
    user =>
      user ? res.json({ user: user.authJsonToken() }) : res.status(400).json({})
  );
});

router.post("/resetPasswordRequest", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      sendResetPasswordEmail(user);
      res.json({});
    } else {
      res
        .status(400)
        .json({ errors: { gloable: "There is no user with such email" } });
    }
  });
});

router.post("/resetPassword", (req, res) => {
  const { token, password } = req.body.data;
  jwt.verify(token, "secretKey", (error, decoded) => {
    if (error) {
      res.status(401).json({ errors: { gloable: "Invalid token!" } });
    } else {
      User.findOne({ _id: decoded._id }).then(user => {
        if (user) {
          user.setPassword(password);
          user.save().then(() => res.json({}));
        } else {
          res.status(404).json({ errors: { gloable: "Invalid token!" } });
        }
      });
    }
  });
});

router.post("/validatetoken", (req, res) => {
  jwt.verify(req.body.token, "secretKey", error => {
    if (error) {
      res.status(401).json({});
    } else {
      res.json({});
    }
  });
});

export default router;
