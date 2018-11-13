class JornadaController {

    registrar(res, req, app) {
        let bodyResponse = req.body

        let data = [bodyResponse.horachegada, req.session.user]

        if (bodyResponse.horachegada === '') {
            createConection(app).registrarPontoChegada([req.session.user.id_usuario], (err, result) => {
                if (result.rowCount === 0) {
                    res.send('Erro ao registrar ponto')
                } else {
                    createConection(app).retornaJornada(data, (err, reult) => {
                        console.log('>>>>>>>' + result.rows[0]);


                        res.send(result.rows[0].senha)
                    })


                }
            })
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