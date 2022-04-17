const users = [{username: "admin", password: "admin"}]
const _mongo = require("../dao/mongo")
const _usersQuery = require("../dao/usersQuery")

module.exports = {

    async userLogin(req, res) {
        let email = req.body.email;
        let password = req.body.password;
        let result = await _usersQuery.getUserByEmail(email);
        console.log(req.body)
        console.log(result)
        try {
            if (result[0].password === password && result[0].password !== undefined) {
                console.log(result[0].password )
                console.log(password)
                res.send("Login Success!")
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