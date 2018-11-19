
module.exports = function (app) {

    app.get('/', (req, res) => {
        if (req.session.user == null) {
            res.render('login')
        } else {
            res.redirect('/dashboard')
        }
    })
    app.post('/logar', (req, res) => {
        let UsuarioControler = new app.Controller.UsuarioControler()
        UsuarioControler.login(res, req, app)

    })


    app.get('/logoff', function (req, res) {
        req.session.destroy(function (err) {
            // cannot access session here
            if (err) { console.log(err) }
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