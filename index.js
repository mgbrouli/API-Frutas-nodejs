import express from 'express'
import consign from 'consign'
import http from 'http'
import cors from 'cors'


const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.Router());
app.use(cors())

consign()
.include("./src/core")
.then("./src/app/controllers")
.then("./src/app/routes")
.into(app)






server.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})
