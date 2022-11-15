const mongoose = require("mongoose");
const env = require('./environment');
const url = `mongodb+srv://sandipvidhate:radhe123@cluster0.kkfbksy.mongodb.net/${env.db}?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to DB"));

db.once('open', function (paam) {
    console.log("Connected to DB successfully...");
})
module.exports = db;