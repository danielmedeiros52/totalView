function UsuarioDAO(connection){
    this._connection=connection
}

// CREATE TABLE public.usuario
// (
//     id integer NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
//     nome character varying(30) COLLATE pg_catalog."default" NOT NULL,
//     login character varying(10) COLLATE pg_catalog."default" NOT NULL,
//     senha character varying(10) COLLATE pg_catalog."default" NOT NULL,
//     email character varying(20) COLLATE pg_catalog."default"
// )

UsuarioDAO.prototype.inserir = function(data,callback){
    this._connection.query('INSERT INTO USUARIO (nome,login,senha,email) VALUES ($1,$2,$3,$4)',data, callback)
}
module.exports = function(){
    return UsuarioDAO;
}