//import node native http library
const http = require('http');

//Using the createServer  method of the http instance create a new server instance.
const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] ==='') {
        if (request.method === 'GET'){
            response.end("Hell, Galvanize! This is Paul's first server from scrath");
        }
    }
    response.statusCode = 404;
    response.end();
})

//when the server starts successfully should print 'Hello World'
//Next, add the code below to your server.js file
//listen method takes in PORT: 3000 and HOST: localhost
server.listen(3001, "localhost", () => {
    console.log("Server is running at 'http://localhost:3001/")
});