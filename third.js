const http = require("http")
const fs = require("fs")
const url = require('url')
const { Stream } = require("stream")
// create server instance
const server = http.createServer((req, res)=>{
    // url path
    let q = url.parse(req.url,true)
    let fileName =  q.pathname
    if (fileName == "/") {
        fileName = "/index.html"
    }

    fs.readFile("." + fileName, (err, data)=>{
        if (err) {
            res.writeHead(404,"Page not found",{'Content-Type':'text/html'})
            return res.end("PAGE NOT FOUND "+ fileName)
        }
        res.writeHead(200,"Okay",{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })

})
server.listen(8080,"localhost")
server.on('listening', ()=>{
    console.log(http.server)
})
server.on('error',Stream=>{
    console.log(Stream)
})