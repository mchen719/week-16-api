const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.getToDo)
router.post('/', todoController.createToDo)
router.get('/:id', todoController.showToDo)
router.put('/:id', todoController.updateToDo)
router.delete('/:id', todoController.deleteToDo)

module.exports = router