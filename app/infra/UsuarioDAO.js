function UsuarioDAO(connection){
    this._connection=connection
}


UsuarioDAO.prototype.inserir = function(data,callback){
    this._connection.query('INSERT INTO USUARIO (nome,senha,email,cpf) VALUES ($1,$2,$3,$4)',data, callback)
}
UsuarioDAO.prototype.localizarNome = function(data,callback){
    this._connection.query('select * from usuario where  nome ilike  $1',data, callback);
}
UsuarioDAO.prototype.localizarEmail = function(data,callback){
    this._connection.query('select * from usuario where  email ilike  $1',data, callback);
}
UsuarioDAO.prototype.localizarCpf = function(data,callback){
    this._connection.query('select * from usuario where  cpf =  $1',data, callback);
}
UsuarioDAO.prototype.localizarMatricula = function(data,callback){
    this._connection.query('select * from usuario where  matricula ilike  $1',data, callback);
}
module.exports = function(){
    return UsuarioDAO;
}