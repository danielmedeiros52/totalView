const { Client } = require('pg')
module.exports = function (){
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database:'totalView'
})
return client
}