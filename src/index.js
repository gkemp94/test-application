const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.send(req.url);
  res.send(process.env);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
