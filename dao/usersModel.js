const mongoose = require("mongoose");
const validator = require("js-validator")
let usersModel = new mongoose.Schema({
    firstname:{
        type: String,
        require: false
    },
    lastname:{
        type: String,
        require: false
    },
    email:{
        type: String,
        require: true,
        unique: true,
        // validate: (value) => {
        //     return isEmail()
        // }

    },
    password:{
        type: String,
        require: true,
        validate: (value) => {
            return notNull(value)
        }
    },

})

function isEmail(obj) {
    let email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return email.test(obj);
}

function notNull(str){
    return str.length !== 0;
}
module.exports = mongoose.model('user',usersModel,'users');