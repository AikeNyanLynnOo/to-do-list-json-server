const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleWare = jsonServer.defaults({
  static: "./public",
});

server.use(middleWare);
const PORT = process.env.PORT || 8001;

server.use("/api", router);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
