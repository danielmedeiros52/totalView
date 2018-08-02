
class UsuarioControler {

    cadastrar() {

    }
    login(res,req,app) {
        let user = req.body
        let data = [user.email]
        const pool = app.infra.connectionFactory()
        let UsuarioDAO = new app.infra.UsuarioDAO(pool)
       UsuarioDAO.localizarEmail(data,(err,result)=>{
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
module.exports = function (app) {
    return UsuarioControler;
}