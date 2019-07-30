const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
require('./App/routes/index')(app);
const HOST = "0.0.0.0";
app.listen(3000, HOST);