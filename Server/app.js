var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

var MatiereController = require('./Routes/routes');
app.use('/', MatiereController);



module.exports = app;