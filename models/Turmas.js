const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Turmas extends Model {}

Turmas.init({
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_inicio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alunosId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'Alunos',
            key: 'id'
        }
    }
},{
    sequelize,
    modelName: "turmas",
    timestamps: true
}, Turmas.associate = (models)=>{
    Turmas.hasMany(models.Matriculas, {
        foreignKey: "turmasId"
    })
    Turmas.belongsTo(models.Alunos,{
        foreignKey: "alunosId"
    })
})

module.exports = Turmas