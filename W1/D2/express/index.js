const http = require('http')
const express = require('express')

//inits
const app = express() //initializing the express

//middlewares
app.use((req, res, next) => {
    console.log("First Middleware");
    next() //allow the request to continue to the next middleware
})
app.use((req, res, next) => {
    console.log("Second Middleware");
    res.send('<h1>Hello</h1>')
})

//server
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))