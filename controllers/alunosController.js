const Alunos = require('../models/Alunos')
const Matriculas = require('../models/Matriculas')

class AlunosController {
    static getAllAlunos = async(req, res) => {
        try {
            const allAlunos = await Alunos.findAll()
            return res.status(200).json(allAlunos)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static getAlunosById = async(req, res) => {
        const {id} = req.params
        try {
            const alunos = await Alunos.findOne({where: {id: Number(id)}})
            return res.status(200).json(alunos)
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
    static createAluno = async(req, res) => {
        const newAluno = req.body
        try{
            const alunoCreated = await Alunos.create(newAluno)
            return res.status(201).json(alunoCreated)
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
    static updatedAluno = async (req, res) =>{
        const {id} = req.params
        const aluno = req.body

        try {
            await Alunos.update(aluno, {where : {id : Number(id)}})
            const alunoUpdated = await Alunos.findOne(aluno, {where : {id : Number(id)}})
            return res.status(200).json({ message: `The aluno with id ${alunoUpdated} was updated successfully.`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static deletedAlunos = async(req, res) => {
        const {id} = req.params

        try {
            await Alunos.destroy({where : {id : Number(id)}})
            return res.status(200).json({message: `The aluno with id ${id} was deleted successfully.`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static getMatriculaByAlunosIdAndTurmaId = async(req, res) =>{
        const {alunosId, matriculasId} = req.params
        try {
            const matriculas = await Matriculas.findOne({where : {id : Number(alunosId, matriculasId)}})
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static createMatriculas = async(req, res) =>{
        const {alunosId} = req.params
        const newMatriculas = {...req.body, alunosId: Number(alunosId)}

        try {
            const matriculaCreated = await Matriculas.create(newMatriculas)
            return res.status(201).json(matriculaCreated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
    static updatedMatricula = async(req, res) => {
        const {alunosId, matriculasId} = req.params
        const updatedAluno = req.body

        try {
            await Matriculas.update(updatedAluno, {where: {id : Number(matriculasId), alunosId: Number(alunosId)}})
            const matriculaUpdated = await Matriculas.findOne({where: {id : Number(matriculasId)}})
            return res.status(200).json(matriculaUpdated)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static deletedMatricula = async(req, res) => {
        const {matriculasId} = req.params

        try {
            await Matriculas.destroy({where: {id : Number(matriculasId)}})
            return res.status(200).json({message: `id ${matriculasId} was successfully deleted`})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = AlunosController