const express = require("express");
// const pug = require("pug");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employee = require("./controllers/employeeController");
const employeeRoute = require("./routes/employeeRoutes");
// const port = process.env.PORT;

mongoose
  .connect("mongodb://127.0.0.1:27017/COMPANY")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.use("/", employeeRoute);


app.listen(8000, function () {
    // console.log(`127.0.0.1:${port}`);
  console.log("Server UP!");
});
