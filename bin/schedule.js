/**
 * Created by Cooper on 2017/9/21.
 */
const co = require('co');
const log = require('pino')().child({file: __filename.slice(__dirname.length + 1, -3)});
const request = require('request');
const schedule = require('node-schedule');
const xdaili = require('../lib/collect_service').xdaili;

//
const j = schedule.scheduleJob('*/5 */1 * * * *', function () {

    request.post({
        url: "http://localhost:2345/provide",
        json: {channel: 'xdaili'}
    }, function (err, res, body) {
        if (err) {
            log.error(err)
        } else {
            console.log(res.body);
            xdaili(res.body.proxy).then(res => {
                res.map(e => request.post({
                    url: "http://localhost:2345/collect",
                    json: {
                        provider: xdaili,
                        proxy: e,
                        expiration: 10 * 60
                    }
                }));
                log.info({date: new Date(), provider: 'xdaili'}, 'OK')
            }).catch(err => {
                log.info({date: new Date(), provider: 'xdaili', err}, 'ERROR')
            })
        }
    });
});