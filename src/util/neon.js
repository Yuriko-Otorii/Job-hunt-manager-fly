const { Client, Pool } = require('pg')
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// })

// module.exports = client;


const neonPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = neonPool;
