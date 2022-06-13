const express = require('express')
const router = express.Router();
const employeeSchemaData = require('../db_model/employeeSchema')

// Add new Employee
router.post('/add-new-employee', async (req, res) => {
    new employeeSchemaData({
        // model         body
        name         : req.body.name,
        salary       : req.body.salary,
        age          : req.body.age,
        status       : req.body.status,
        department   : req.body.department,
        attendance   : req.body.attendance
    })
    .save()

    res.json({data : req.body})
})

module.exports = router;