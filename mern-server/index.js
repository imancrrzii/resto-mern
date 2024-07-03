const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 5001;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// mongodb config
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@demo-foodiman-cluster.wof57sl.mongodb.net/demo-foodiman-db?retryWrites=true&w=majority&appName=demo-foodiman-cluster`
  )
  .then(console.log("MongoDB connected successfully!"))
  .catch((err) => console.log("error", err));

// jwt authentication
app.post("/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});


//   import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");
app.use("/users", userRoutes);
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
