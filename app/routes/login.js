
module.exports = function (app) {

    app.get('/', (req, res) => {
        res.render('login')
    })
    app.post('/logar', (req, res) => {
        const pool = app.infra.connectionFactory()
        var UsuarioDAO = new app.infra.UsuarioDAO(pool)
        var user = req.body
        var userDB
        if (user.login.includes('@')) {
            user.email = user.login
            var data = [user.email]
            UsuarioDAO.localizarEmail(data, (err, resultado) => {
                if (err) {
                    res.send('Erro ao tentar logar!')
                }
                if (resultado.rowCount != 0) {
                    userDB = resultado.rows
                    if (user.senha == userDB.senha) {
                        req.session.user = userDB[0]
                        res.send('/dashboard')

                    } else {
                        res.send('Erro, login ou senha invalido!')
                    }
                }else {
                    res.send('Erro, login ou senha invalido!')
                }
            })
        } else {
            user.nome = user.login
            var data = [user.nome]
            UsuarioDAO.localizarNome(data, (err, resultado) => {
                if (err) {
                    res.send('Erro ao tentar logar!')
                }
                if (resultado.rowCount != 0) {
                    userDB = resultado.rows[0]
                    if (user.senha == userDB.senha) {
                        req.session.user = userDB
                        res.send('/dashboard')

                    } else {
                        res.send('Erro, login ou senha invalido!')
                    }
                }else {
                    res.send('Erro, login ou senha invalido!')
                }
            })
        }
    })

    app.get('*', function (req, res) {
        res.locals.error = {
            cod: '404',
            mensagem: 'Página não encontrada!'
        }
        res.render('error/error')
    });
}