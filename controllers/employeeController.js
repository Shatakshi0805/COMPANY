const Employee = require("../models/employeeModel");

const registerEmployee = async (req, res) => {
    try {
        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.pwd
        });

        const result = await employee.save();
        res.send("Registration success!" + result);

    } catch (err) {
        res.send(err.message);
    }
}

module.exports = {
    registerEmployee
}