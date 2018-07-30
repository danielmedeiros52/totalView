
module.exports = function (app) {
    app.post('/usuario/cadastrar', (req, res) => {
        const pool = app.infra.connectionFactory()
        var UsuarioDAO = new app.infra.UsuarioDAO(pool)
        var user = req.body
        console.log(user)
        var data = [user.nome,  user.senha, user.email,user.cpf]
        UsuarioDAO.inserir(data, (err, resultado) => {
            if(err){
                res.send(err)
            }
          res.send(resultado)
        })

    })


}