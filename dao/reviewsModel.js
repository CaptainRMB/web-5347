const mongoose = require("mongoose");
const validator = require("js-validator")
const _config = require("../config/server");
let usersModel = new mongoose.Schema({
    reviewer:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        require: true
    },
    comment:{
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('review',usersModel,`${_config.mongoDB_phonesCollection}`);