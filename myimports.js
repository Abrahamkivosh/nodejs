const http = require("http");
const fs = require("fs");
const fetch = require("a-fetch");

const server = http.createServer((req, res) => {
  // name route
  fetch.Router.baseURL("https://jsonplaceholder.typicode.com").index(
    "todos",
    "/todos"
  );
  // request route
  fetch.Fetcher.index("todos")
    .then((result) => {
        let dataSaved = JSON.stringify(result.data, null, 2) ;
      fs.appendFile("blogs.txt", dataSaved , (err) => {
        if (err) {
          console.log(err);
        }
        res.writeHead(200, "Okay", { "Content-Type": "text/plain" });
        res.write(dataSaved);
        return res.end();
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
server.listen(8080);
