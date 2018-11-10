class OcorrenciaControler{
//  implementar métodos do controlsdor.

}

function inserir(res,data, dao) {
    dao.inserir(data, (err, resultado) => {
        if (err) {
            res.send(err)
        }
        res.send(resultado)
    })
}
function createConection(app) {
    const pool = app.infra.connectionFactory()
    let UsuarioDAO = new app.infra.OcorrenciaDAO(pool)
    return OcorrenciaDAO
}

module.exports =  app => {
    return OcorrenciaControler;
}