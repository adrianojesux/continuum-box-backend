const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use("/files/", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

require('./App/routes/index')(app);
const HOST = "0.0.0.0";
app.listen(3000, HOST);