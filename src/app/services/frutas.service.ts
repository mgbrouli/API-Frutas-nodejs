import { frutasTable } from '../schemas/frutas.schema.js'
import { db } from '../../core/db.js'
import { eq } from 'drizzle-orm'
import { AppError } from '../../core/error/AppError.js'

type frutaType = typeof frutasTable.$inferInsert


export class FrutasService {

    create = async (data: frutaType) => {
        const created = await db.insert(frutasTable).values(data).returning({
            id: frutasTable.id,
            nome: frutasTable.nome,
            quantidade: frutasTable.quantidade
        })

        return created;
    }
    getAll = () => {
        return db.select().from(frutasTable).all()
    }

    update = async (id: number, dados: frutaType) => {

        if (isNaN(id)) {
            throw new AppError(400, "O Id informado esta vazio, retorne um valor valido")
        }

        const [result] = await db.select().from(frutasTable).where(eq(frutasTable.id, id)).limit(1)
        if (!result) {
            throw new AppError(404, "Item não encontrado")
        }
        const { nome, quantidade } = dados;

        const nomeVazio = nome === undefined || nome.trim() === "";
        const quantidadeVazia = quantidade === undefined || nome.trim() === "";

        if (nomeVazio && quantidadeVazia) {
            throw new AppError(400, "Coloque pelo menos um valor para atualizar");
        }

        const nomeFinal = nomeVazio ? result.nome : nome;
        const quantidadeFinal = quantidadeVazia ? result.quantidade : quantidade;



        const [dados_atualizado] = await db.update(frutasTable).set({ nome: nomeFinal,quantidade: quantidadeFinal }).where(eq(frutasTable.id, id)).returning({
            id: frutasTable.id,
            nome: frutasTable.nome,
            quantidade: frutasTable.quantidade,
        });

        return dados_atualizado

    }


}