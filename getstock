'use strict';
const Alexa = require('alexa-sdk');
const https = require('https')

var myRequest = 'This is useless just ignore it';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('myIntent');
    },
    
    'myIntent': function () {

        httpsGet(myRequest,  (myResult) => { //ignore myRequest it was part of the cookbook example
                console.log("sent     : " + myRequest); //ignore ^
                console.log("received : " + myResult);
                
                this.emit(':tell', 'The price per share for P S E G is ' + myResult[0] + ' dollars. Last updated at ' + myResult[1]);

            }
        );

    }
    
};

function httpsGet(myData, callback) {

    // GET is a web service request that is fully defined by a URL string
    // Try GET in your browser:
    // https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=New%20Jersey

    // Update these options with the details of the web service you would like to call
    var options = {
        host: 'finance.google.com',
        port: 443,
        path: '/finance/info?client=ig&q=NASDAQ%3APEG',
        method: 'GET',

        // if x509 certs are required:
        // key: fs.readFileSync('certs/my-key.pem'),
        // cert: fs.readFileSync('certs/my-cert.pem')
    };

    var req = https.request(options, res => {
        res.setEncoding('utf8');
        var returnData = "";

        res.on('data', chunk => {
            returnData = returnData + chunk;
        });

        res.on('end', () => {
            // we have now received the raw return data in the returnData variable.
            // We can see it in the log output via:
            // console.log(JSON.stringify(returnData))
            // we may need to parse through it to extract the needed data

            //var price = JSON.parse(returnData);
            //callback(price[0].l);  // this will execute whatever function the caller defined, with one argument
            
            var stringData = JSON.stringify(returnData);
            var parsePrice = stringData.substring(79,84);
            var parseTime = stringData.substring(162,169);
            var retArr = [parsePrice, parseTime];
            //callback(price);
            callback(retArr);
        });

    });
    req.end();

}
