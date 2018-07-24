
module.exports = function (app) {


    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/', (req, res) => {
        const pool = app.infra.connectionFactory()
        var loginDAO = new app.infra.LoginDAO(pool)
        var user = req.body
        loginDAO.logar([user.login], (err, resultado) => {
            if (err) {
                res.send('Erro ao tentar logar!')
            }
            if (user.senha == resultado.rows[0].senha) {
                
                const userDB = resultado.rows[0]
                const usuario = {
                    id: userDB.id,
                    name: userDB.nome,
                }
                req.session.user = userDB
                res.send('/dashboard')

            } else {
                res.send('Erro, login ou senha invalido!')
            }



        })
    })


}