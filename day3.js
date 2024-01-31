// const jsondata1 = '{ "name": "Alice", "age": 25, "hobbies": ["reading", "painting"] }'
// const object = JSON.parse(jsondata1);
// console.log(object.age)

// const jsonobj = { "title": "Book", "pages": 200 };
// const jsondata2 = JSON.stringify(jsonobj);
// console.log(jsondata2)


const express = require('express');
const app = express();

app.get('/',(req, res) => {         //get request info from server
    res.send("hello vro hey")
})

app.get('/menu', (req, res) => {
    var options = {
        isMenu: true,
        working: true,
        anybug: false
    }
    res.send(options)
})

app.listen(9989, () => {
    console.log("listening to port")
})