const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require("jsonwebtoken")

exports.login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    let user = await User.authenticate(email, password)

    if (user) {
      let sign = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY || 'secretCode')
      
      res.cookie("token", sign.token, { httpOnly: true })
    } else {
      //no ua
    }
  } catch (err) {
    //error
  }
}