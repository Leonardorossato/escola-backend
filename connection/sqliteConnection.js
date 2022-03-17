const sequelize = require('../config/sqlite')

sequelize.sync().then(()=>{
    console.log('Connection with sqlite was established successfully.')
}).catch((err)=>{
    console.log("Error connecting with sqlite: " + err)
})

