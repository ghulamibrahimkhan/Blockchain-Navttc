const express = require('express')
const res = require('express/lib/response')
const path = require('path')
const app = express()
const port = 3000



//making our own middleware
const ourMIddleware = (req, res, next) => {
  console.log(req);
}


// serving pulbic folder to root
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
})


// making our own middleware





// linking file to port ..  (I did this when index.js was here at same dir. but i sent index,js to public folder. and links to root . example code above)
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'index.html'))
// })

// linking file to port
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'))
})
// linking file to port
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})
//sending json to webpage
app.get('/json', (req, res) => {
  res.json({ f_name: "Ibrahim", l_name: "Khan", course: "blockchain " })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 