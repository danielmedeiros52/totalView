
const express = require('express')
var load = require("express-load")
const bodyParser = require('body-parser')
const session = require("express-session")

module.exports = function () {
    const app = express()
    app.set('view engine', 'ejs')
    app.set('views', './frontend/views')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('./frontend/assets'))
    app.use(session({
        secret: 'totalView',
        saveUninitialized: true,
        resave: 'true'
    }))


    load('routes', { cwd: 'backend' })
        .then('infra')
        .then('controlers')
        .then('models')
        .into(app)

    return app
}