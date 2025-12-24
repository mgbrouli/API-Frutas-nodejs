const express = require("express")
const consign =require("consign")
const http = require('http')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.Router());
app.use(cors())

consign()
.include("db.js")
.then("./controllers")
.then("./routes")
.into(app)






server.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})
