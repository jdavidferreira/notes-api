const express = require('express')
const mongoose = require('mongoose')

const app = express()

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo'
mongoose.connect(MONGODB_URI, {useCreateIndex: true, useNewUrlParser: true})
mongoose.connection.on('error', e => console.error(e))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const notesRouter = require('./routes/notes')
const authRouter = require('./routes/auth')

app.use('/note', notesRouter)
app.use('/user', authRouter)

module.exports = app