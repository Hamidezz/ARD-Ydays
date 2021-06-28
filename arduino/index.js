const http = require('http');
const fetch = require('node-fetch');
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("hello");
}

let url = "http://192.168.1.178/";

let settings = {method: "Get"};
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(res.json)
    });

const server = http.createServer(requestListener);
server.listen(8080);