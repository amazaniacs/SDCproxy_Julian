require('newrelic');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const proxy = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 80;

app.use(morgan('tiny'));
app.use(cors());
app.use(compression());

app.use('/', proxy({ target: 'http://ec2-52-53-247-104.us-west-1.compute.amazonaws.com' }));

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
