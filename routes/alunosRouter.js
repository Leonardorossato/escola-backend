const express = require('express');
const AlunosController = require('../controllers/alunosController');
const router = express.Router()

//Rota dos alunos
router.get('/', AlunosController.getAllAlunos)
router.get('/aluno:/id', AlunosController.getAlunosById)
router.post('/aluno', AlunosController.createAluno)
router.put('/aluno/:id', AlunosController.updatedAluno)
router.delete('/aluno/:id', AlunosController.deletedAlunos)

module.exports = router