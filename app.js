const app = require("./config/express")()
let $PORT = 3000

app.listen($PORT, err => {
  if(err){
    console.log(err)
  }
  console.log("Server on... port: ",$PORT )
})