const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const json2html = require('node-json2html')

const http = require('http')
var targetRestURL = process.env.TARGET

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                // res.write(JSON.stringify(response));
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(json2html.render(response,{"<>": "li", "html":[
    	{"<>": "span", "text": "${id} - Name : ${name} , Address : ${address} "}
      ]})
                       );
                //res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        else {
        res.write('Welcome to sample nodejs frontend, append request or node to the url to retrieve a list of student from the backend');
        res.end();
        }
        // res.end();
}).listen(8080);

console.log("service running on 8080 port....");
