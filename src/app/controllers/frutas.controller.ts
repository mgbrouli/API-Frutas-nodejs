import type { Request, Response } from 'express';
import { FrutasService } from '../services/fruta.service.js'
import { AppError } from '../../core/error/AppError.js';

const frutaService = new FrutasService()



export class FrutasController {

    create = async (req: Request, res: Response) => {
        try {
            const { nome, quantidade } = req.body;

            if (!nome || !quantidade) {
                throw new AppError(400, "Nome ou quantidade inexistente")
            }

            const result = await frutaService.create({ nome, quantidade });
            if (!result) { throw new AppError(500, 'Erro ao criar frutas'); }

            return res.status(201).json({ message: "Fruta criada com sucesso", fruta: result })

        } catch (error: any) {
            const status = error.status;
            const message = error.message;

            return res.status(status || 500).json(message || 'Erro interno tente novamente!')
        }


    }

    getAll = async (req: Request, res: Response) => {
        try {
            const frutas = frutaService.getAll();
            if (!frutas) {
                throw new AppError(500, "Erro ao tentar buscar frutas");
            }
            return res.status(200).json({ frutas: frutas })
        } catch (error) {
            console.error("Erro: " + error);
            return res.status(500).json({ message: "Erro interno, tente novamete" })
        }
    }

    updateById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id)
            const { nome, quantidade } = req.body;
            if (isNaN(id)) {
                throw new AppError(400, "O ID informado é inválido");
            }

            const nomeVazio = !nome || nome.trim() === "";
            const quantidadeVazia = !quantidade || quantidade.trim() === "";


            if (nomeVazio && quantidadeVazia) {
                throw new AppError(400, "Envie pelo menos um campo (nome ou quantidade) para atualizar");
            }
            
            const result = await frutaService.update(id, { nome, quantidade });
            if (!result) {
                throw new AppError(500, "Erro interno ao processar o update")
            }


            return res.status(200).json({ message: "Produto atualizado", frutas: result })

        } catch (error: any) {
            const status = error.status;
            const message = error.message

            return res.status(status || 500).json(message || { message: "Erro ao tentar atualizar o produto" })
        }
    }
}