const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const NhlRouter = require('./routes/nhl-routes')
const mongoose = require('mongoose')

const dbURI = "mongodb+srv://donovangriffin04:MojsGJQrjHFOoegm@nhl-stats.7r3moui.mongodb.net/?retryWrites=true&w=majority"


async function startServer(){
  try{
    await mongoose.connect(dbURI)
    console.log("connected")
  }catch(err){
    console.error(err)
  }
}

startServer()

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


//initializes express
const app = express();
const PORT = process.env.PORT || 10000;


app.use(express.json()); //Parse incoming JSON 
app.use(cors()); //enables CORS

app.use('/nhl-api', NhlRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



