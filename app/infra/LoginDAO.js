function LoginDAO(connection){
    this._connection = connection;
}


LoginDAO.prototype.logar = function([arg],callback){
    this._connection.query('select * from usuario where login=$1',[arg], callback);
}

module.exports = function(){
    return LoginDAO;
}