const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const NhlRouter = require('./routes/nhl-routes')
import mongoose from 'mongoose';

const dbURI = "mongodb+srv://donovangriffin04:<password>@nhl-stats.7r3moui.mongodb.net/?retryWrites=true&w=majority"

connect().catch((e) => {
  console.log(e)
})

async function connect() {
  await mongoose.connect(dbURI)
  console.log("connected")
}

//initializes express
const app = express();
const PORT = process.env.PORT || 10000;


app.use(express.json()); //Parse incoming JSON 
app.use(cors()); //enables CORS

app.use('/nhl-api', NhlRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



