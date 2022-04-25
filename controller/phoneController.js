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

    async getPhoneByID(req, res) {
        let id = req.query.id;
        let doc = await _phonesQuery.getPhoneByID(id);
        if (doc.length > 0) {
            res.status(200).send(doc[0])
        }
        else {
            res.status(403).send("ID not found")
        }
    },

    async getPhoneBySeller(req, res) {
        let seller = req.query.seller;
        let doc = await _phonesQuery.getPhoneBySeller(seller);
        if (doc.length > 0) {
            res.send(200, doc)
        }
        else {
            res.send(403, "Seller not found")
        }
    },

    async getPhoneByBrand(req, res) {
        let brand = req.query.brand;
        let doc = await _phonesQuery.getPhoneByBrand(brand);
        if (doc.length > 0) {
            res.send(200, doc)
        }
        else {
            res.send(403, "Brand not found")
        }
    },

    async getAllBrands(req, res) {
        let doc = await _phonesQuery.getAllBrands();
        console.log(doc)
        res.send(doc)
    },

    async getReviewByID(req, res) {
        let id = req.query.id;
        let doc = await _phonesQuery.getReviewByID(id);
        if (doc.length > 0) {
            res.send(200, doc)
        }
        else {
            res.send(403, "ID not found")
        }
    },

    async getAvgRatingByID(req, res) {
        let id = req.query.id;
        let doc = await _phonesQuery.getAvgRatingByID(id);
        if (doc.length > 0) {
            let avgRating = doc[0].rating;
            res.send(200, avgRating)
        }
        else {
            res.send(403, "ID not found")
        }

    },

    async getTopFivePhonesByIDs(req, res) {
        // let ids = req.body.ids;
        let ids = ["625ac107dd15756133d73fd9",
            "625ac107dd15756133d73fd9",
            "625ac107dd15756133d73fda",
            "625ac107dd15756133d73fdc",
            "625ac107dd15756133d73fdd",
            "625ac107dd15756133d73fde",
            "625ac107dd15756133d73fdf",
            "625ac107dd15756133d73fe0",
            "625ac107dd15756133d73fe1"];
        let doc = await _phonesQuery.getTopFivePhonesByIDs(ids);
        console.log(doc)
        // console.log(avgRating)
        res.send(doc)
    },


}