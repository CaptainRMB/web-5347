const _config = require("../config/config")
const mongoose = require("mongoose");


class Database {
    constructor() {
        //Singleton
        this.createConnection()
    }

    createConnection(){
        mongoose.connect(_config.mongoDB_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (error) {
            if (error) {
                console.log(_config.mongoDB_url)
                console.log("MongoDB is disconnected!")
            } else {
                console.log("MongoDB is connected!")
            }
        })
    }
}
module.exports = new Database();

