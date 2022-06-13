const mongoose  = require("mongoose");

const employeeSchema = mongoose.Schema({
    name        : {type : String},
    salary      : {type : Number},
    age         : {type : Number},
    status      : {type : String},
    department  : {type : String},
    attendance  : {type : Number}
})


const employeeDataModel = mongoose.model('newEmployee', employeeSchema)

module.exports = employeeDataModel