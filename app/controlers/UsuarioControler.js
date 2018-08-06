
class UsuarioControler {
    cadastrar(res, req, app) {
        let user = req.body
        let data = [user.nome, user.senha, user.email, user.cpf]
        createConection(app).localizarEmail([user.email], (err, result) => {

            if (result.rowCount != 0) {
                res.send('Usuário já existe !')
            } else {
                createConection(app).localizarCpf([user.cpf], (err, result) => {
                    if (result.rowCount != 0) {
                        res.send('Usuário já existe !')
                    } else {
                        inserir(res,data, createConection(app))
                    }
                })
            }
        }


        )
    }
    login(res, req, app) {
        let user = req.body
        let data = [user.email]
        createConection(app).localizarEmail(data, (err, result) => {
            if (err) {
                console.log(err)
            }
            if (result.rowCount != 0) {
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
function inserir(res,data, dao) {
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