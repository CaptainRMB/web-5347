const _webSocket = require("ws");
const ws = new _webSocket.Server({port: 8000});
ws.on('connection', function (ws) {
    console.log('客户端已连接');
    ws.on('message', function (message) {
        //打印客户端监听的消息
        console.log(message.toString());
    });
    ws.on('disconnect', function (message) {
        //打印客户端监听的消息
        console.log(message.toString());
    });

});
let s = 3;
module.exports = ws;