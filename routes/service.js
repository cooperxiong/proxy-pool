/**
 * Created by Cooper on 2017/9/19.
 */

const co = require('co');
const _ = require('lodash');
const log = require('pino')().child({file: __filename.slice(__dirname.length + 1, -3)});
const server = require('../app');
const redisClient = require('../lib/redis_client');
const chech_service = require('../lib/check_service');

const pool = {proxys: [], scanTime: null};

/*
* {provider/string,proxy/string,expiration/number}
* */
server.post('/collect', function (req, res, next) {
    console.log(req.body);
    co(function* () {
        const valid = yield chech_service.baidu(req.body.proxy);
        if (valid) {
            yield redisClient.hmset(`${req.body.provider}:${req.body.proxy}`, req.body);
            redisClient.expire(`${req.body.provider}:${req.body.proxy}`, req.body.expiration);

            chech_service.xdaili(req.body.proxy).then(valid => {
                redisClient.hmset(`${req.body.provider}:${req.body.proxy}`, {xdaili: valid});
            });

            chech_service.bugng(req.body.proxy).then(valid => {
                redisClient.hmset(`${req.body.provider}:${req.body.proxy}`, {bugng: valid});
            });

            res.json(200, {
                statusCode: 200,
                message: "OK"
            });
        } else {
            res.json(416, {
                statusCode: 416,
                message: "first check invalid"
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
        if (items.length === 0) {
            res.json(429, {
                statusCode: 429,
                message: `Proxys for channel ${req.body.channel} are exhausted.`
            })
        } else {
            let choice = _.sample(items);

            // if currently used, set false, when released set true only if the pool is large enough.
            // _.chain(pool.proxys).find({proxy: choice.proxy}).merge(_.set({}, req.body.channel, !1)).value();
            // redisClient.hmset(`${choice.provider}:${choice.proxy}`, _.set({}, req.body.channel, !1));

            res.json(200, {
                statusCode: 200,
                proxy: choice.proxy
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


server.get('/stats', function (req, res, next) {
    redisClient.vscan().then(ret => {
        res.json(ret);
    }).catch(err => console.log)
});


function setAvailable(proxy, channel) {
}

function setUnavailable(proxy, channel) {
}


