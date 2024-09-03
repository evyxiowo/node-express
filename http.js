const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Wlecome to our home page");
  }

  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`<h1>This page does not exist!!!!</h1>
    <a href="/">Back to your home page</a>`);
});
server.listen(3000);
