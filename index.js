const express = require("express");
// const pug = require("pug");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employee = require("./controllers/employeeController");
// const port = process.env.PORT;

mongoose
  .connect("mongodb://127.0.0.1:27017/COMPANY")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/register", function (req, res) {
  res.render("register.pug");
});

// app.post("/register", function (req, res) {// this was displaying all user enetred data to web page
//   res.send(req.body);//but we want to save that data to DB
// })

app.post('/register', employee.registerEmployee);

app.listen(8000, function () {
    // console.log(`127.0.0.1:${port}`);
  console.log("Server UP!");
});
