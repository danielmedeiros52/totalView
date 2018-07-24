
const express = require('express')
var load = require("express-load")
const bodyParser = require('body-parser')
const session = require("express-session")

module.exports = function () {
    const app = express()
    app.set('view engine', 'ejs')
    app.set('views', './app/views')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(session({
        secret: 'totalView',
        saveUninitialized: true,
        resave: 'true'
    }))
  
    app.use((req, res, next) => {
       if(req.session.user){
           res.locals.user = req.session.user
       }else{
        res.locals.user =false  
       }
       
        next()
    })

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app)
 
    return app
}