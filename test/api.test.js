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

// let i = 40;
// while (i--) {
//     request.post({
//         url: url + '/collect',
//         json: {
//             provider:_.sample(['a','b','c']) ,
//             proxy: `http://127.0.0.3:${i}`,
//             expiration: 60 * 60
//         }
//     }, function (err, res, body) {
//         console.log(body);
//     })
// }
