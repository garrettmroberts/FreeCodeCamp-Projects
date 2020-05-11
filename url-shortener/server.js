"use strict";
require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var dns = require("dns");
var cors = require("cors");
var db = require("./models/url");
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  "original_url": String,
  "short_url": String
});
const url = mongoose.model("url", urlSchema);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/api/shorturl/:id", (req, res) => {
  db.findOne({ short_url: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result === null) {
        res.json({ "Error": "No associated link." });
      } else {
        res.redirect(result.original_url);
      };
    };
  });
});

app.post("/api/shorturl/new", (req, res) => {
  const testUrl = req.body.url.split("//");
  dns.lookup(req.body.url.split("//")[1], (err, address, family) => {
    if (err) {
      res.json({ "error": "invalid URL" });
    } else if (testUrl.length < 2) {
      res.json({ "error": "invalid URL" });
    }
    else {
      const newDoc = {
        "original_url": req.body.url,
        "short_url": Math.floor(Math.random() * 1000)
      }
      db.create(newDoc);
      res.json(newDoc);
    }
  })
});

app.listen(port, function () {
  console.log("Node.js listening ...");
});
