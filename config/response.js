let _fs = require("fs");

let resConfig = {
    response(res, url, content){
        _fs.readFile(url, function (err, data) {
            // console.log(data)
            res.writeHead(200, content);
            res.write(data);
            res.end();
            console.log("returning: "+url)
        });
    }
}
module.exports = resConfig;