let redis = require('redis');
const Promise = require('bluebird');
let redisConfig = require('../config').redis;
let redisClient = redis.createClient(redisConfig);

redisClient.on('ready', function () {
    console.log('Redis Ready');
});

redisClient.on('error', function (err) {
    console.error('Redis Error: ' + err);
});


let hmset = function (key, j) {
    return new Promise(function (resolve, reject) {
        redisClient.hmset(key, j, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
};
// hmset("a:http://127.0.0.3:10", {a: !0, b: "123"});

let hgetall = function (key) {
    return new Promise(function (resolve, reject) {
        redisClient.hgetall(key, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
};

// hgetall('a').then((res,err) => {
//     console.log(res,err);
// })

let del = function (key) {
    return new Promise(function (resolve, reject) {
        redisClient.del(key, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })

};

let expire = function (key, expiration) {
    return new Promise(function (resolve, reject) {
        redisClient.expire(key, expiration, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
};

let dbsize = function () {
    return new Promise(function (resolve, reject) {
        redisClient.dbsize(function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        });
    })
};

let scan = function (...args) {
    return new Promise(function (resolve, reject) {
        redisClient.scan(...args, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
};


let vscan = function () {
    return dbsize()
        .then(size => {
                return scan(0, 'match', '*', 'count', size + 1)
                    .then(res => {
                        if (res[0] !== '0') {
                            throw new Error('cursor error');
                        }
                        return Promise.map(res[1], hgetall)
                    })
            }
        ).catch(err => {
            console.log(err);
        });
};

// vscan().then((res, err) => {
//     console.log(res, err);
// })

module.exports = {
    hmset,
    hgetall,
    del,
    expire,
    vscan
};






