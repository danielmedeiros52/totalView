const app = require("./config/express")()
const rotaLogin = require("./app/routes/login")(app)

app.listen(3000, err => {
  console.log("Server on...")
})