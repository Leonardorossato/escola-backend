const Sequelize = require('sequelize');
const Op = Sequelize.Op
const Turmas = require("../models/Turmas")

class TurmaController{
    static getAllTurmas = async(req, res)=>{
        const {data_inicio, data_final} = req.query
        const where = {}
        data_inicio || data_final ? where.data_inicio = {} : null
        data_inicio ? where.data_inicio[Op.gte]  = data_inicio : null
        data_final ? where.data_inicio[Op.lte] = data_final : null

        try {
            const turmas = await Turmas.findAll({where})
            return res.status(200).json(turmas)
        } catch (error) {
            return res.status(500).json({error: error.message})            
        }
    }
    static getTurmaById = async(req, res) => {
        const {id} = req.params

        try {
            const turmas = Turmas.findOne({where: {id : Number(id)}})
            return res.status(200).json(turmas)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }

    }
    static createTurma = async(req, res) => {
        const newTurma = req.body

        try {
            const turmaCreated = await Turmas.create(newTurma)
            return res.status(201).json(turmaCreated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static updatedTurma = async(req, res) => {
        const {id} = req.params
        const turma = req.body

        try {
            await Turmas.update(turma, {where : {id : Number(id)}})
            const turmaUpdated = await Turmas.update(turma, {where: {id : Number(id)}})
            return res.status(200).json({message: `The id the turma : ${turmaUpdated} was successfully updated.`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static deletedTurma = async(req, res) => {
        const {id} = req.params

        try {
            await Turmas.delete({where: {id : Number(id)}})
            return res.status(200).json({message: `The id the turma : ${id} was successfully deleted`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = TurmaController