const mongoose = require("mongoose");
var UserinfoSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    cart : Array
}, {
    versionKey: false
});

// find user mail & password
UserinfoSchema.statics.findUsernamepassword = function (email, password) {
    return this.find({'email': email, 'password': password})
}

// find if there is any identical mail
UserinfoSchema.statics.findUserEmail = function (email) {
    return this.find({'email': email})
}



UserinfoSchema.statics.findbyUserid = function (id) {
    return this.findById(id)

}


//Create a new user
UserinfoSchema.statics.createNewUser = function (email, password, firstname, lastname) {
    var new_user = new Userinfo({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname

    });

    return new_user.save();
}

//traverse users
UserinfoSchema.statics.getByMail = function (email, callback) {
    return this.find({'email': email}).exec(callback);
};

//update firstname lastname email BY ID
UserinfoSchema.statics.UpdateUserById = function (_id,email,firstname,lastname) {
    return this.findByIdAndUpdate(_id, {$set: {'email': email,'firstname':firstname,'lastname':lastname}});
};

//update password
UserinfoSchema.statics.UpdateUserPasswordById = function (_id,password) {
    return this.findByIdAndUpdate(_id, {$set: {'password': password}});
};


//add an item to cart (title quantity price )
UserinfoSchema.statics.addOnePhoneToCart = function (_id,title,quantity,price){
    //db.getCollection('Userinfo').update({_id:3},{$push:{cart:{title:"huawei",'quantity':2,price:199}}})
    return this.update({'_id':_id},{$push:{'cart':{'title':title,'quantity':quantity,'price':price}}})

}

//remove an item in cart
UserinfoSchema.statics.removePhoneToCart = function (_id,title){
    return this.update({'_id':_id},{$pull:{'cart':{'title':title}}})
}

//modify the quantity of one item
UserinfoSchema.statics.ModifyPhoneQuantityToCart = function (_id,title,quantity){
    //db.getCollection('Userinfo').update({_id:3,"cart.title": "samsung"},{$set:{"cart.$.quantity":88}})
    return this.update({"_id":_id,"cart.title": title},{$set:{"cart.$.quantity":quantity}})

}

var Userinfo = mongoose.model('Userinfo', UserinfoSchema, 'userlist')
module.exports = Userinfo
