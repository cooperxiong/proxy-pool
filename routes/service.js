/**
 * Created by Cooper on 2017/9/19.
 */
const _ = require('lodash');
const co = require('co');
const log = require('pino')().child({file: __filename.slice(__dirname.length + 1, -3)});
const request = require('request');
const server = require('../app');
const redisClient = require('../lib/redis_client');

const pool = {proxys: [], scanTime: null};

/*
* {provider/string,proxy/string,expiration/number}
* */
server.post('/collect', function (req, res, next) {
    console.log(req.body);
    co(function* () {
        const valid = yield firstCheck(req.body.proxy);
        if (valid) {
            yield redisClient.hmset(`${req.body.provider}:${req.body.proxy}`, req.body);
            redisClient.expire(`${req.body.provider}:${req.body.proxy}`, req.body.expiration);
            res.json(200, {
                statusCode: 200,
                message: "OK"
            });
        } else {
            res.json(416, {
                statusCode: 416,
                message: "invalid"
            });
        }
    }).catch(err => {
        log.info(err);

    });

});

/*
* {channel/string}
* */
server.post('/provide', function (req, res, next) {
    co(function* () {
        if ((Date.now() - pool.scanTime > 60 * 1000) || !pool.scanTime) {
            pool.proxys = yield redisClient.vscan();
            log.info("scan");
            pool.scanTime = Date.now()
        }
        let items = _.filter(pool.proxys, e => e[req.body.channel] === 'true');
        console.log(items);
        if (items.length === 0) {
            res.json(429, {
                statusCode: 429,
                message: `Proxys for channel ${req.body.channel} are exhausted.`
            })
        } else {
            let choice = _.sample(items);
            _.chain(pool.proxys).find({proxy: choice.proxy}).merge(_.set({}, req.body.channel, !1)).value();
            redisClient.hmset(`${choice.provider}:${choice.proxy}`, _.set({}, req.body.channel, !1));

            res.json(200, {
                statusCode: 200,
                proxy: _.sample(items).proxy
            })
        }
    }).catch(err => {
        log.info(err);
    });

});

server.post('/refresh', function (req, res, next) {
    let available = req.body.available;
    if (available) {
    } else {
    }
    res.json(200, {
        statusCode: 200,
        message: "Refresh successfully."
    });
});


function setAvailable(proxy, channel) {
}

function setUnavailable(proxy, channel) {
}

server.get('/stats', function (req, res, next) {
    res.json({a: 1});
});


function firstCheck(proxy) {
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
                console.log("valid 200");
                resolve(!0);
            } else {
                resolve(!1)
            }
        })
    })
}

