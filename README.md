# Api de Consulta de frutas

## API - NODEjs, TypeScript, Drizzle-orm, SQLite, Consign

### Modo de uso
##

Após download use para instalar as dependencias
```bash
    npm install
```
Para executar a o serviço use o comando a abaixo.

```bash
    npm run start
```

Use este comando somente para ter certeza que as versões correspondem, mas, não funcionara ainda, voce precisa criar o banco de dados.

Crie um arquivo `.env` com as variaveis especificadas no arquivo .env.example `(DB_FILE_NAME=mydb.sqlite)`

```.env
DB_FILE_NAME = mydb.sqlite
# Variavel | nome do banco sqlite.
```

Após isso, use dois comandos para fazer o migrate, e criar as tabelas dentro do banco de dados
```javascript
    npx drizzle-kit generate
    npx drizzle-kit migrate
```

Se tudo estiver correto, o aplicativo iniciara corretamente.