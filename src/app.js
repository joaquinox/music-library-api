const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Welcome to your music library!' });
});

app.post('/artists', (req, res) => {
  return res.status(201).send(req.body.id);
});

module.exports = app;
