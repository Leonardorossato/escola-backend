const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.port
const sqliteConnection = require('./connection/sqlConnection')
const alunosRouter = require('./routes/alunosRouter')
const turmasRouter = require('./routes/turmasRouter')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.sqliteConnection = sqliteConnection

app.use('/api/alunos', alunosRouter)
app.use('/api/turmas', turmasRouter)

app.listen(port, ()=>{
    console.log(`Server is running at port : ${port}`)
})