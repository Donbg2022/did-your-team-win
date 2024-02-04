const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const NhlRouter = require('./routes/nhl-routes')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://donovangriffin04:MojsGJQrjHFOoegm@nhl-stats.7r3moui.mongodb.net/?retryWrites=true&w=majority"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



//initializes express
const app = express();
const PORT = process.env.PORT || 10000;


app.use(express.json()); //Parse incoming JSON 
app.use(cors()); //enables CORS

app.use('/nhl-api', NhlRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



