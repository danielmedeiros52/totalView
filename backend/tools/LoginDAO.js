function LoginDAO(connection){
    this._connection = connection;
}


module.exports = function(){
    return LoginDAO;
}