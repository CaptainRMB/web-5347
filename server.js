const _bodyParser = require('body-parser');
const _http = require('http'), qs = require('querystring');
const _url = require('url');
const _util = require('util')
const _event = require('events');
const _express = require('express');
const _logger = require('morgan')
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const _config = require("./config/config")
const _pageRouter = require("./routers/pageRouter")
const _router = require("./routers/router")
const _mongo = require("./dao/mongo")
const path = require("path");
const app = _express();

const expressSwagger = require('express-swagger-generator')(app)

expressSwagger(_config.swagger_options)
// app.use('/api/swagger_ui', _express.static(path.join(__dirname, 'public')))
app.use(_express.urlencoded({extended: false}))
app.use(_express.json())
app.use(_logger("dev"));
app.use(_express.static(__dirname+"/src"));
//default main page
app.use('/', _express.static('app', {index:"index.html"}));
app.use(_router)

app.listen(_config.port, ()=>{
    console.log('Express Server running at http://127.0.0.1:' + _config.port + '/');
    console.log(`Swagger APIs documents at: http://127.0.0.1:${_config.port}/${_config.swagger_path}`);
});

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "LogRocket Express API with Swagger",
//             version: "0.1.0",
//             description:
//                 "This is a simple CRUD API application made with Express and documented with Swagger",
//             license: {
//                 name: "MIT",
//                 url: "https://spdx.org/licenses/MIT.html",
//             },
//             contact: {
//                 name: "LogRocket",
//                 url: "https://logrocket.com",
//                 email: "info@email.com",
//             },
//         },
//         servers: [
//             {
//                 url: `http://localhost:${_config.port}/`,
//             },
//         ],
//     },
//     apis: ["./routers/router.js"],
// };
//
// const specs = swaggerJsdoc(options);
// app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
// );

// let server = _http.createServer(function (req, res) {
//     // console.log(_url.parse((req.url), true).query)
//     console.log("Requesting: " + req.url);
//     _pageRouter.pageRouter(req,res);
//
// }).listen(http_port,()=>{
//     console.log('Http Server running at http://127.0.0.1:' + http_port + '/');
// });

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



