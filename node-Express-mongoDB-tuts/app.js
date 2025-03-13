// GLOBALS 

// __dirname console.log(__dirname)

// __filename  console.log(__filename)

// __require 

// __module

// __process


const express =  require('express')
const path  = require("path")

const app = express()

// setup static and middleware
app.use(express.static('./public'))


// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all("*" , (req,res) => {
    res.send("Not found")
})

app.listen(5000 , (req,res)=> {
    console.log("listening")
})






 // app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen