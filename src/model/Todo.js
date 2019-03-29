const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { collection: 'todo', versionKey: false })

module.exports = mongoose.model("Todo", TodoSchema)