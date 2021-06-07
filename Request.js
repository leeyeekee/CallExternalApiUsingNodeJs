const request = require('request');
 
_EXTERNAL_URL = 'http://studentportal-sample.2886795281-80-jago05.environments.katacoda.com/students';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
