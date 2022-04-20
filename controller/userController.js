const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');
const _util = require('../utils/hashing')
module.exports = {

    //TODO session and cookie
    async userLogin(req, res) {
        let {email, password} = req.body;
        // let password =_util.md5(req.body.password); //TODO currently it's using unhashed password for testing, not sure if I can add salt in the case of the new data set during demo
        let result = await _usersQuery.getUserByEmail(email);
        try {
            if (result[0].password === password && result[0].password !== undefined) {//TODO wrong condition, boundary case might exist
                await setTimeout(function () {
                    req.session.data = {id: result[0]._id.toString()};
                    // console.log(req.session, 'SAVED!')
                    res.redirect(302, _url.format({
                        pathname: "/user/detail",
                        query: {
                            id: result[0]._id.toString()
                        }
                    }))
                    // res.render('user.ejs',{
                    //     title_firstName:result[0].firstname,
                    //     table_name:result[0].firstname+" "+result[0].lastname,
                    //     table_email:result[0].email,
                    //     table_password:result[0].password,
                    //     table_id:result[0]._id.toString()
                    // })
                }, 0 * 1000 );
            }
            else {
                res.status(403)
                res.send("Login Failed:" + "Wrong Password")
            }
        } catch (e) {
            res.status(403)
            res.send("Login Failed:" + e.name + e.message)
        }
    },

    async userSignUp(req, res) {
        let {firstName, lastName, email, password} = req.body
        password = _util.md5(password);
        let result = await _usersQuery.signUp(email, password, firstName, lastName);
        if (result === true) {
            res.send("Sign Up Successfully!")
            // await setTimeout( function(){
            //     res.redirect(302, '/login.html');
            // }, 2 * 1000 );
        }
        else {
            res.status(403)
            if (result.code === 11000) {
                res.send("Sign Up failed: " + result.name + result.message)
            }
            else {//TODO case if no error code is returned
                res.send("Sign Up failed: " + result.name + result.message)
            }
        }
    },

    async signOut(req, res) {
        // console.log(req.session)
        req.session.destroy(function (err) {
        });
        res.redirect(req.get('referer'));
    },

    async getAllUsers(req, res) {
        let result = await _usersQuery.getAllUsers();
        res.send(result);
    },

    async getUserByEmail(req, res) {
        let email = req.query.email;
        let result = await _usersQuery.getUserByEmail(email);
        res.send(result)
    },

    async getUserByID(req, res) {
        let id = req.query.id;
        let result = await _usersQuery.getUserByID(id);
        res.send(result)
    },

    async userPage(req, res) {

        let id = req.query.id;
        // console.log(id)
        let result = await _usersQuery.getUserByID(id);
        // console.log(req.body)
        // console.log(result)
        if (result[0]) {
            res.render('user.ejs', {
                title_firstName: result[0].firstname,
                table_name: result[0].firstname + " " + result[0].lastname,
                table_email: result[0].email,
                table_password: result[0].password,
                table_id: result[0].id
            })
        }
    },
}