const express = require('express');
const cors = require('cors');
const compression = require('compression');

const PORT = 80;

const app = express();

app.use(cors());
app.use(compression());

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT);
