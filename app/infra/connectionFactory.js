const { Pool } = require('pg')
function connection(){
var pool = new Pool({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'postgres',
    database: 'totalView'
})
return pool
}
module.exports = function() {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    }
    return connection;
  }