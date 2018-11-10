class OcorrenciaControler{
//  implementar métodos do controlsdor.
    Cadastrar(){
        let html = req.body;
        let data = [html.nome,html.descricao];
        
        createConection(app).inserir(html.descricao,(err,result)=>{
            if (result.rowCount != 0) {
                res.send('Ocorrência já existe !');
            } else {
                inserir(res,data, createConection(app));
            }

        });
    }

    update(){

        let html = req.body;
        let data = [html.nome,html.descricao];
        
        createConection(app).atualizar(html.id,(err,result)=>{
            if (result.rowCount == 0) {
                res.send('Ocorrência não encontrada!');
            } else {
                atualizar(res,data, createConection(app));
            }

        });
    }

}// Fim do controlador.





function inserir(res,data, dao) {
    dao.inserir(data, (err, resultado) => {
        if (err) {
            res.send(err)
        }
        res.send(resultado)
    })
}

function atualizar(res,data, dao) {
    dao.atualizar(data, (err, filtro,resultado) => {
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