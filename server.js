const http = require("http");

const port = Number(process.env.PORT || 8080);
const message = "Aplicación lista";

function getHomeResponse() {
  return {
    status: 200,
    body: message
  };
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const response = getHomeResponse();
    res.writeHead(response.status, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(response.body);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("No encontrado");
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = { server, message, getHomeResponse };
