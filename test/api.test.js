/**
 * Created by Cooper on 2017/09/19.
 */

const _ = require('lodash');
const request = require('request');

let url = "http://localhost:2345";

request(url + '/hello', function (err, res, body) {
    console.log(body);
})

request(url + '/stats', function (err, res, body) {
    console.log(body);
})


request.post({
    url: url + '/say',
    json: {
        name: "a"
    }
}, function (err, res, body) {
    console.log(body.name);
    console.log(body);
})


request.post({
    url: url + '/provide',
    json: {
        channel: "a"
    }
}, function (err, res, body) {
    console.log(body);
})
