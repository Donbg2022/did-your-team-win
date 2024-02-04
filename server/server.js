const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const NhlRouter = require('./routes/nhl-routes')
const mongoose = require('mongoose')

const dbURI = "mongodb+srv://donovangriffin04:MojsGJQrjHFOoegm@nhl-stats.7r3moui.mongodb.net/?retryWrites=true&w=majority"



async function connect() {
  await mongoose.connect(dbURI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  console.log("connected")
}
connect().catch((e) => {
  console.error(e)
})

//initializes express
const app = express();
const PORT = process.env.PORT || 10000;


app.use(express.json()); //Parse incoming JSON 
app.use(cors()); //enables CORS

app.use('/nhl-api', NhlRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



