let phonesModel = require("../dao/phonesModel");
const _mongoose = require("mongoose");
const mongoose = require("mongoose");
const usersModel = require("./usersModel");
const ObjectId = require('mongodb').ObjectID;
const _config = require("../config/server");

var escape = require('escape-regexp');


var PhonelistingSchema = new mongoose.Schema({
    title: String,
    brand: String,
    image: String,
    stock: Number,
    seller: String,
    sellername: String,
    price: Number,
    reviews: Array,
    disabled: String
}, {versionKey: false});

//mainpage function
//listing all the phones: title brand image price
PhonelistingSchema.statics.getPhonelist = function () {
    //no disable
    //no id,seller,reviews
    return this.find({"disabled": {$ne: ''}}, {_id: 0, reviews: 0})
        //sort as brand name
        .sort({"brand": 1})


}

//for the chosen phone, return : title,brand,imageurl,stock,id,price
PhonelistingSchema.statics.getPhonedetails = function (title) {
    return this.find({"title": title})

}


//soldout soon phone
PhonelistingSchema.statics.getSoldoutSoonlist = function () {
    return this.find({"disabled": {$ne: ''}, 'stock': {$gt: 0}})
        .sort({"stock": 1})
        .limit(5)

}

//BestSellerPhone
PhonelistingSchema.statics.getBestSellerPhone = function () {
    var bestSellerPhonePipeline = [
        {'$match': {'reviews.1': {$exists: true}, "disabled": {$ne: ''}}},
        {"$addFields": {"ratingavg": {"$avg": "$reviews.rating"}}},
        {'$sort': {"ratingavg": -1}},
        {'$limit': 5}
    ];
    return this.aggregate(bestSellerPhonePipeline)
}

//search by keywords
PhonelistingSchema.statics.searchBykeyword = function (keyword) {
    if (keyword == "") {
        return this.find({"disabled": {$ne: ''},"stock":{"$gt":-1}});
    }else{
        //npm install 'escape-regexp' --save
        return this.find({ 'title': {'$regex': escape(keyword), '$options': 'i'},"disabled": {$ne: ''},"stock":{"$gt":-1}});

    }
}

//Max price of the phone in db
PhonelistingSchema.statics.maxPriceOfPhone = function () {
    //case insensitive
    return this.find({"disabled": {$ne: ''}}, {price: 1})
        .sort({"price": -1})
        .limit(1)
}

//modify the quantity of one item
PhonelistingSchema.statics.ModifyPhoneQuantityInMongo = function (title, quantity) {
    return this.update({"title": title}, {"$inc": {"stock": quantity * -1}}, {"$set": {"stock": "NumberInt(0)"}})
}

// check the stock of products in db
PhonelistingSchema.statics.CheckPhoneStockInMongo = function (title) {
    return this.find({"title": title})
}

// remove the phone by id
PhonelistingSchema.statics.RemovePhoneInMongo = function (id) {
    return this.findOneAndDelete({"_id": id})
}

// add a new phone
PhonelistingSchema.statics.AddPhoneInMongo = function (title, brand, image, stock, seller, price, sellername) {
    var new_phone = new Phonelisting({
        title: title,
        brand: brand,
        image: image,
        stock: stock,
        seller: seller,
        price: price,
        sellername: sellername,
    });

    return new_phone.save();
}

// make the phone disabled
PhonelistingSchema.statics.disablePhone = function (id) {
    // db.getCollection('Userinfo').update({_id:2},{"$set":{"disabled":''}})
    return this.update({"_id": id}, {'$set': {'disabled': ''}})
}

// make the phone enabled
PhonelistingSchema.statics.enablePhone = function (id) {
    return this.update({"_id": id}, {"$unset": {'disabled': ''}})
}

// return related phones of the current user
PhonelistingSchema.statics.relatedPhoneList = function (sellerId) {
    return this.find({"seller": sellerId}, {reviews: 0})
}

//listing all the phones with disabled: title brand image price
PhonelistingSchema.statics.getPhonelistWithDisabled = function () {
    //no disable
    //no id,seller,reviews
    return this.find()
        //sort as brand name
        .sort({"_id": 1})

}

//replace the seller id with name
PhonelistingSchema.statics.TransferSellername = function (phoneid,sellername) {
    return this.update({"_id": phoneid}, {"$set": {'sellername': sellername}})
}

//for the chosen phone, return : title,brand,imageurl,stock,id,price
PhonelistingSchema.statics.getPhonedetailsById = function (phoneid) {
    return this.find({"_id": phoneid})

}

//replace the reviewer name with id
PhonelistingSchema.statics.TransferReviewername = function (phoneid,reviewerid,reviewername){
    return this.update({"_id":phoneid,"reviews.reviewer":reviewerid},{$set:{"reviews.$.reviewer":reviewername}})

}

var Phonelisting = mongoose.model('Phonelisting', PhonelistingSchema, 'phonelisting')
module.exports = Phonelisting