const crypto = require('crypto')

module.exports = {
    md5(str) {
        console.log(str)
        let salt = "salt".toString('base64');
        return crypto.createHash('md5').update(str+salt).digest('hex').toString();
    }
}