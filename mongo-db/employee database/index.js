const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const logger = require('morgan')
const PORT = 4000

// Mongodb
const DatabaseUrl = "mongodb://localhost:27017/kfcEmployeeDatabase"

const mongoose = require('mongoose')
mongoose.connect(DatabaseUrl)
const db = mongoose.connection
db.on("error",err =>console.log(err))
db.once('open',()=>{
    console.log('Connected mongo');
})

// MIddleware
app.use(logger('dev'))
app.use(bodyParser.json())


const routesBody = require('./route/routes')
app.use('/',routesBody)

app.listen(PORT,()=>{
console.log(`serve is running at port ${PORT}`);
})