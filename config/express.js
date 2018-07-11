module.exports = function () {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    app.set('view engine', 'ejs')
    app.set('views','./app/views')
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))
    return app
}