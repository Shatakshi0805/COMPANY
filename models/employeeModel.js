const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;

