const express = require('express');
const AlunosController = require('../controllers/alunosController');
const router = express.Router()

//Rota dos alunos
router.get('/', AlunosController.getAllAlunos)
router.get('/aluno/:id', AlunosController.getAlunosById)
router.post('/aluno', AlunosController.createAluno)
router.put('/aluno/:id', AlunosController.updatedAluno)
router.delete('/aluno/:id', AlunosController.deletedAlunos)

//Rota das matriculas vinculadas com os aluno
//router.get('/aluno/:alunosId/matricula', AlunosController.getMatricula)
router.get('/aluno/:alunosId/matricula/:matriculaId', AlunosController.getMatriculaByAlunosIdAndTurmaId)
//router.get('/aluno/matricula/:turmaId/confirmadas', pessoaController.getMatriculaForTurma)
//router.get('/pessoa/matricula/lotada', pessoaController.getTurmaLotada)
router.post('/aluno/:alunosId/matricula', AlunosController.createMatriculas)
//router.post('/aluno/:alunoId/matricula/matriculaId/restore', alunoController.restoreMatricula)
router.put('/aluno/:alunosId/matricula/:matriculasId', AlunosController.updatedMatricula)
router.delete('/aluno/:alunosId/matricula/:matriculasId', AlunosController.deletedMatricula)

module.exports = router