require("dotenv").config();
const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.ATLAS_URI;
// db.url = "mongodb://localhost:27017/gkeep";
db.models = require("./model.js");

module.exports = db;