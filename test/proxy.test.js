/**
 * Created by Cooper on 2017/9/21.
 */

const request = require('request');


let proxy = {
    ip: "116.224.189.143",
    port: 8118
}

request({
    url: "https://baidu.com",
    proxy: `http://${proxy.ip}:${proxy.port}`,
}, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res.statusCode);
    }
});