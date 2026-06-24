const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
fs.readFile("index.html", (err, data) => {
if (err) {
res.writeHead(500);
res.end("Error loading dashboard");
return;
}

res.writeHead(200, {
  "Content-Type": "text/html"
});

res.end(data);

});
}).listen(3000);

console.log("Dashboard running on port 3000");



