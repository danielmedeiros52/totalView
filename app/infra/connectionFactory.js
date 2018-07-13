const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'totalView'
})
module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
  }