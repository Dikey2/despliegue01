const http = require("http");

function requestController(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end("Bienvenidos al curso");
}

const server = http.createServer(requestController);

server.listen(4000, function () {
  console.log("Aplicación corriendo en http://localhost:4000");
});