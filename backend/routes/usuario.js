
module.exports = function (app) {
    app.post('/usuario/cadastrar', (req, res) => {
        let UsuarioControler = new app.Controller.UsuarioControler()
        UsuarioControler.cadastrar(res, req, app)
    })


}