const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/test_data';


// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
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

