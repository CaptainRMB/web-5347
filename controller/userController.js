const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');
const _util = require('../utils/hashing')
const _ws = require('../websocketServer')
const _webSocket = require("ws");
const nodemailer  = require('nodemailer');

const {isEmail}= require('../utils/validator');
const { isPromise } = require("util/types");
const { isPwdValidated } = require("../utils/validator");
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
                table_email: result[0].email,
                table_password: result[0].password,
                table_id: result[0].id
            })
        }
    },
}