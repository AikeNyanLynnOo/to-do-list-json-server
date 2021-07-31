const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleWares = jsonServer.defaults({
    static : "./public"
});
const PORT = process.env.PORT || 8000;
server.use(middleWares);
/* server.use(jsonServer.rewriter({
    "/api/*" : "/$1"
}));
*/
server.use("/api",router);
server.listen(PORT,()=>{
    console.log("Server is running");
})