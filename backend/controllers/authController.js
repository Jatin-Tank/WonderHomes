const authController = require('express').Router()
const User = require('../models/User')
// Used for hashing passwords
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")



// Register
// authController.post('/register', async (req, res) => {
authController.post('/SignUp', async (req, res) => {
  
  try {
    console.log('ia am tarik');
    const isExisting = await User.findOne({ email: req.body.email })

    if (isExisting) {
      throw new Error("Email is already taken by another user")
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create({ ...req.body, password: hashedPassword })

    const { password, ...others } = newUser._doc
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '8d' })

    return res.status(201).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})

// Login
authController.post("/Login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      throw new Error('Wrong credentials. Try again!')
    }


    const comparePass = await bcrypt.compare(req.body.password, user.password)
    if (!comparePass) {
      throw new Error('Wrong credentials. Try again!')
    }

    const { password, ...others } = user._doc
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8d' })
    
    return res.status(200).json({ others, token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
})


module.exports = authController