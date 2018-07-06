import express from "express";
import bodyParser from "body-parser";
import busboyBodyParser from "busboy-body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";
import path from "path";
import mongoose from "mongoose";
import auth from "./server/routers/auth";
import users from "./server/routers/users";
import home from "./server/routers/home";
import fileImage from "./server/routers/fileImage";

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
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
app.use(bodyParser.json());
app.use(busboyBodyParser({ limit: "10mb" }));


app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/home", home);
app.use("/api/fileImage",fileImage)

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost on 8080"));
