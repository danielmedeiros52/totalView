

class JornadaDAO {
    constructor(connection) {
        this._connection = connection;
    }
    registrarPontoChegada(data, callback) {
        this._connection.query(`INSERT INTO jornada_efetuada_dia (usuario_id,hora_chegada_jornada,jornada_em) 
                                VALUES ($1,now()::timestamp,now()::timestamp)`, data, callback);
    }

    atualizarJornadaDia(data, jornada, callback) {

        this._connection.query(`UPDATE jornada_efetuada_dia 
			                    	SET ${jornada}= now()::timestamp 
			                            	where usuario_id =$1 AND  jornada_em::date = current_date`, data, callback)

    }
    retornaJornada(data, callback) {
        this._connection.query(`SELECT * FROM jornada_efetuada_dia  
                                WHERE usuario_id=$1 AND jornada_em::date = current_date`, data, callback)

    }

    carregaJornada(data, callback) {
        this._connection.query(`SELECT * FROM user_view 
                                WHERE id_usuario =$1 AND hora_chegada_jornada::date = current_date `, data, callback)


    }



}


module.exports = function () {
    return JornadaDAO;
}