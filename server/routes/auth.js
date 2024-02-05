const express = require("express")
const axios = require('axios')
const MongoClient = require("mongodb")
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

  try{
    await db.save(newUser)
    console.log("user saved succesfully")
  }catch(err){
    console.log(err)
    res.json({error: err})
  }
})

module.exports = router