const mongoose = require("mongoose");
const env = require('./environment');

mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to DB"));

db.once('open', function (paam) {
    console.log("Connected to DB successfully...");
})
module.exports = db;