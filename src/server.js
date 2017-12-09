import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";
import path from "path";
import mongoose from "mongoose";
import auth from "./server/routers/auth";
import users from "./server/routers/users";
import home from "./server/routers/home";

dotenv.config();

const app = express();

mongoose.Promise = Promise;
mongoose.connect("mongodb://dmz:dmz@8lovelife.com:27017/dmz", {
  useMongoClient: true
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connectioned");
});

mongoose.connection.on("error", err => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});

app.use(bodyParser.json());

app.use("/api/auth", auth);
app.use("/api/users", users);
// app.use("/api/home", home);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost on 8080"));
