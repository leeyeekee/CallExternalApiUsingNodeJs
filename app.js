const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')
var targetRestURL = process.env.TARGET

http.createServer((req, res) => {
        res.write('<h>Welcome to sample nodejs frontend</h>');
        res.write('<h>Type append request or node to the url to retrieve a list of student from the backend</h>');
        
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        // res.end();
}).listen(8080);

console.log("service running on 8080 port....");
