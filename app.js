const app = require("./config/express")()

app.listen(2000, err => {
  if(err){
    console.log(err)
  }
  console.log("Server on...")
})