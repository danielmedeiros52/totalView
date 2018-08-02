class UsuarioDAO {
    constructor(connection) {
        this._connection = connection;
    }
    inserir(data, callback) {
        this._connection.query('INSERT INTO USUARIO (nome,senha,email,cpf) VALUES ($1,$2,$3,$4)', data, callback);
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


module.exports = function(){
    return UsuarioDAO;
}