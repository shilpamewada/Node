const { response } = require('express');
let http = require('http');
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('<p>Hello,node.js HTTP Server!</p>');
});
server.listen(3003)








// you can use any port Number
// thunder extension
// (()=>{})
// localhost:3003(run the code)