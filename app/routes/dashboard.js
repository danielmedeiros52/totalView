
module.exports = function (app) {
  
    app.use('/dashboard',(req, res, next) => {
        if(!req.session.user){
            res.locals.error = {
                cod:'401',
                mensagem:'Usuario não autenticado!'
            }
           res.render('error/error') 
        }else{
         res.locals.user = req.session.user
         next()
        }
     })


    app.get('/dashboard', (req, res) => {
        res.render('dashboard')
    })

    app.post('/dashboard', (req, res) => {
   
        
    })


}