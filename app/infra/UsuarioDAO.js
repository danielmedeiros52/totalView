function UsuarioDAO(connection){
    this._connection=connection
}
// CREATE TABLE  usuario(

//     id serial NOT NULL  ,
//     nome character varying(30)  NOT NULL,
//     login character varying(10)  NOT NULL,
//     senha character varying(10)  NOT NULL,
//     email character varying(20)  NOT NULL
// )

UsuarioDAO.prototype.inserir = function(data,callback){
    this._connection.query('INSERT INTO USUARIO (nome,login,senha,email) VALUES ($1,$2,$3,$4)',data, callback)
}
module.exports = function(){
    return UsuarioDAO;
}