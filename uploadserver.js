const http = require("http")
const fs = require("fs")
const formidable = require("formidable")
const server = http.createServer((req, res)=>{
   
    if ( req.url == '/uploaded' ) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            console.log(fields)
            console.log(files)
            res.end("check");
            var oldpath = files.filetoupload.filepath;
            var newpath = '/home/kivosh/Documents/projects/learn/js/nodejs/' + files.filetoupload.originalFilename;
            
            fs.readFile(oldpath,(err, data)=>{
                if(err) throw err ;
                // write the file to newpath
                fs.writeFile(newpath,data,(err)=>{
                    if(err) throw err ;
                    res.end()
                    console.log("file moved")
                })

                // unlink from temp
                fs.unlink(oldpath,err=>{
                    if(err) throw err ;
                    console.log("file deleted from temp")
                })
            })
        })
        
    }else{
        fs.readFile('./upload.html',(err, data)=>{
            if (err) throw err;
            res.writeHead(200,'Okay',{'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
})
server.listen(8080,'localhost')
