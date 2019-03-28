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
    }
}, { collection: 'todo', versionKey: false })

module.exports = mongoose.model("Todo", TodoSchema)