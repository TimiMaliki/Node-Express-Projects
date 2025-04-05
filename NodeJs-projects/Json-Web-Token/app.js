require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler')



// middleware

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)


const port = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(port , console.log(`server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()