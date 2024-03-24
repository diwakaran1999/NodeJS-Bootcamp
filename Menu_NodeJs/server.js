const express = require('express');
require('dotenv').config();
const app = express();
const db = require('../Menu_NodeJs/db')
const bodyParser = require('body-parser');
const passport = require("./auth");

app.use(bodyParser.json()); // support json encoded bodies

const port = process.env.PORT || 3000;

//Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}]`);
    next(); //callback function
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session:false})

app.get('/', (req, res) => {
    res.send("Welcome to the server")
})

//import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//use the routers
app.use('/person', localAuthMiddleware, personRoutes);
app.use('/menuItem', menuRoutes);

app.listen(port, () => {
    console.log("Server is running on port 3333");
});