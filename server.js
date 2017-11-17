const express = require('express');
const request = require('request');
const crypto = require('crypto');

const app = express();

const serviceId = 'demo';
const serviceSecret = 'demosecret';

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/layouts/index.html');
});

app.get('/page_1', function (req, res) {
    res.sendFile(__dirname + '/layouts/page1.html');
});

app.get('/page_2', function (req, res) {
    res.sendFile(__dirname + '/layouts/page2.html');
});

app.get('/service_token', function (req, response) {
    // the time needs to be in seconds
    var now = parseInt(new Date().getTime() / 1000);
    const signature = crypto.createHmac('sha256', serviceSecret).update(serviceId + String(now)).digest('base64');
    request({
        uri: 'https://api.workwell.io/1.0/developer/service/token',
        method: 'GET',
        headers: {
            'ww-service-signature': signature,
            'ww-timestamp': '' + now,
            'ww-service-id': serviceId
        }
    }, function (error, res, body) {
        response.send(JSON.parse(body));
    });
});

app.listen(3030);