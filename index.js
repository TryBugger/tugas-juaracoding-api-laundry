const http = require("node:http");
const { app } = require("./app");
const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});