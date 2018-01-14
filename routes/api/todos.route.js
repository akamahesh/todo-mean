var express = require('express')
var router = express.Router()

//Getting the Todo Controller that we just created
var TodoController = require('../../controllers/todos.controller');

//Map each API to the Controller functions
router.get('/',TodoController.getTodos);

router.post('/',TodoController.createTodo);

router.put('/',TodoController.updateTodo);

router.delete('/:id',TodoController.removeTodo)

//Export the Router
module.exports = router;