require("dotenv").config()
require('express-async-errors')

const express =  require("express")
const app = express()

const connectDB = require('./db/connect')
const ProductRouter = require('./routes/products')

const notFoundMiddleWare = require('./middleware/not-Found')
const errorMiddleWare = require('./middleware/error-handler')


app.use(express.json())



// Routes

app.get("/", (req,res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products</a>')
})

app.use('/api/v1/products', ProductRouter)

app.use(notFoundMiddleWare)
app.use(errorMiddleWare)


const port = process.env.PORT || 3000


const start = async()=>{
    try {
        // console.log(process.env.MONGO_URI)
        await connectDB(process.env.MONGO_URI)
      app.listen(port , console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()