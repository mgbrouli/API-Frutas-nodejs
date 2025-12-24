

module.exports = (Sequelize, DataTypes) =>{

const sequelize = new Sequelize(('sqlite::memory:'));
const Frutas = sequelize.define("Frutas", {
    fruta: DataTypes.STRING,
    quantidade: DataTypes.STRING
})

return Frutas


}

