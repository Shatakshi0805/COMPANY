const express = require("express");
const employeeRoute = express();
const employeeController = require("../controllers/employeeController");
const bodyParser = require("body-parser");

// to use data coming from user and display in json format
employeeRoute.use(bodyParser.json());
employeeRoute.use(bodyParser.urlencoded({extended: true}));// to specify that we're using form user data

// to render register view page written in pug view engine
employeeRoute.set("view engine", "pug");
employeeRoute.set("views", "./views");

employeeRoute.get("/register", function (req, res) {
    res.render("register");
})

// employeeRoute.post("/register", function (req, res) {// this was displaying all user enetred data to web page
//   res.send(req.body);//but we want to save that data to DB
// })

employeeRoute.post("/register", employeeController.registerEmployee);

module.exports = employeeRoute;