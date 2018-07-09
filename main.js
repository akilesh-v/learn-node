var http = require("http");
var express = require('express');
var fs = require("fs");
var theReadDataFs=fs.readFileSync('read.txt');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write(theReadDataFs.toString);
    response.end('Lets see which is First');
}).listen(8086);

