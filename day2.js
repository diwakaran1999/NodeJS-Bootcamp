const day1 = require("./day1")
var fs = require('fs')
var os = require('os')
var _ = require('lodash')

// var calculateArea = (r) => Math.PI * (r) * (r);
// console.log(calculateArea(7));

// function calculateArea(r) {
//     return Math.PI * r * r;
// }
// console.log(calculateArea(10))

// const calculateArea = (r) => {
//     return Math.PI * r * r;
// }
// console.log(calculateArea(5))

// var performOperation = (a, b, callback) => {
//     return callback(a,b);
// }
// var add=(x, y) => {
//     return x+y;
// }
// var mul=(x, y) => {
//     return x*y;
// }
// var sub=(x, y) => {
//     return x-y;
// }
// var div=(x, y) => {
//     return x/y;
// }
// console.log(performOperation(5,6,mul))

// fs.appendFile("data.txt", "hello \n",()=> {
//     console.log("Appending to data.txt");
// })

// fs.readFile('data.txt', 'utf8', (err, data) => {
// if (err) {
// console.error("Error- reading file:", err);
// return;
// }
// console.log(data);
// });

// var user = os.userInfo()
// console.log(user)
// console.log(user.uid)
// console.log(user.username)

// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.platform())
// console.log(os.cpus().length)

// const evenSum = (arr) => {
//     const even = _.filter(arr, arr => arr % 2 === 0)
//     return _.sumBy(even)
// }
// const arr = [5, 6, 7, 8, 2, 4];
// console.log(evenSum(arr))

console.log(day1.add(5,6))  //module export