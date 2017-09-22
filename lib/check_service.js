/**
 * Created by Cooper on 2017/09/22.
 */

const log = require('pino')().child({file: __filename.slice(__dirname.length + 1, -3)});
const request = require('request');


function baidu(proxy) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(!1), 5000);
        let options = {
            url: "https://www.baidu.com/",
            headers: {
                "Host": "www.baidu.com",
                "Connection": "keep-alive",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36",
                "Upgrade-Insecure-Requests": "1",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6",
            },
            gzip: true,
            proxy,
        };
        request(options, function (err, res, body) {
            if (err) {
                resolve(!1);
            } else if (res.statusCode === 200) {
                log.info("valid 200");
                resolve(!0);
            } else {
                resolve(!1)
            }
        })
    })
}

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
            gzip: true,
            proxy
        };
        request(options, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.body) {
                    let json;
                    try {
                        json = JSON.parse(res.body)
                    } catch (e) {
                        log.debug(res.body);
                        log.error('xdaili json parse error');
                        resolve(!1)
                    }
                    if (json.ERRORCODE === '0') {
                        resolve(!0);
                    } else {
                        log.debug(res.body);
                        log.error('xdaili ERRORCODE error');
                        resolve(!1)
                    }
                } else {
                    log.error('xdaili req error');
                    resolve(!1)
                }
            }
        })
    })
};


module.exports = {baidu, xdaili};