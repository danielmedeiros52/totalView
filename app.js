const app = require("./config/express")()

app.listen(3000, err => {
  console.log("Server on...")
})