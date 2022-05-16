const _webSocket = require("ws");
const socket = new _webSocket.Server({port: 4568});
var ws;
socket.on('connection', function (_ws) {
    console.log('客户端已连接');
    ws = _ws
    _ws.on('message', function (message) {
        ws = _ws;
        // console.log(ws !== undefined)
        console.log(message.toString());
    });

    _ws.on('close', function (message) {
        console.log('客户端已断开连接');
    });
    _ws.on('error', function (message) {
        console.log('客户端连接错误:', message);
    });

    _ws.send("Hi, client!")
});


let s = 3;
module.exports = ws;