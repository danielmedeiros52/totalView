 class UsuarioControler{
    constructor(user){
        const pool = app.infra.connectionFactory()
        this._user = user
        let UsuarioDAO = new app.infra.UsuarioDAO(pool)
    }
    
    inserir(){
   
    }


}
module.exports = function(){
    return UsuarioControler;
}