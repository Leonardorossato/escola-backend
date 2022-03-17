const express = require('express');
const AlunosController = require('../controllers/alunosController');
const router = express.Router()

router.get('/', AlunosController.getAllAlunos)

module.exports = router