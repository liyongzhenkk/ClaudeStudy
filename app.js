const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello AI Coding!' });
});

app.listen(3000);
