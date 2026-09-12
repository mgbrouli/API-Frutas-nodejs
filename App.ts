import express from 'express'
import cors from 'cors'

import {frutaRouter} from './src/app/routes/frutas.router.js'

export const app = express()

app.use(express.json())
app.use('/', frutaRouter);
app.use(cors())


app.listen(3000, ()=>{
    console.log("Rodando na porta 3000")
})
