
const http = require('http')

const  server =  http.createServer()

server.on("request",(request)=>{
    console.log(request)
})
server.listen(8080)
