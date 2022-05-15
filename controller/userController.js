const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');
const _util = require('../utils/hashing')
const _ws = require('../websocketServer')
const _webSocket = require("ws");
const nodemailer  = require('nodemailer');
const _phonesQuery = require("../dao/phonesQuery")

const {isEmail}= require('../utils/validator');
const { isPromise } = require("util/types");
const { isPwdValidated } = require("../utils/validator");
const Phonelisting = require("../dao/phonelisting");
const Userinfo = require("../dao/userinfo");

module.exports = {

    async userLogin(req, res) {
        // console.log(req.body)
        let {email, password} = req.body;
        console.log(email, password)
        // let password =_util.md5(req.body.password); //TODO currently it's using unhashed password for testing, not sure if I can add salt in the case of the new data set during demo
        let result = await _usersQuery.login(email, password);
        console.log(result)
        try {
            if (result[0].password === password && result[0].password !== undefined) {//TODO wrong condition, boundary case might exist
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
                }, 0 * 1000 );
            }
            else {
                res.status(403).send("Login Failed:" + "Wrong Password")

            }
        } catch (e) {
            console.log("ERROR\n", e);
            res.status(200).send({error: e.toString()})

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
        // let password =_util.md5(req.body.password); //TODO currently it's using unhashed password for testing, not sure if I can add salt in the case of the new data set during demo
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


    async userSignUp(req, res) {
        let {firstName, lastName, email, password} = req.body
        
        var permission=isPwdValidated(password);
        var mail = isEmail(email);
        password = _util.md5(password);
        if (permission===true&&mail===true) {
        if (await _usersQuery.signUp(email, password, firstName, lastName) === true) {
            res.send("Sign Up Successfully!")}
            // await setTimeout( function(){
            //     res.redirect(302, '/login.html');
            // }, 2 * 1000 );
        }
        else {
            res.status(403)
            if(await _usersQuery.signUp(email, password, firstName, lastName).code !== 11000)
            res.send("Sign Up failed: " + "THE PASSWORD OR EMAIL_IS_INVALID");
            else
            res.send("Sign Up failed: " + await _usersQuery.signUp(email, password, firstName, lastName).name + await _usersQuery.signUp(email, password, firstName, lastName).message);
            // if (result.code === 11000) {
            //     res.send("Sign Up failed: " + result.name + result.message)
            // }
            // else {//TODO case if no error code is returned
            //     res.send("Sign Up failed: " + result.name + result.message)
            // }
        }

        const mailTransport = nodemailer.createTransport({
            host : 'smtp.163.com',
            port: 465, // SMTP 
            secureConnection: true, // SSL
            auth : {
                user : 'zbj2305@163.com',
                pass : 'SBCPIUYZMOCRJCDO'
            },
        });



        var options = {
            from        : '"Phone market" zbj2305@163.com',
            to          : email,
            subject        : 'A email from Node Mailer',
            text          : 'A email from Node Mailer',
            html           : '<h1>Hey，this email is from Node Mailer！</h1>',
        };


        mailTransport.sendMail(options, function(err, msg){
            if(err){
                console.log(err);
                //res.render('index', { title: err });
            }
            else {
                console.log(msg);
                //res.render('index', { title: "received："+msg.accepted});
            }
        });
    },

    async signOut(req, res) {
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
    },

    async changeProfile(req, res) {
        console.log(req);
        /*Information for verify identity*/
        let id = req.query.id;
        //id = req.session.sid;
        let email = req.query.email;
        //let currentEmail = req.session.email
        let password = '';
        password = _util.md5(password);
        //hashedPassword = req.body.password;
        /*The changed profile information*/
        let changedEmail = req.body.email;
        let changedFirstname = req.body.firstname;
        let changedLastname = req.body.lastname;

        //Verify the password
        //Then change the profile in database
        let result = await Userinfo.findbyUserid(id)
        if (password == result['password']) {
            console.log("a");
            result = await Userinfo.findUserEmail(changedEmail)
            if (result == "" || result[0]['email'] == email) {
                await Userinfo.UpdateUserById(id, changedEmail, changedFirstname, changedLastname)
                req.query.id = id;
                //req.session.sid = id;
                req.query.email = changedEmail;
                //req.session.email = changedEmail;
                req.query.firstname = changedFirstname;
                //req.session.firstname = changedFirstname;
                req.query.lastname = changedLastname;
                //req.session.lastname = changedLastname;
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
    },

    async changePassword(req, res) {
        /*Info for verify identity*/

        let id = req.query.id;
        //let id = req.session.sid;

        let hashedCurrentPwd = req.body.currentPwd;
        let hashedNewPwd = req.body.newPwd;

        //Verify the password
        //Then change the profile in database
        let result = await Userinfo.findbyUserid(id)
        if (hashedCurrentPwd == result['password']) {
            console.log("password checked")
            //update user password
            await Userinfo.UpdateUserPasswordById(id, hashedNewPwd)
            res.json(true);
            console.log("password UPDATED!")
        } else {
            res.json(false);
            console.log("wrong password, you cannot change to a new one!")
        }
    },

    async getListing(req, res) {
        let sellerId = req.session.sid;
        /*Get all phone list selled by sellerID*/
        let user_related_phonelist = await _phonesQuery.getPhoneByID(id);
        res.json(user_related_phonelist);
    },

    async changePhoneList(req, res) {
        let sellerId = req.session.sid;

        /*The phone list need to be processed*/
        phoneList = req.body.phoneList;

        /*The required operation on sent phone list*/
        /*Possible data are "remove", "add", "disable", "enable"*/
        listOperation = req.body.listOperation;

        //Extract the used information from sent phone list
        if(listOperation != "add") {
            phoneId = phoneList['_id'];
        }
        phoneTitle = phoneList['title'];
        phoneBrand = phoneList['brand'];
        phoneImage = phoneList['image'];
        phoneStock = phoneList['stock'];
        phonePrice = phoneList['price'];

        /*Set sellername to new added list*/
        sellerName = `${req.session.firstname} ${req.session.lastname}`

        addedList = '';

        //Do the operation to the list in database
        switch (listOperation) {
            case "remove" :
                await Phonelisting.RemovePhoneInMongo(phoneId);
                break;
            case "add" :
                addedList = await Phonelisting.AddPhoneInMongo(phoneTitle, phoneBrand, phoneImage, phoneStock, sellerId, phonePrice,sellerName);
                break;
            case "disable" :
                await Phonelisting.disablePhone(phoneId);
                break;
            case "enable" :
                await Phonelisting.enablePhone(phoneId);
                break;
        }

        res.json(addedList);
    },
}