const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
import cors from 'cors';

// Cors
const corsOptions = {
  origin: "movies-tickets.onrender.com",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

server.listen(port);
