const express = require('express')
const app = express()
const port = 3000

const path  = require('path')
const multer = require('multer')
const logger = require('logger')
const filePath = './public'


const fileSaver = multer.diskStorage({
    destination : filePath,
    filename = function (req,file,cb){
        cb(null, file.originalname.split(".")[0]+ Date.now()+)
    }
})







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})