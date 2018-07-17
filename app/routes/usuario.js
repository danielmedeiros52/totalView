
module.exports = function (app) {


    app.get('/registro', (req, res) => {
        res.render('inscricao')
    })

    app.post('/registro/salvar', (req, res) => {
        const pool = app.infra.connectionFactory()
        var UsuarioDAO = new app.infra.UsuarioDAO(pool)
        var user = req.body
        var data = [user.nome, user.login, user.senha, user.email]
        UsuarioDAO.inserir(data, (err, resultado) => {
            if(err){
                res.send(err)
            }
          res.send(resultado)
        })

    })


}