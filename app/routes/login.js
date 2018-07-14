
module.exports = function (app) {
    

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/', (req, res) => {
        const pool = app.infra.connectionFactory()
        var user = req.body

        console.log(user)

        pool.query('select * from usuario where login=$1', [user.login], (err, res) => {
            if (user.senha == res.rows[0].senha) { console.log('Logado com sucesso') }
            else { console.log('login ou senha invalido') }
        })
    })


}