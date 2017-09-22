/**
 * Created by Cooper on 2017/09/19.
 */

var restify = require('restify');
const server = restify.createServer({
    name: 'myapp',
    version: require('./package.json').version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

module.exports = server;

