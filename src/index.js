const express = require('express');
const mysql = require('mysql');
const { DB_CREDENTIALS  } = process.env;

const { host, password, username, port } = JSON.parse(DB_CREDENTIALS);

const con = mysql.createConnection({
  host,
  password, 
  user: username,
  port
});

const app = express();
const PORT = process.env.PORT || 8080;
let error;
let connected = false;

con.connect((err) => {
  if(err) {
    error = err;
  } else {
    connected = true;
  }
})

app.get('*', (req, res) => {

  res.send({ err, connected: true })

});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
