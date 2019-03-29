const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
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
}, { collection: 'note', versionKey: false })

module.exports = mongoose.model("Note", NoteSchema)