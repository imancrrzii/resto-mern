const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@demo-foodiman-cluster.wof57sl.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodiman-cluster`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // database and collection
    const menuCollection = client
      .db("demo-foodiman-database")
      .collection("menus");
    const cartCollection = client
      .db("demo-foodiman-database")
      .collection("carts");

    // all menu items
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
