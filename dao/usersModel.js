const mongoose = require("mongoose");
const _config = require("../config/server");
const _util = require("../utils/validator")
let usersModel = new mongoose.Schema({
    firstname: {
        type: String,
        require: false
    },
    lastname: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true,
        unique: true,
        // validate: (value) => {
        //     return _util.isEmail()
        // }

    },
    password:{
        type: String,
        require: true,
        validate: (value) => {
            return _util.notNull(value)
        }
    },

})


module.exports = mongoose.model('user',usersModel,`${_config.mongoDB_usersCollection}`);