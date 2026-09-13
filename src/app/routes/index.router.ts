import type { Request, Response } from 'express';
import Router from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);

export const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {

    return res.send({message: "servidor online, use as rotas /frutas"})
})