

class JornadaDAO {
    constructor(connection) {
        this._connection = connection;
    }
    registrarPontoChegada(data, callback) {
        this._connection.query(`INSERT INTO jornada_efetuada_dia (usuario_id,hora_chegada_jornada,jornada_em) 
                                VALUES ($1,now()::timestamp,now()::timestamp)`, data, callback);
    }

    atualizarPonto(data, jornada, callback) {

        this._connection.query(`INSERT INTO jornada_efetuada_dia (${jornada}) 
                                VALUES (now()::timestamp) where usuario_id =$1 and  `)

    }
    retornaJornada(data, callback) {
        this._connection.query(`SELECT * FROM jornada_efetuada_dia  
                                WHERE usuario_id=$1 AND jornada_em::date = current_date`, data, callback)

    }


}


module.exports = function () {
    return JornadaDAO;
}