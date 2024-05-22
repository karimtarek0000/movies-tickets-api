const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
const cors = require('cors');
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);
server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
server.options('*', cors());
server.listen(port);
