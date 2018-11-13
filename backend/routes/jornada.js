module.exports = function (app) {

    //recebe a requisisao de registro de ponto.

    app.post('/registraPonto', (req, res) => {


        let JornadaController = new app.Controller.JornadaController()
        JornadaController.registrar(res, req, app)
    })



}