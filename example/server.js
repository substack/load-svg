var http = require('http');
var ecstatic = require('ecstatic');
var server = http.createServer(ecstatic(__dirname));
server.listen(5000);
