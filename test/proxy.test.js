/**
 * Created by Cooper on 2017/9/21.
 */

const request = require('request');


let proxy = {
    ip: "110.89.120.5",
    port: 22053
};

request({
    url: "https://baidu.com",
    // proxy: `http://${proxy.ip}:${proxy.port}`,
    proxy:'HTTP://27.19.70.111:8998'
}, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res.statusCode);
    }
});