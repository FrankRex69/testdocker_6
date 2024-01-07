var express = require('express')
var app = express()
require('dotenv').config()
var port_app = process.env.PORT_APP
console.log(port_app);
console.log(`http://localhost:${process.env.PORT_HOST}`);

app.get('/', function (req, res) {  


  res.send('Hello World testDocker.')

})

app.listen(port_app)
