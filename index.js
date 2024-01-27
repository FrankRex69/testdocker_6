var express = require('express')
var app = express()
require('dotenv').config()
var port_app = 4000
const host = "0.0.0.0";
const port_host = 3897

console.log(port_app);
console.log("ddd.1");
console.log(`http://localhost:${port_host}`);

app.get('/', function (req, res) {

  res.send('Hello World test Docker !?? XYZ ! cvb ==?????rrrWWW!77')

})

app.listen(port_app, host);
