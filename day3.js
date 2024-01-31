const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("hello vro hey")
})

app.listen(9989)