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
        console.log("looking for => ",brand)
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
}









