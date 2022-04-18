const mongoose = require("mongoose");

let phonesModel = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true,
    },
    stock:{
        type: Number,
        require: true,
    },
    seller:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    reviews:{
        type: Array,
        require: true,
    },

})

function notNull(str){
    return str.length !== 0;
}
module.exports = mongoose.model('phone',phonesModel,'phones');