const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("listening on 3000")
}) 
