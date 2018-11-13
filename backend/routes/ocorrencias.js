module.exports = function (app) {

    //recebe a requisisao de registro de ponto.

    app.post('/registraPonto', (req, res) => {
        let ocorrenciaController = new app.Controller.OcorrenciaController()
        ocorrenciaController.registrar(res, req, app)
    })



}