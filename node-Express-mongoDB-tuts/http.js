const http = require('http')

const server = http.createServer((req,res) => {
 if(req.url === "./"){
    res.end('welcome to home page')
    return
 }
 if(req.url === "/about"){
    res.end('welcome to about')
    return
 }

res.end(
    ` <h1>OOPS , Cant be found </h1> `
)
 
})
server.listen(5000)