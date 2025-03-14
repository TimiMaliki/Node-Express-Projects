
const express = require('express')
const app  =  express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound  = require('./middleware/not-Found')
const errorHandlerMidWare = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())


// middleware
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMidWare)




const port  = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log('listening'))
    } catch (error) {
        console.log(error)
    }
}

start()