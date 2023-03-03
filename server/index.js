const http = require("http");
const app = require("./app.js");

const PORT = 8080;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
