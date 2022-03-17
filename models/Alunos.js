const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Alunos extends Model {}

Alunos.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    sequelize,
    modelName: "alunos",
    timestamps: true
}, Alunos.associate = (models)=>{
    Alunos.hasMany(models.Turmas, {
        foreignKey: 'matriculaId'
    })
    Alunos.hasMany(models.Matriculas, {
        foreignKey: 'alunosId'
    })
})

module.exports = Alunos