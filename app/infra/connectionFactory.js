const { Pool } = require('pg')
function connection(){
var pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'TotalView'
})
return pool
}
module.exports = function() {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
    return connection;
  }