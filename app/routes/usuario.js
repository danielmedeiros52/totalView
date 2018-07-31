
module.exports = function (app) {
    app.post('/usuario/cadastrar', (req, res) => {
        const pool = app.infra.connectionFactory()
        var UsuarioDAO = new app.infra.UsuarioDAO(pool)
        var user = req.body
        var data = [user.nome, user.senha, user.email, user.cpf]
        UsuarioDAO.localizarEmail([user.email], (err, result) => {
            if (result.rowCount != 0) {
                res.send('Usuário já existe !')
            } else {
                UsuarioDAO.localizarCpf([user.cpf], (err, result) => {
                    if (result.rowCount != 0) {
                        res.send('Usuário já existe !')
                    } else {
                        cadastrar(data)
                    }
                })
            }
        })


        function cadastrar(data) {
            UsuarioDAO.inserir(data, (err, resultado) => {
                if (err) {
                    res.send(err)
                }
                res.send(resultado)
            })
        }

    })


}