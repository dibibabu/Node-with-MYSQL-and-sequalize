const { sequelize, DataTypes } = require('sequelize')
module.exports = (Sequelize, DataTypes) => {

    const product = Sequelize.define("product", {
        tittle:{
            type:DataTypes.STRING,
            allowNULL:false
        },
        price:{
            type:DataTypes.INTEGER,
        },
            
        describtion:{
            type:DataTypes.TEXT,
            
        },
        published:{
            type:DataTypes.BOOLEAN,
            
        },
        
        



    })

    return product


}