const mongoose = require("mongoose");


module.exports = {
    port: 8080,
    websocket_port: 8000,
    mongoDB_port: 27017,
    mongoDB_name: "COMP5347",
    mongoDB_usersCollection: "users",
    mongoDB_phonesCollection: "phones",
    // mongoDB_url:`mongodb://localhost:${(this.mongoDB_port)}/${this.mongoDB_name}`
    mongoDB_url: `mongodb://localhost:27017/COMP5347`,
    swagger_path: `apis`,
    swagger_options: {
        swaggerDefinition: {
            info: {
                description: 'This is a sample swagger document for testing apis',
                title: 'COMP5347_Assignment2',
                version: '1.0.0'
            },
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Yizhen Xu",
                email: "auuokay@gmail.com",
            },
            host: `localhost:8080`,
            basePath: '/',
            produces: ['application/json', 'application/xml'],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: ''
                }
            }
        },
        route: {
            url: '/apis',
            docs: '/swagger.json' //swagger config
        },
        basedir: __dirname + '/..', //app absolute path
        files: ['./routers/router.js'] //Path to the API handle folder
    }
}
// console.log(__dirname+'/..')