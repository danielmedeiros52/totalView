
module.exports = function (app) {
    app.post('/usuario/cadastrar', (req, res) => {
        let UsuarioControler = new app.controlers.UsuarioControler()
        UsuarioControler.cadastrar(res,req,app)
    })


}