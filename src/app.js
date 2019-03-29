const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo'
mongoose.connect(MONGODB_URI, {useCreateIndex: true, useNewUrlParser: true})
mongoose.connection.on('error', e => console.error(e))

require('./model/Todo')
require('./model/User')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

const todosRouter = require('./routes/todos')
const authRouter = require('./routes/auth')

app.use('/todo', todosRouter)
app.use('/auth', authRouter)

module.exports = app