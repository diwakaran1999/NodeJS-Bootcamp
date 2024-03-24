const express = require('express');
require('dotenv').config();
const app = express();
const db = require('../Menu_NodeJs/db')
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("Welcome to the server")
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuItem', menuRoutes);

app.listen(port, () => {
    console.log("Server is running on port 3333");
});