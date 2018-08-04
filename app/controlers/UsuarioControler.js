
class UsuarioControler {
    cadastrar(res, req, app) {
        let user = req.body
        let data = [user.nome, user.senha, user.email, user.cpf]
        let dao = createConection(app)
        dao.localizarEmail([user.email], (err, result) => {

            if (result.rowCount != 0) {
                res.send('Usuário já existe !')
            } else {
                dao.localizarCpf([user.cpf], (err, result) => {
                    if (result.rowCount != 0) {
                        res.send('Usuário já existe !')
                    } else {
                        inserir(data, dao)
                    }
                })
            }
        }


        )
    }
    login(res, req, app) {
        let dao = createConection(app)
        let user = req.body
        let data = [user.email]
        dao.localizarEmail(data, (err, result) => {
            if (err) {
                console.log(err)
            }
            if (result.rowCount != 0) {
                console.log(result.rows[0])
                if (user.senha == result.rows[0].senha) {
                    req.session.user = result.rows[0]
                    res.send('/dashboard')
                } else {
                    res.send('login ou senha invalidos')
                }



            } else {
                res.send('login ou senha invalidos')
            }

        })

    }

}
function inserir(data, dao) {
    dao.inserir(data, (err, resultado) => {
        if (err) {
            res.send(err)
        }
        res.send(resultado)
    })
}
function createConection(app) {
    const pool = app.infra.connectionFactory()
    let UsuarioDAO = new app.infra.UsuarioDAO(pool)
    return UsuarioDAO
}
module.exports = function (app) {
    return UsuarioControler;
}