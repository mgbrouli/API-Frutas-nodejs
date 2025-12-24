

const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("frutas.db")
db.run(`CREATE TABLE IF NOT EXISTS Frutas (fruta TEXT, quantidade TEXT)`)

function adicionaItem(fruta, quantidade){
    const ValidFruta = validaItem(fruta)
    const ValidQtd = validaItem(quantidade)  
    const SQL = `INSERT INTO Frutas (fruta, quantidade) VALUES ( ?, ?)`
    db.run(SQL,[ValidFruta, ValidQtd], function(err){
        if(err){
            console.error(err.message);
        }else{
            console.log("Nova fruta adicionada ao banco")
        }
    })
}

function validaItem(item){
    let itemValidado = ''
    if(item.trim().length > 0 && typeof item === "string"){
        itemValidado = item.trim()
    }
    return itemValidado
}

function retornaItems(){
    db.all("SELECT * FROM Frutas", [], (err, rows)=>{
        if(err){
        console.error(err.message)}
        else{
            console.log(rows)
            const res = JSON.stringify(rows)


            return res
        }
    })
}
function modificaItem(fruta, quantidade){
    const ValidFruta = validaItem(fruta)
    const ValidQtd = validaItem(quantidade)  
    const SQL = `UPDATE Frutas SET quantidade = ? WHERE fruta = ?`
    db.run(SQL,[ValidQtd, ValidFruta], function(err){
        if(err){
            console.error(err.message);
        }else{
            console.log(`${fruta} foi modifificada com o valor de ${quantidade}`)
        }
    })
}










module.exports ={
    db,
    adicionaItem,
    validaItem,
    retornaItems,
    modificaItem,

}