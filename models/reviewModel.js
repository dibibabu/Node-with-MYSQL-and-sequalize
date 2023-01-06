const { sequelize, DataTypes } = require('sequelize')
module.exports = (Sequelize, DataTypes) => {

    const Reviews = Sequelize.define("product", {
        rating: {
            type: DataTypes.INTEGER,
        },

        describtion: {
            type: DataTypes.TEXT,

        },
    })

    return Reviews


}