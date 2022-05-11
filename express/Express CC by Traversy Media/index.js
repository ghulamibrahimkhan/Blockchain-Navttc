const express = require('express')
const app = express()

const users = require('./users')

const path = require('path')
const { json } = require('express')
const { log } = require('console')
const port = process.env.port || 5000


// our own middleware
const loger = (req,res,next)=> {
    console.log(`${req.protocol}`);
    next()
}
// Init middleware
app.use(loger)


// //basic starter roting
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })



// basic routing & gets members
// app.get('/api/users', (req,res) =>{
//     json.Parser(res.json(users))
// })



// static rout
app.use(express.static(path.join(__dirname, 'public')))


app.get('/users', (req, res) => {
    res.json(users[0])
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})