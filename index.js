const express = require("express");
// const pug = require("pug");
const app = express();
const mongoose = require("mongoose");
// const port = process.env.PORT;

mongoose
  .connect("mongodb://127.0.0.1:27017/COMPANY")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/register", function (req, res) {
  res.render("register.pug");
});

app.listen(8000, function () {
    // console.log(`127.0.0.1:${port}`);
  console.log("Server UP!");
});
