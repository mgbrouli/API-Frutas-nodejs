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

        const [result] = await db.select().from(frutasTable).where(eq(frutasTable.id, id)).limit(1)
        
        if(!result){
            throw new AppError(400, "Item não encontrado")
        }

        const dados_atualizado = await db.update(frutasTable).set(dados).where(eq(frutasTable.id, id)).returning({
            id: frutasTable.id,
            nome: frutasTable.nome,
            quantidade: frutasTable.quantidade,
        });

        return dados_atualizado

    }


}