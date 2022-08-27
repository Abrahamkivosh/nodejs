var http = require("http");

var dt = require('./firstModule');

// can handle url part
var url = require("url")

 const server = http.createServer((req, res)=>{
    res.writeHead(200,"Connected",{ 'Content-Type':'text/html' });
    // res.write(`The date and time currently is ${dt.myDateTime().toString()} `)
    // req represents request from the client
    // url which holds the part of the url that comes after the domain name:
    res.write(req.url)

    var q = url.parse(req.url, true) ;
    console.log(q.hostname)
    

    res.end()
})
server.listen(8080,"localhost")
server.on('error',stream=>{
    console.log("Error Occurred : "+ stream.message)
    server.close()
})