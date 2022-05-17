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
        } else {
            res.status(403).send("ID not found")
        }
    },

    async getPhoneBySeller(req, res) {
        let seller = req.query.seller;
        let doc = await _phonesQuery.getPhoneBySeller(seller);
        if (doc.length > 0) {
            res.send(200, doc)
        } else {
            res.send(403, "Seller not found")
        }
    },

    async getPhoneByBrand(req, res) {
        let brand = req.query.brand;
        let doc = await _phonesQuery.getPhoneByBrand(brand);
        if (doc.length > 0) {
            res.send(200, doc)
        } else {
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
        } else {
            res.send(403, "ID not found")
        }
    },

    async getAvgRatingByID(req, res) {
        let id = req.query.id;
        let doc = await _phonesQuery.getAvgRatingByID(id);
        if (doc.length > 0) {
            let avgRating = doc[0].rating;
            res.send(200, avgRating)
        } else {
            res.send(403, "ID not found")
        }

    },

    async getTop5RatedPhones(req, res) {
        let doc = await _phonesQuery.getTop5RatedPhones();
        // console.log(doc)
        res.send(doc)
    },

    async getDisabledPhones(req, res) {
        let doc = await _phonesQuery.getDisabledPhones();
        // console.log(doc)
        res.send(doc)
    },

    async getSoldOutSoon(req, res) {
        let doc = await _phonesQuery.getSoldOutSoon();
        // console.log(doc)
        res.send(doc)
    },

    async postReview(req, res) {
        console.log(req.body)
        let {pid, post_uid, post_rating, post_comment} = req.body;
        let doc = await _phonesQuery.postReview(pid, post_uid, post_rating, post_comment);
        console.log(doc)
        if (doc.acknowledged === true && doc.modifiedCount === 1) {
            res.status(200).send({isSuccess: true})
        } else {
            res.status(403).send({isSuccess: false})
        }
    },


    async checkOutChangeStock(req, res) {
        console.log(req.body, "req.body!!!!!!!")
        let pCart = req.body.pCart;

        let pMap = new Map();
        pCart.forEach(item => {
            pMap.set(item.pId, item.pQuantity)
        });

        // let doc= await _phonesQuery.checkOutChangeStock(pCart);

        for (const [k, v] of pMap.entries()) {
            console.log(k, v);
            let doc = await _phonesQuery.checkOutChangeStock(k, v);
            console.log(doc)

        }
        res.status(200).send({isSuccess: true})

    },


    async changePhoneList(req, res) {
        let sellerId = req.body.id;
        console.log("sellerId in changePhoneList: " + sellerId);
        /*The phone list need to be processed*/
        let phoneList = req.body.phoneList;
        console.log("phoneList in changePhoneList: " + phoneList);

        /*The required operation on sent phone list*/
        /*Possible data are "remove", "add", "disable", "enable"*/
        let listOperation = req.body.listOperation;

        //Extract the used information from sent phone list
        if (listOperation != "add") {
            phoneId = phoneList['_id'];
        }
        phoneTitle = phoneList['title'];
        phoneBrand = phoneList['brand'];
        phoneImage = phoneList['image'];
        phoneStock = phoneList['stock'];
        phonePrice = phoneList['price'];

        /*Set sellername to new added list*/
        sellerName = `${req.query.firstname} ${req.query.lastname}`

        addedList = '';

        //Do the operation to the list in database

        switch (listOperation) {
            case "remove" :
                console.log("phoneId in changePhoneList: " + phoneId);
                await _phonesQuery.removePhone(phoneId);
                break;
            case "add" :
                addedList = await _phonesQuery.postPhone(phoneTitle, phoneBrand, phoneImage, phoneStock, sellerId, phonePrice, sellerName);
                break;
            case "disable" :
                await _phonesQuery.updateDisablePhone(phoneId);
                break;
            case "enable" :
                await _phonesQuery.updateEnablePhone(phoneId);
                break;
        }

        res.json(addedList);
    },
}