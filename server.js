const _ejs=require("ejs");
const _http = require('http'), qs = require('querystring');
const _url = require('url');
const _util = require('util')
const _path = require("path");
const _event = require('events');
const _logger = require('morgan')
const _express = require('express');
const favicon = require("serve-favicon")
const _bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const _config = require("./config/server")
const _pageRouter = require("./routers/pageRouter")
const _router = require("./routers/router")
const _mongo = require("./dao/mongo")


const app = _express();

//swagger config
const expressSwagger = require('express-swagger-generator')(app)
expressSwagger(_config.swagger_options)
// app.use('/api/swagger_ui', _express.static(path.join(__dirname, 'public')))
//logger
app.use(_logger("dev"));
//parsing middleware
app.use(_express.urlencoded({extended: false}))
app.use(_express.json())
//default rendering config
app.engine('html', _ejs.renderFile);
app.set("view engine","ejs");
app.engine('ejs', _ejs.__express);
//default main page
app.use('/', _express.static('app', {index:"index.html"}));
app.use(_router)
//default static resource direction
app.use(_express.static(__dirname+"/views"));
//website icon
app.use(favicon(__dirname+"/views/img/icon.png"));
//default 404 page
app.use(function (req,res){
    res.status(404);
    res.redirect("/404.html")
})



app.listen(_config.port, ()=>{
    console.log('Express Server running at http://localhost:' + _config.port + '/');
    console.log(`Swagger APIs documents at: http://localhost:${_config.port}/${_config.swagger_path}`);
});

/**
 * legacy original Node.JS handlers
 */
// let server = _http.createServer(function (req, res) {
//     // console.log(_url.parse((req.url), true).query)
//     console.log("Requesting: " + req.url);
//     _pageRouter.pageRouter(req,res);
//
// }).listen(http_port,()=>{
//     console.log('Http Server running at http://127.0.0.1:' + http_port + '/');
// });