const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const config = require('./config')

const app = express()

// MongoDB Connection
mongoose.connect(config.MONGODB_URI, {useCreateIndex: true, useNewUrlParser: true})
mongoose.connection.on('error', e => console.error(e))

require('./model/Note')
require('./model/User')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

const noteRouter = require('./routes/note')
const authRouter = require('./routes/auth')

app.use('/note', noteRouter)
app.use('/auth', authRouter)

module.exports = app