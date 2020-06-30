const mysql = require('mysql');
const fs = require('fs');

const { username, password, host, port } = JSON.parse(fs.readFileSync('./scripts/credentials.json', 'utf8'));
const { DB_NAME } = process.env;
const con = mysql.createConnection({
  user: username,
  password,
  host,
  port,
});

con.connect((err) => {
  if (err) throw err;
  con.query(`CREATE DATABASE ${DB_NAME}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
})
