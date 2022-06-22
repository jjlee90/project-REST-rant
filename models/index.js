require("dotenv").config();
const mongoose = require("mongoose");
const mongo = process.env.MONGO_URI;

mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
