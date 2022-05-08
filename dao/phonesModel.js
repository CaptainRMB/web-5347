const mongoose = require("mongoose");
const _config = require("../config/server");
let reviewModel = new mongoose.Schema({
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

let phonesModel = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        unique:true,
    },
    brand:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: false,
    },
    stock:{
        type: Number,
        require: true,
    },
    seller:{
        type: String,
        require: false,
    },
    price: {
        type: Number,
        require: false,
        default: 0
    },
    reviews: {
        type: [reviewModel],
        require: false,
    },
    disabled: {
        type: String,
        require: false,
        default: "false"
    }

})


function notNull(str){
    return str.length !== 0;
}
module.exports = mongoose.model('phone',phonesModel,`${_config.mongoDB_phonesCollection}`);