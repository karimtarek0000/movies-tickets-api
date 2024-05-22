const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://movies-tickets.onrender.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use(middlewares);
server.use(router);

server.listen(port);
