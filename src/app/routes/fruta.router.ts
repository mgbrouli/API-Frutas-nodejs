import Router from 'express';
import {FrutasController} from '../controllers/frutas.controller.js'

const frutaController = new FrutasController()
export const frutaRouter = Router();

frutaRouter.get('/frutas', frutaController.getAll)
frutaRouter.post('/frutas', frutaController.create)
frutaRouter.put('/frutas/:id', frutaController.updateById)


//pp.get("/frutas", app.controllers.controller.get)

//app.put("/frutas/:id", app.controllers.controller.put)
