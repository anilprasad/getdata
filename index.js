require('dotenv').config();

// (packages) Load required packages
var express = require('express');
var api = require('express-mongodb-rest')();

// (app) Create express app
var app = express();
app.use('/api/:collection', api); // add MongoDB REST API
app.listen(3100);
