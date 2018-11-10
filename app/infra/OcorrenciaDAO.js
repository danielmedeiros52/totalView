class OcorrenciaDAO {

    constructor(connection) {
        this._connection = connection;
    }

    inserir(data, callback) {
        this._connection.query('INSERT INTO OCORRENCIA (nome,descricao) VALUES ($1,$2)', data, callback);
    }

    atualizar(data,callback,campo,filtro){
        this._connection.query(`UPDATE OCORRENCIA SET ${campo} = $1 WHERE  ${filtro}`);
    }

    excluir(data,callback,filtro){
        this._connection.query(`DELETE FROM OCORRENCIA WHERE  ${filtro}`);
    }

    carregar(data,callback,filtro){
        this._connection.query(`SELECT * FROM OCORRENCIA  WHERE ${campo} = ${filtro}`);
    }
   
}


