const _fs = require('fs');
// const _res = require('../config/response')
const _phonesQuery = require("../dao/phonesQuery");
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');

module.exports = {
    // sendHTML(req, res) {
    //     let type = req.url.split('.')[1];
    //     _res.response(res, `src` + req.url, {"content-type": `text/${type}; charset=utf-8`})
    // },
    //
    // sendImage(req, res) {
    //     let path = req.url.split('.')[0];
    //     let type = req.url.split('.')[1];
    //     _res.response(res, `src${path}.${type}`, {"content-type": `image/${type}`})
    // },

    async getMainPageData(req, res) {
        let products = await _phonesQuery.getAllPhones();
        let users = await _usersQuery.getUsersNamesIDs();
        // console.log(req.session.data)
        let user = {
            isLogin: false,
            data: {},
        };
        if (req.session.data) {
            users.forEach(v => {
                if (v._id.toString() === req.session.data.id) {
                    console.log("FOUND!")
                    user.isLogin = true;
                    user.data = v;
                }
            })
        }

        console.log(user)
        // console.log(products, users)
        res.render('main.ejs', {
            'doc': products,
            'users': users,
            'user': user,
        })
        // res.render('user.ejs', {
        //     products : doc
        // })
    },


}
