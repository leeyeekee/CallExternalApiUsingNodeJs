const request = require('request');
// var targetRestURL = process.env.TARGET
_EXTERNAL_URL = process.env.TARGET;
// _EXTERNAL_URL = process.env.TARGET;
 
const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
