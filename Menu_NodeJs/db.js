const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = 'mongodb://127.0.0.1:27017/test_data';
const mongoURL = 'mongodb+srv://diwakaranagr1999:node_bootcamp@cluster0.ri3bn6g.mongodb.net/';



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

