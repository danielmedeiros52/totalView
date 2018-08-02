class UsuarioControler {
    constructor() {
        const pool = app.infra.connectionFactory()
        let UsuarioDAO = new app.infra.UsuarioDAO(pool)
    }

    cadastrar() {

    }
    login(req) {
        let user = req.body
        let data = [user.email]
       this. UsuarioDAO.localizarEmail([arg],(err,result)=>{
            if(err){
                console.log(err)
            }
            if (result.rowCount != 0) {
                console.log(result.rows)
            }else{
                console.log('login ou senha invalidos')
            }

        })

    }

}
module.exports = function () {
    return UsuarioControler;
}