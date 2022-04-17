const _bodyParser = require('body-parser');
const _http = require('http'), qs = require('querystring');
const _url = require('url');
const _util = require('util')
const _event = require('events');
const _fs = require('fs');
const _express = require('express');
const {response} = require("express");

const _sendView = require("./controller/pageController")
const _pageRouter = require("./routers/pageRouter")
const http_port = 8888;
const app_port = 8080;

const app = _express();
app.listen(app_port)

let logging = function (req, res, next) {
    console.log(Date())
    // console.log(_util.inspect(_url.parse(req.url, true)))
    console.log(req.url)
    console.log('')
    next()
}
app.use(logging)


let server = _http.createServer(function (req, res) {
    // console.log(_url.parse((req.url), true).query)
    console.log("Requesting: " + req.url);
    _pageRouter.pageRouter(req,res);

}).listen(http_port);

// app.get('/', (req,res)=>{
//     res.send('Hello, World!');
// })
//
// app.get('/about', (req,res,myLogger)=>{
//     res.send(_util.inspect(_url.parse(req.url, true)));
// })
//
// app.get('/index', (req,res,myLogger)=>{
//    _fs.readFile("src/index.html","utf-8",function (err,data){
//        console.log(data)
//    });
//     res.send('INDEX PAGE');
// })

console.log('Http Server running at http://127.0.0.1:' + http_port + '/');
console.log('Express Server running at http://127.0.0.1:' + app_port + '/');
console.log('Test link: http://127.0.0.1:8888/index.html');