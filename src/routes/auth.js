const express = require('express')
const router = express.Router()
const auth = require('../controller/auth')
const requireUser = require('../middlewares').requireUser

router.use('/', requireUser)

router.post('/login', auth.login)

module.exports = router