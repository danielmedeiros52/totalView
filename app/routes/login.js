
module.exports = function (app) {
    app.get('/', (req, res) => {
        if(req.session.user==null){
          res.render('login')
        }else{
           res.redirect('/dashboard') 
        }
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
                } else {
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
                } else {
                    res.send('Erro, login ou senha invalido!')
                }
            })
        }
    })


    app.get('/logoff', function (req, res) {
        req.session.destroy(function (err) {
            // cannot access session here
            if(err){console.log(err)}
        })
        res.redirect('/')
    })




    app.get('*', function (req, res) {
        res.locals.error = {
            cod: '404',
            mensagem: 'Página não encontrada!'
        }
        res.render('error/error')
    });
}