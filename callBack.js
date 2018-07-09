var fs = require("fs");
var theReadDataFs = fs.readFileSync('read.txt');


fs.readFile('read.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
 });
console.log("Program Ended");