const {db, adicionaItem, validaItem, retornaItems, modificaItem} = require("../db")

module.exports ={


    get : (req, res, next) =>{
    db.all("SELECT * FROM Frutas", [], (err, rows)=>{
        if(err){
            res.sendStatus(500).json({erro: err.message})
        }else{
            res.json(rows)
            result = rows
        
            
        }
    })   
},

    post : (req, res, next)=>{
    adicionaItem(req.body.fruta, req.body.quantidade)
    res.send("Fruta adicionada com sucesso")
},

    put : (req, res, next)=>{

        const id = req.body.id;
    modificaItem(id = id, req.body.quantidade)
        res.send(`A quantidade de ${req.body.fruta} foi modificada`)
}

}