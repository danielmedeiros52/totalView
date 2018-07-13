
module.exports = function (app) {
    const pool = require('../infra/connectionFactory')

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/', (req, res) => {
        var user = req.body

        console.log(user)

        pool.query('select * from usuario where login=$1', [user.login], (err, res) => {
           console.log(res.rows[0].length())
            if (user.senha == res.rows[0].senha) { console.log('Logado com sucesso') }
            else { console.log('login ou senha invalido') }
        })
    })


}