let phonesModel = require("../dao/phonesModel");
const mongoose = require("mongoose");

module.exports = {

    getAllPhones() {
        return new Promise((resolve, reject) => {
            phonesModel.find({})
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getPhoneByTitle(title) {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                title: title
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getPhoneBySeller(seller) {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                seller: seller
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getPhoneByBrand(brand) {
        console.log("looking for => ", brand)
        return new Promise((resolve, reject) => {
            phonesModel.find({
                brand: brand
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getAllBrands() {
        return new Promise((resolve, reject) => {
            phonesModel.find({})
                .select({
                    brand: true
                })
                .sort({
                    brand: 1
                })
                .distinct("brand")
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getReviewByTitle(title) {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                title: title
            })
                .select({
                    reviews: true
                })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getAvgRatingByTitle(title) {
        return new Promise((resolve, reject) => {
            phonesModel
                .aggregate([
                    {
                        $match: {title: title}
                    },
                    {$unwind: "$reviews"},
                    {
                        $group: {
                            _id: title,
                            rating: {$avg: "$reviews.rating"}
                        }

                    }])
                //     .find({
                //         title: title
                //     })
                //     .select({
                //         reviews: {
                //             rating: true
                //         }
                //     })

                .then(doc => {
                    console.log(doc)
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}









