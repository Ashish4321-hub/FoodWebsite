const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = require("./db");
mongoDB();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.get("/", (req, res) => {
  res.send("hello");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Connected successfully");
});
