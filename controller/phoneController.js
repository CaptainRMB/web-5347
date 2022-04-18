

const users = [{username: "admin", password: "admin"}]
const _mongo = require("../dao/mongo")
const _phonesQuery = require("../dao/phonesQuery")
const _url = require('url');

module.exports = {
    async getAllPhones(req, res) {
        let doc = await _phonesQuery.getAllPhones();
        console.log(doc)
        res.send(doc)
    },

    async getPhoneByTitle(req, res) {
        let title = req.query.title;
        let doc = await _phonesQuery.getPhoneByTitle(title);
        let ret = doc[0];
        console.log(ret)
        res.send(ret)
    },

    async getPhoneBySeller(req, res) {
        let seller = req.query.seller;
        let doc = await _phonesQuery.getPhoneBySeller(seller);
        console.log(doc)
        res.send(doc)
    },

    async getPhoneByBrand(req, res) {
        let brand = req.query.brand;
        let doc = await _phonesQuery.getPhoneByBrand(brand);
        console.log(doc)
        res.send(doc)
    },

    async getAllBrands(req, res) {
        let doc = await _phonesQuery.getAllBrands();
        console.log(doc)
        res.send(doc)
    },

    async getReviewByTitle(req, res) {
        let title = req.query.title;
        let doc = await _phonesQuery.getReviewByTitle(title);
        console.log(doc)
        res.send(doc)
    },

    async getAvgRatingByTitle(req, res) {
        let title = req.query.title;
        let doc = await _phonesQuery.getAvgRatingByTitle(title);
        let avgRating = doc[0].rating;
        // console.log(avgRating)
        res.send(200,avgRating)
    },
}