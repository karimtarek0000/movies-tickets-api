const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;


server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://movies-tickets.onrender.com')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.use(router);
server.listen(port);
