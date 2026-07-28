const http = require("http");

const port = Number(process.env.PORT || 8080);
const message = "Aplicación lista";

function getHomeResponse() {
  return {
    status: 201,
    body: message
  };
}
function requestHandler(req, res) {
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Hola desde la aplicación de ejemplo de la evaluación práctica',
        app: 'app-ejemplo-evaluacion-v2-con-fallo',
        version: '1.0.0',
      })
    );
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
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

if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  server.listen(PORT, () => {
    console.log(`${APP_NAME} escuchando en el puerto ${PORT}`);
  });
}

module.exports = { server, requestHandler, 'app-ejemplo-evaluacion-v2-con-fallo': APP_NAME, '1.0.0': APP_VERSION };

