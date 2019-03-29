const mongoose = require('mongoose')
const Todo = mongoose.model('Todo')

exports.findAll = async (_req, res) => {
  try {
    let todos = await Todo.find({ user: res.locals.userId})

    res.json(todos)
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.findById = async (req, res) => {
  try {
    let todo = await Todo.findOne({ _id: req.params.id, user: res.locals.userId })

    res.json(todo)
  } catch (e) {
    res.status(422).send(e)
  }
}


exports.create = async (req, res) => {
  const todo = {
    title: req.body.title,
    body: req.body.body,
    user: res.locals.userId
  }

  try {
    let created = await Todo.create(todo)

    res.json(created)
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.delete = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id, user: res.locals.userId })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.update = async (req, res) => {
  try {
    let todo = {
      _id: req.params.id,
      title: req.body.title,
      body: req.body.body
    }

    let updated = await Todo.updateOne({ _id: todo._id, user: res.locals.userId }, { title: todo.title, body: todo.body })
    
    res.json(updated)
  } catch (err) {
    res.status(500).send(err)
  }
}

