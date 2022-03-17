const Alunos = require("../models/Alunos")

class AlunosController {
    static getAllAlunos = async(req, res) => {
        try {
            const alunos = await Alunos.findAll()
            return res.status(200).json(alunos)
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
}

module.exports = AlunosController