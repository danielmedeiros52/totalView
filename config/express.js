
const express = require('express')
var load = require("express-load")
const bodyParser = require('body-parser')

module.exports = function () {
    const app = express()
    app.set('view engine', 'ejs')
    app.set('views', './app/views')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    load('routes',{cwd:'app'})
        .then('infra')
            .into(app)
    return app
}