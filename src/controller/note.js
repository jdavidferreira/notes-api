const mongoose = require('mongoose')
const Note = mongoose.model('Note')

exports.findAll = async (_req, res) => {
  try {
    let notes = await Note.find({ user: res.locals.userId})

    res.json(notes)
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.findById = async (req, res) => {
  try {
    let note = await Note.findOne({ _id: req.params.id, user: res.locals.userId })

    res.json(note)
  } catch (e) {
    res.status(422).send(e)
  }
}

exports.create = async (req, res) => {
  const note = {
    title: req.body.title,
    body: req.body.body,
    user: res.locals.userId
  }

  try {
    let created = await Note.create(note)

    res.json(created)
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.delete = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id, user: res.locals.userId })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.update = async (req, res) => {
  try {
    let note = {
      _id: req.params.id,
      title: req.body.title,
      body: req.body.body
    }

    let updated = await Note.updateOne({ _id: note._id, user: res.locals.userId }, { title: note.title, body: note.body })
    
    res.json(updated)
  } catch (err) {
    res.status(500).send(err)
  }
}

