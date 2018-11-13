class OcorrenciaDAO {

    constructor(connection) {
        this._connection = connection;
    }




    inserir(data, callback) {
        this._connection.query('INSERT INTO OCORRENCIA (nome,descricao) VALUES ($1,$2)', data, callback);
    }

    atualizar(data, filtro, callback) {
        this._connection.query(`UPDATE OCORRENCIA 
                                SET NOME = $1 
                                DESCRICAO = $2 WHERE  ${filtro}`, data, callback);
    }

    excluir(data, filtro, callback) {
        this._connection.query(`DELETE FROM OCORRENCIA WHERE  ${filtro}`);
    }

    carregar(data, filtro, callback) {
        this._connection.query(`SELECT * FROM OCORRENCIA  WHERE ID = ${filtro}`);
    }

}


