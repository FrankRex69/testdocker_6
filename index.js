var express = require('express')
var app = express()
require('dotenv').config()
var port_app = process.env.PORT_APP
const host = "0.0.0.0";

console.log(port_app);
console.log(`http://localhost:${process.env.PORT_HOST}`);

app.get('/', function (req, res) {
  res.send('Hello World test Docker !?? ww..')
})

app.listen(port_app, host);