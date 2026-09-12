import { describe, it, expect } from 'vitest';

import request from 'supertest';

import { app } from '../../App.js';

describe('GET /frutas', () => {
    it('Deve retornar uma lista de frutas com status 200', async () => {
        const response = await request(app).get('/frutas');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('frutas');
        expect(Array.isArray(response.body.frutas)).toBe(true);
        expect(response.body.frutas.length).toBeGreaterThan(0);


    });

});

describe('POST /frutas', ()=>{
    it('Deve criar um objeto no banco, retornando ele e status 201', async () =>{

        const novaFruta = {nome: "Fruta teste", quantidade: "Quantidade do teste"};

        const response = await request(app).post('/frutas').send(novaFruta);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Fruta criada com sucesso")
        expect(response.body.fruta[0]).toHaveProperty('id');
        expect(response.body.fruta[0].nome).toBe(novaFruta.nome);
        expect(response.body.fruta[0].quantidade).toBe(novaFruta.quantidade);

    })
})