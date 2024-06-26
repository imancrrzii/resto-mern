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
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    // all carts operations

    // add to cart
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    // get cart using email
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    }); 

    // get cart using id
    app.get("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.findOne(query);
      res.send(result);
    });

    // delete from cart
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // update carts quantity
    app.put("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const {quantity} = req.body
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      
      const updateDoc = {
        $set: {
            quantity: parseInt(quantity, 10),
        },
      };
      const result = await cartCollection.updateOne(query, updateDoc, options);
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
