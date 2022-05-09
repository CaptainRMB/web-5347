let phonesModel = require("../dao/phonesModel");
const _mongoose = require("mongoose");
const mongoose = require("mongoose");
const usersModel = require("./usersModel");
const ObjectId = require('mongodb').ObjectID;

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

    getPhoneByID(id) {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                _id: id
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
        // console.log("looking for => ", brand)
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

    getReviewByID(id) {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                _id: id
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

    getAvgRatingByID(id) {
        // console.log(id)
        return new Promise((resolve, reject) => {
            phonesModel
                .aggregate([
                    {
                        $match: {_id: ObjectId(id)}
                    },
                    {$unwind: "$reviews"},
                    {
                        $group: {
                            _id: id,
                            rating: {$avg: "$reviews.rating"}
                        }

                    }])
                .then(doc => {
                    console.log(doc)
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getTop5RatedPhones() {
        // let ObjectIDs = new Array(ids.length)
        // ids.forEach((v, i) => {
        //     ObjectIDs[i] = _mongoose.Types.ObjectId(v);
        // })

        return new Promise((resolve, reject) => {
            // five phone,
            // that have the highest average rating
            // not disabled
            // at least two ratings given
            phonesModel.aggregate([
                {
                    $match: {
                        // _id: {$in : ObjectIDs},
                        'reviews.1': {$exists: true},
                        'disabled': {$ne: ""}
                    }
                },
                {$unwind: "$reviews"},
                {
                    $group: {
                        _id: '$_id',
                        "title": {"$first": "$title"},
                        "brand": {"$first": "$brand"},
                        rating: {$avg: "$reviews.rating"}
                    }
                },
                {
                    $sort: {
                        rating: -1
                    }
                }, {
                    $limit: 5
                },
                {
                    "$project": {
                        "_id": "$_id",
                        "title": "$title",
                        "brand": "$brand",
                        "avgRating": "$rating",
                    }
                }
            ])
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getDisabledPhones() {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                disabled: ""
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getSoldOutSoon() {
        return new Promise((resolve, reject) => {
            phonesModel.find({
                disabled: {$ne: ""},
                stock: {$gt: 0}
            }).sort({
                stock: 1
            }).limit(5)
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    postReview(pid, post_uid, post_rating, post_comment) {
        return new Promise((resolve, reject) => {
            phonesModel
                // .findOne({
                //     _id: pid
                // })
                .update(
                    {_id: pid},
                    {
                        $push: {
                            reviews: {
                                reviewer: post_uid,
                                rating: post_rating,
                                comment: post_comment
                            }
                        }
                    }
                )

                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}









