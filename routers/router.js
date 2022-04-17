const _express = require("express");
const _userController = require("../controller/userController")
const _bodyParser = require('body-parser');

const jsonParser = _bodyParser.json();
const urlencodedParser = _bodyParser.urlencoded({ extended: false })
const router = _express.Router()
/**
 * @route POST /login.do
 * @group user - Operations about user
 * @param {string} email.query.required - not validated yet
 * @param {string} password.query.required - not validated yet
 * @returns {object} 200 - An object of user
 * @returns {Error}  403 - Server Rejected
 */
router.post("/login.do",_userController.userLogin);

/**
 * @route POST /signup.do
 * @group user - Operations about user
 * @param {string} email.query.required - not validated yet
 * @param {string} password.query.required - not validated yet
 * @param {string} firstname.query - optional
 * @param {string} lastname.query - optional
 * @returns {boolean} 200 - true
 * @returns {Error}  403 - Server Rejected
 */
router.post("/signup.do",_userController.userSignUp);

/**
 * @route GET /getAllUsers
 * @group user - Operations about user
 * @returns {boolean} 200 - All user objects in Json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getAllUsers",_userController.getAllUsers);

/**
 * @route GET /getUserByEmail
 * @group user - Operations about user
 * @param {string} email.query.required - not validated yet
 * @returns {boolean} 200 - true
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getUserByEmail",_userController.getUserByEmail);


module.exports = router;
