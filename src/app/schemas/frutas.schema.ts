import {sqliteTable, int, text} from 'drizzle-orm/sqlite-core';

export const frutasTable = sqliteTable('fruta_table', {
    id: int('id').primaryKey({autoIncrement: true}),
    nome: text('text').notNull(),
    quantidade: text('quatidade').notNull()

})