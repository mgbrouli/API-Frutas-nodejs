import { frutasTable } from '../schemas/frutas.schema.js'
import { db } from '../../core/db.js'
import { eq } from 'drizzle-orm'

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
    getAll = async () => {
        return await db.select().from(frutasTable)
    }

    update = async (id: number, dados: frutaType) => {

        const [result] = await db.select().from(frutasTable).where(eq(frutasTable.id, id)).limit(1)
        

        return result

    }


}