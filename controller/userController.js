const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")
const _url = require('url');

module.exports = {

    //TODO session and cookie
    //TODO md5 hashing for password
    async userLogin(req, res) {
        let email = req.body.email;
        let password = req.body.password;
        let result = await _usersQuery.getUserByEmail(email);
        // console.log(req.body)
        // console.log(result)
        try {
            if (result[0].password === password && result[0].password !== undefined) {//TODO wrong condition, boundary case might exist
                // console.log(result[0].password )
                // console.log(password)
                // res.send("Login Success!")
                await setTimeout( function(){
                    // res.redirect(302, _url.format({
                    //     pathname:"/getUserByEmail",
                    //     query:{
                    //         email:req.body.email
                    //     }
                    // }))
                    res.render('user.ejs',{
                        title_firstName:result[0].firstname,
                        table_name:result[0].firstname+" "+result[0].lastname,
                        table_email:result[0].email,
                        table_password:result[0].password
                    })
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

        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let password = req.body.password;
        console.log(req.body)
        let result = await _usersQuery.signUp(email, password, firstName, lastName);
        if (result === true) {
            res.send("Sign Up Successfully!")
            await setTimeout( function(){
                res.redirect(302, '/login.html');
            }, 2 * 1000 );
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

    async getAllUsers(req, res) {
        let result = await _usersQuery.getAllUsers();
        res.send(result);
    },

    async getUserByEmail(req, res) {
        let email = req.query.email;
        let result = await _usersQuery.getUserByEmail(email);
        res.send(result)
    }
}