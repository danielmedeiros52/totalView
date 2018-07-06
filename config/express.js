module.exports = function () {
    const express = require('express')
    const app = express()
    app.set('view engine', 'ejs')
    app.set('views','./app/views')
    app.use(express.static('public'))
    return app
}