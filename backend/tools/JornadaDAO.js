

class JornadaDAO {
    constructor(connection) {
        this._connection = connection;
    }
    registrarPonto() {
        this._connection.query('INSERT INTO jornada_efetuada_dia (nome,descricao) VALUES ($1,$2)', data, callback);

    }
    localizarNome(data, callback) {
        this._connection.query('SELECT * FROM usuario WHERE  nome ILIKE  $1', data, callback);
    }
    localizarEmail(data, callback) {
        this._connection.query('SELECT * FROM usuario WHERE  email ILIKE  $1', data, callback);
    }
    localizarCpf(data, callback) {
        this._connection.query('SELECT * FROM usuario WHERE  cpf =  $1', data, callback);
    }
    localizarMatricula(data, callback) {
        this._connection.query('SELECT * FROM usuario WHERE  matricula ILIKE  $1', data, callback);
    }
}


module.exports = function () {
    return JornadaDAO;
}