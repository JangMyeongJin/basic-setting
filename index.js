const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jean9710:0GyUmLaXMyP66uTD@jangdb.cf82thu.mongodb.net/?retryWrites=true&w=majority&appName=JangDB",
    {}
  )
  .then(() => console.log("JangDB Connected..."))
  .catch((e) => console.log(e));

app.get("/", (req, res) => res.send("Hello Word"));

app.listen(port, () => console.log("SERVER START !!"));
