/**
 * Created by Cooper on 2017/09/19.
 */
const server = require('../app');

server.get('/hello', function (req, res, next) {
    res.send('hello !');
    return next();
});

server.post('/say', function (req, res, next) {
    res.json(req.body);
    return next();
});

