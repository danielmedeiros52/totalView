class JornadaController {

    registrar(res, req, app) {

        createConection(app).registrarPonto()



    }


}





function createConection(app) {
    const pool = app.tools.connectionFactory()
    let JornadaDAO = new app.tools.JornadaDAO(pool)
    return JornadaDAO
}

module.exports = app => {
    return JornadaController;
}