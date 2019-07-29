const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

app.listen(3000);
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', ( req, res) => {
    return res.send({ messsage : 'Ok'});
});
