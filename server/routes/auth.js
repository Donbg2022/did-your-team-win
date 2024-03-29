const express = require("express")
const axios = require('axios')
const userSchema = require('../schema/userSchema')
const db = require("../server")


const router = express.Router()

const usersDB = 

router.post('/signup', async(req, res) => {
  const { name, email, password, team } = req.body
  
  const newUser = userSchema({
    name,
    email,
    password,
    team
  })
console.log(newUser)
  try{
    await newUser.save()
    console.log("user saved succesfully")
  }catch(err){
    console.log(err)
    res.json({error: err})
  }
})

module.exports = router