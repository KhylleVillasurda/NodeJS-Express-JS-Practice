const fs = require('fs')
const http = require("http")
const path = require("path")
const os = require("os")
const url = require("url")
const sayHello = require("./greetings")

const message = sayHello('Khylle')
console.log(message);





/*
const myUrl = new URL('https://example.com:8000/path/name?query=hello#hash')
console.log("Host", myUrl.host);
console.log("Pathname", myUrl.pathname);
console.log("Search params", myUrl.searchParams.get("query")); 


console.log("Platform:", os.platform());
console.log("CPU architecture:", os.arch());
console.log("Total memory:", os.totalmem());
console.log("Free memory:", os.freemem());



const directory = "/user/local"
const fileName = "test.txt"

const fullPath = path.join(directory, fileName)

console.log(fullPath)
//
const server = http.createServer((req,res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Ended")
})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/")
})

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return;
  }
  console.log('File contents:', data); })

   const content = "hello Node.js"
 fs.writeFile("output.txt", content, err => {
   if (err) {
     console.error('Error writing file:', err)
     return;
   }
   console.log('File written successfully');
})
  */
