const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: './dev.sqlite'
})

sequelize.sync().then(()=>{
    console.log('Connection with sqlite was established successfully.')
}).catch((err)=>{
    console.log("Error connecting with sqlite: " + err)
})

module.exports = sequelize