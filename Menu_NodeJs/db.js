const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = 'mongodb://127.0.0.1:27017/test_data';
const mongoURL = process.env.MONGO_URI;

mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.log("Connection error:", err);
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected")
});

module.exports = db;

