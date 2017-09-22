/**
 * Created by Cooper on 2017/9/21.
 */

const request = require('request');


/*
* @params proxy/string optional
* @return [proxy/string]
* */

let xdaili = function (proxy) {
    return new Promise(function (resolve, reject) {
        let options = {
            url: "http://www.xdaili.cn/ipagent//freeip/getFreeIps",
            headers: {
                "Host": "www.xdaili.cn",
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36",
                "Referer": "http://www.xdaili.cn/freeproxy",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6"
            },
            gzip: true
        };
        proxy && (options.proxy = proxy);
        request(options, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.body) {
                    let json;
                    try {
                        json = JSON.parse(res.body)
                    } catch (e) {
                        console.log(res.body);
                        reject('xdaili json parse error')
                    }
                    if (json.ERRORCODE === '0') {
                        resolve(json.RESULT.rows.map(e => (`http://${e.ip}:${e.port}`)));
                    } else {
                        console.log(res.body);
                        reject('xdaili ERRORCODE error')
                    }
                } else {
                    reject('xdaili req error')
                }
            }
        })
    })
};


// xdaili().then(res => console.log(res));


module.exports = {xdaili};