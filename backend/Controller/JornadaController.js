class JornadaController {

    registrar(res, req, app) {
        let bodyResponse = res.body
        console.log('AAAAAA', res.body);

        let data = [bodyResponse.horachegada, req.session.user]
        console.log('AAAAAA', res.body);

        if (bodyResponse.horachegada === '') {
            createConection(app).registrarPonto(data, (err, result => {
                if (result.rowCount === 0) {
                    res.send('Erro ao registrar ponto')
                } else {

                    reateConection(app).retornaJornada(data, (err, reult => {
                        res.send(result.rows[0].senha)
                        result.rows[0].senha
                    }))


                }
            }))
        } else {
            createConection(app).atualizarPonto()
        }




    }


}





function createConection(app) {
    const pool = app.tools.connectionFactory()
    let JornadaDAO = new app.tools.JornadaDAO(pool)
    return JornadaDAO
}


module.exports = function (app) {
    return JornadaController;
}