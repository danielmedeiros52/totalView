module.exports = function (app) {
    app.get('/', (req, res) => {
       
        const { Client } = require('pg')
        const client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'postgres',
            database:'totalView'
        })
       client.connect((err) => {
            if (err) {
              console.error('connection error', err.stack)
            } else {
              console.log('connected')
            }
          })
        
        res.render('index')
    })

    

}