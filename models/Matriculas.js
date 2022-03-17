const sequelize = require('../connection/sqlConnection')
const {Model, DataTypes} = require('sequelize')

class Matriculas extends Model {}

Matriculas.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alunosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "Alunos",
            key: "id"
        }
    },
    turmasId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Turmas",
            key: "id"
        }
    }
},{
    sequelize,
    modelName: "matriculas",
    timestamps: true
}, Matriculas.associate = (models)=>{
    Matriculas.belongsTo(models.Alunos,{
        foreignKey: 'alunosId'
    })
    Matriculas.belongsTo(models.Turmas, {
        foreignKey: 'turmasId'
    })
})

module.exports = Matriculas