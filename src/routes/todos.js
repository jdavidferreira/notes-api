const express = require('express')
const router = express.Router()
const todo = require('../controller/todo')

router
  .route('/')
  .get(todo.findAll)
  .post(todo.create)

router
  .route('/:id')
  .get(todo.findById)
  .patch(todo.update)
  .delete(todo.delete)

module.exports = router