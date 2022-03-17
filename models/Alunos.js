const {Model, DataTypes} = require('sequelize')
const sequelize = require('../connection/sqlConnection')

class Alunos extends Model {}

Alunos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'alunos',
    timestamps: true,
    paranoid: true,
    defaultScope : {
        where: {active: true},
    },
    scope: {
        all: {
            where: {}
        }
    }
}, Alunos.associate = (models)=>{
    Alunos.hasMany(models.Turmas, {
        foreignKey: 'matriculaId'
    })
    Alunos.hasMany(models.Matriculas, {
        foreignKey: 'alunosId',
        scope: { status : 'confirmed'}
    })
})

module.exports = Alunos