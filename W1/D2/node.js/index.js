const http = require('http')
const fs = require('fs')
const routes = require('./routes')

const server = http.createServer() // eventlistener that gets triggered once the incoming request is done

const PORT = process.env.PORT || 8000

server.listen(8000, () => console.log(`Server is running on port: $(PORT)`))