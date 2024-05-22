const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
import cors from 'cors';

// Cors
// server.use(middlewares);
// const corsOptions = {
//   origin: "https://movies-tickets.onrender.com",
//   credentials: true,
//   optionsSuccessStatus: 200,
// };
// server.use(cors(corsOptions));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use(router);
server.listen(port);
