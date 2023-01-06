const dbConfig = require('../config/dbConfig.js');
const { sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dilect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
}
)
sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("error"+err);
})
const db={}
db.Sequelize=Sequelize
db.Sequelize=Sequelize

db.products=require('./productModel.js')(sequelize,DataTypes)
db.products=require('./reviewModel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("sync done");
})

module.exports=db