const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');
const _util = require('../utils/hashing')
const _ws = require('../websocketServer')
const _webSocket = require("ws");
const nodemailer = require('nodemailer');
const _phonesQuery = require("../dao/phonesQuery")
const {isEmail} = require('../utils/validator');
const {isPromise} = require("util/types");
const {isPwdValidated} = require("../utils/validator");
var signUpValidationMap = new Map();
const _config = require("../config/server")

module.exports = {

    async userLogin(req, res) {
        console.log(req.body)
        //let {email, password} = req.body;

        let email = req.body.email;
        // let password = req.body.password;
        let password =_util.md5(req.body.password); //TODO md5
        console.log(email, password);
        let result = await _usersQuery.login(email, password);
        try {
            if (result.length === 0) {
                res.status(403).send("Login Failed:" + "Email not exist!")
            }
            else if (result[0].password === password || result[0].password !== undefined) {//TODO wrong condition, boundary case might exist
                await setTimeout(function () {
                    req.session.data = {id: result[0]._id.toString()};
                    // console.log(req.session, 'SAVED!')
                    // res.redirect(302, _url.format({
                    //     pathname: "/user/detail",
                    //     query: {
                    //         id: result[0]._id.toString()
                    //     }
                    // }))
                    res.redirect(302, "/main")
                }, 0 * 1000);
            }
            else {
                res.status(403).send("Login Failed:" + "Wrong Password")

            }
        } catch (e) {
            console.log("ERROR\n", e);
            res.status(200).send("please input correct information");

            // _ws.send(JSON.stringify({
            //     msg :"Login Failed:" + e.name + e.message
            // }))
            // res.json({
            //     msg: "Login Failed:" + e.name + e.message
            // })

        }
    },
    async userLoginIsSuccess(req, res) {
        // console.log(req.body)
        let {email, password} = req.body;
        console.log(email, password)
        password =_util.md5(password); //TODO currently it's using unhashed password for testing, not sure if I can add salt in the case of the new data set during demo
        let result = await _usersQuery.login(email, password);
        // console.log('result=>',result)
        if (result[0] !== undefined) {
            req.session.data = {id: result[0]._id.toString()};
            res.status(200).send({isSuccess: true})
        }
        else {
            res.status(403).send({isSuccess: false})
        }
    },

    async userMail(req, res) {
        let {firstName, lastName, email, password} = req.body;
        console.log("Receiving", firstName, lastName, email, password)

        function UserModel(Email, Password, Firstname, Lastname) {
            this.Email = Email;
            this.Password = Password;
            this.Firstname = Firstname;
            this.Lastname = Lastname;
        }

        let userDoc = await _usersQuery.getUserByEmail(email);
        if (userDoc.length !== 0){
            res.send(403, "This email has been used!")
        }else {
            let id = _util.md5(email + password)

            //please contact auuokay@gmail.com to use this function in new device
            const mailTransport = nodemailer.createTransport({
                // host: 'smtp.gmail.com',
                // port: 465,
                // secureConnection: true,
                // auth: {
                //     user: 'bj0226774@gmail.com',
                //     pass: '8characters?'
                // }
                service:'qq',
                auth: {
                    user: '2319931081@qq.com',//uzwuotrupzgeeabc
                    pass: 'uzwuotrupzgeeabc'//3hv4YjVhegHJ&+K
                }

            });
            let link = `http://localhost:${_config.port}/checkMail?id=${id}`
            let options = {
                from: '"Phone market" <2319931081@qq.com>',
                to: email,
                subject: 'A email from Phone market',
                text: 'Please validate your email address! ',
                html: `<a href="${link}">${link}</a>`,
            };
            console.log(options)
            await mailTransport.sendMail(options, function (err, msg) {
                if (err) {
                    console.log(err);
                    res.send(403, "Sign Up failed!")
                }
                else {
                    console.log(msg);
                    signUpValidationMap.set(id, new UserModel(email, password, firstName, lastName))
                    res.render('wait.html');
                }
            });
            console.log(signUpValidationMap)
        }
    },

    async userSignUp(req, res) {
        let id = req.query.id;
        console.log("SIGN UP ID:", id);

        let email = signUpValidationMap.get(id).Email;
        let password = signUpValidationMap.get(id).Password;
        let firstname = signUpValidationMap.get(id).Firstname;
        let lastname = signUpValidationMap.get(id).Lastname;
        password = _util.md5(password);
        let result = await _usersQuery.signUp(email, password, firstname, lastname);
        if(result === true){
            res.send(200,"Sign Up Successfully!")
        }else {
            res.send(403,result)
        }
        console.log(result);
        //TODO
    }
    ,

    async signOut(req, res) {
        req.session.destroy(function (err) {
        });
        res.redirect(req.get('referer'));
    }
    ,

    async getAllUsers(req, res) {
        let result = await _usersQuery.getAllUsers();
        res.send(result);
    }
    ,

    async getUserByEmail(req, res) {
        let email = req.query.email;
        let result = await _usersQuery.getUserByEmail(email);
        res.send(result)
    }
    ,

    async getUserByID(req, res) {
        let id = req.query.id;
        let result = await _usersQuery.getUserByID(id);
        res.send(result)
    }
    ,

    async userPage(req, res) {
        let id = req.query.id;
        let result = await _usersQuery.getUserByID(id);
        if (result[0]) {
            res.render('user.ejs', {
                title_firstName: result[0].firstname,
                table_name: result[0].firstname + " " + result[0].lastname,
                table_firstName: result[0].firstname,
                table_lastName: result[0].lastname,
                table_email: result[0].email,
                table_password: result[0].password,
                table_id: result[0].id
            })
        }
    }
    ,

    async sendSessionInfo(req, res) {

        sess = req.session
        res.json({
            firstname: sess.firstname,
            lastname: sess.lastname,
            email: sess.email
        })
    }
    ,


    async changeProfile(req, res) {
        console.log(1);
        /*Information for verify identity*/
        let id = req.body.id;
        let currentEmail = req.session.email;
        let hashedPassword = req.body.password;

        /*The changed profile information*/
        let changedEmail = req.body.email;
        let changedFirstname = req.body.firstname;
        let changedLastname = req.body.lastname;
        console.log(id);

        //Verify the password
        //Then change the profile in database
        let result = await _usersQuery.getUserByID(id)
        console.log(result);
        console.log(hashedPassword);
        if (hashedPassword === result[0].password) {
            result = await _usersQuery.getUserByEmail(changedEmail)
            console.log(result[0]['email'], changedEmail);
            if (result.length === 0 || result[0]['email'] === changedEmail) {
                await _usersQuery.updateProfile(id, changedEmail, changedFirstname, changedLastname)
                req.session.sid = id;
                req.session.email = changedEmail;
                req.session.firstname = changedFirstname;
                req.session.lastname = changedLastname;
                console.log("User Profile UPDATED")
                res.json({success: true});
            }
            // email existed in DB!!
            else {
                res.json({success: false, reason: 'email'});
            }
        }
        else {
            res.json({success: false, reason: 'pwd'});
        }
    }
    ,

    async changePassword(req, res) {
        /*Info for verify identity*/

        let id = req.body.id;
        console.log(id);
        let hashedCurrentPwd = req.body.currentPwd;
        let hashedNewPwd = req.body.newPwd;

        //Verify the password
        //Then change the profile in database
        let result = await _usersQuery.getUserByID(id)
        // console.log(result);
        // console.log(hashedCurrentPwd, hashedNewPwd, result[0]['password']);
        if (hashedCurrentPwd === result[0]['password']) {
            console.log("password checked")
            //update user password
            await _usersQuery.updatePasswordById(id, hashedNewPwd)
            res.json(true);
            console.log("password UPDATED!")
        }
        else {
            res.json(false);
            console.log("wrong password, you cannot change to a new one!")
        }
    }
    ,

    async getListing(req, res) {
        let sellerId = req.query.id;
        console.log("sellerId in getListing: " + sellerId);
        /* Get all phone list sold by sellerID */
        let user_related_phonelist = await _phonesQuery.getPhoneBySeller(sellerId);
        console.log(user_related_phonelist);
        res.json(user_related_phonelist);
    }
    ,

}