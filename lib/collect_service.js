/**
 * Created by Cooper on 2017/9/21.
 */

const request = require('request');
const cheerio = require('cheerio');

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

let bugng = function (proxy) {
    return new Promise(function (resolve, reject) {
        let options = {
            url: "http://www.bugng.com/",
            headers: {
                "Host": "www.bugng.com",
                "Connection": "keep-alive",
                "Cache-Control": "max-age=0",
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Referer": "http://www.bugng.com/gnpt",
                "Accept-Encoding": "gzip, deflate",
                "Accept-Language": "zh-CN,zh;q=0.8"
            },
            gzip: true
        };
        proxy && (options.proxy = proxy);
        request(options, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.statusCode === 200 && res.body) {
                    let $ = cheerio.load(res.body);
                    let proxys = [];
                    $('#target').find('tr').each(function (i, e) {
                        proxys.push($(e).find('td').eq(3).text() + '://'
                            + $(e).find('td').eq(0).text() + ':'
                            + $(e).find('td').eq(1).text());
                    });
                    resolve(proxys);
                } else {
                    reject('bugng req error')
                }
            }
        })
    })
};

// bugng().then(res => console.log(res));

module.exports = {xdaili, bugng};