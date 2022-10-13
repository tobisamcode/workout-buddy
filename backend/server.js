const express = require("express");
require("dotenv").config();

// express app

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Welcome home" });
});

// listen for request
app.listen(PORT, () => {
  console.log("serving is running on port: 4000");
});
