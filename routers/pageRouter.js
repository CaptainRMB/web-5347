const _sendView = require("../controller/pageController");

module.exports = {
    pageRouter(req,res){
        let path = req.url.split('.')[0];
        let type = req.url.split('.')[1];

        if(type ==='html' || type ==='js' || type ==='css'){
            _sendView.sendHTML(req,res);
        }
        else if(type ==='jpeg'){
            _sendView.sendImage(req,res);
        }
    }
}