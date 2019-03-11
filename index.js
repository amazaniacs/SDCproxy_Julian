require('newrelic');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const proxy = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(compression());

app.use('/', proxy({ target: 'http://localhost:3004' }));

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));

