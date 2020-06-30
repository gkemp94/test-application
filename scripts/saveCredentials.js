const fs = require('fs');

const { DB_CREDENTIALS } = process.env;
console.log(DB_CREDENTIALS);
console.log(process.env);
fs.writeFileSync('./scripts/credentials.json', DB_CREDENTIALS);
