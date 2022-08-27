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
            var newpath = '/home/kivosh/Documents/projects/learn/js/nodejs/one/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
              });
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
