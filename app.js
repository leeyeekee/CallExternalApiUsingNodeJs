const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')

http.createServer((req, res) => {
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
        else {
                res.write('<a href="http://studentportal-sample.2886795281-80-jago05.environments.katacoda.com/students">Get List of Students </a>');
                res.end();
        }
        // res.end();
}).listen(8080);

console.log("service running on 8080 port....");
