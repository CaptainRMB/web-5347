const mongoose = require("mongoose");
const validator = require("js-validator")
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

module.exports = mongoose.model('review',usersModel,'phones');