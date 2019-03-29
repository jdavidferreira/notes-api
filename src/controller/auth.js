const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    let user = await User.authenticate(email, password)
    
    if (user) {
      let token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY || 'secretCode')
      
      res.cookie("token", token, { httpOnly: true })
      res.sendStatus(200)
    } else {
      res.status(400).json({ error: 'Authentication failed 1'})
    }
  } catch (err) {
    res.status(400).json({ error: 'Authentication failed 2'})
  }
}

// exports.logout = async (req, res) => {
//   //todo implement
// }

// exports.forgotPassword = async (req, res) => {
//   // todo implement
// }