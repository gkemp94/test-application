const fs = require('fs');

const { DB_CREDENTIALS } = process.env;

fs.writeFileSync('./scripts/credentials.json', DB_CREDENTIALS);
