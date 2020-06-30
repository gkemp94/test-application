const fs = require('fs');

const { DB_CREDENTIALS } = proceess.env;

fs.writeFileSync('./scripts/credentials.json', DB_CREDENTIALS);
