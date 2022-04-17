const _fs = require('fs');
const _res = require('../config/response')
let sendView = {
    sendHTML(req,res){
        let type = req.url.split('.')[1];
        _res.response(res,`src`+req.url, {"content-type": `text/${type}; charset=utf-8`})
    },

    sendImage(req,res){
        let path = req.url.split('.')[0];
        let type = req.url.split('.')[1];
        _res.response(res, `src${path}.${type}`, {"content-type": `image/${type}`})
    }
}

module.exports = sendView