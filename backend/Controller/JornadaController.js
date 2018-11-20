class JornadaController {

    registrar(res, req, app) {
        let bodyRequest = req.body
        console.log(bodyRequest);

        let data = [bodyRequest.horachegada, req.session.user]

        if (bodyRequest.horachegada === '') {
            createConection(app).registrarPontoChegada([req.session.user.id_usuario], (err, result) => {
                if (result.rowCount === 0) {
                    res.send('Erro ao registrar ponto')
                } else {

                    createConection(app).retornaJornada([req.session.user.id_usuario], (err, result) => {
                        res.send(result.rows[0])
                    })
                }
            })
        } else {
            createConection(app).atualizarJornadaDia([req.session.user.id_usuario], bodyRequest.pxjornada, (err, result) => {
                if (err) {
                    console.log('ERRORR JORNADA CONTROLLER >>>>>>', err)


                }
                if (result.rowCount === 0) {
                    res.send('Erro ao registrar ponto')
                } else {

                    createConection(app).retornaJornada([req.session.user.id_usuario], (err, result) => {
                        res.send(result.rows[0])
                    })
                }

            })
        }
    }

    carregarJornada(req, res, app) {
        createConection(app).carregaJornada([req.session.user.id_usuario], (err, result) => {
            if (result.rowCount !== 0) {
                res.send(result.rows[0])
            }
        })
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