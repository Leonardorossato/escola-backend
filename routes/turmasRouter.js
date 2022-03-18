const express = require('express')
const TurmaController = require('../controllers/turmaController')
const router = express.Router()

router.get('/', TurmaController.getAllTurmas)
router.get('/turma/:id', TurmaController.getTurmaById)
router.post('/turma', TurmaController.createTurma)
//router.post('/createTurma/:id/restore', TurmaController.restoreTurma)
router.put('/turma/:id', TurmaController.updatedTurma)
router.delete('/turma/:id', TurmaController.deletedTurma)

module.exports = router