const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    
    // read from file
    fs.readFile('blog.html',(err, data)=>{
        if (err) {
            console.log(err)
            throw err
        }
        res.writeHead(200,"cool",{'Content-Type':'text/html'})
        res.write(data)
       return res.end()
    }) 
    fs.appendFile('blog.html', "I am learning nodejs to the core", (err)=>{
        if (err) throw err ;
        console.log("The data was appended to the file")
    })
    // fs.unlink('hello.txt',err=>{
    //     if (err) throw err;
    //     console.log("File was deleted")
    // })
   

    
})

server.listen(8080)