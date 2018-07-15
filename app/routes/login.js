
module.exports = function (app) {
    

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/', (req, res) => {
        const pool = app.infra.connectionFactory()
        var loginDAO = new app.infra.LoginDAO(pool)
        var user = req.body

        console.log(user)

        loginDAO.logar([user.login], (err, resultado) => {
           console.log(err)
           console.log(resultado)
        })
    })


}