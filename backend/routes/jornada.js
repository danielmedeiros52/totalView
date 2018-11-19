module.exports = function (app) {

    //recebe a requisisao de registro de ponto.
    app.use('/registraPonto', (req, res, next) => {
        if (!req.session.user) {
            res.send('Sua sessão expirou , favor faça login novamente.')
        } else {
            console.log('res >>>>>', res)
            next()
        }
    })
    app.post('/registraPonto', (req, res) => {


        let JornadaController = new app.Controller.JornadaController()
        JornadaController.registrar(res, req, app)
    })




}