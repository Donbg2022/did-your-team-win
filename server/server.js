const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const NhlRouter = require('./routes/nhl-routes')
const SignupRouter = require('./routes/auth')
const mongoose = require('mongoose')

const dbURI = "mongodb+srv://donovangriffin04:MojsGJQrjHFOoegm@nhl-winners.7r3moui.mongodb.net/?retryWrites=true&w=majority"


async function startServer(){
  try{
    await mongoose.connect(dbURI)
    console.log("connected")
  }catch(err){
    console.error(err)
  }
}

startServer()

const db = mongoose.connection
//initializes express
const app = express();
const PORT = process.env.PORT || 10000;


app.use(express.json()); //Parse incoming JSON 
app.use(cors()); //enables CORS

app.use('/nhl-api', NhlRouter)

app.use('/user', SignupRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



module.exports = db