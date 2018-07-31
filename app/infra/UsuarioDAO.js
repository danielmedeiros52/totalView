function UsuarioDAO(connection){
    this._connection=connection
}
// id_usuario integer NOT NULL DEFAULT nextval('usuario_id_usuario_seq'::regclass),
//     nome character varying(20) COLLATE pg_catalog."default" NOT NULL,
//     cpf character varying(20) COLLATE pg_catalog."default" NOT NULL,
//     email character varying(30) COLLATE pg_catalog."default" NOT NULL,
//     senha character varying(13) COLLATE pg_catalog."default" NOT NULL,
//     matricula character varying(10) COLLATE pg_catalog."default",
//     filial_id integer,
//     cargo_id integer,
//     jornada_id integer,
//     setor_id integer,

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