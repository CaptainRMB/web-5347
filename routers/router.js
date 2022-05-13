const _express = require("express");
const _bodyParser = require('body-parser');
const _userController = require("../controller/userController")
const _phoneController = require("../controller/phoneController")
const _pageController = require("../controller/pageController")
const _userPageController = require('../controller/profileController')

const jsonParser = _bodyParser.json();
const urlencodedParser = _bodyParser.urlencoded({extended: false})
const router = _express.Router()

router.get("/*", function (req, res, next) {
    // console.log(req.url)
    // console.log("Session: ",req.session)
    next();

});

router.get("/", function (req, res, next) {
    res.redirect('/main')
});

/**
 * @route GET /getUserByID
 * @group user - Operations about user
 * @param {string} id.query.required - user id
 * @returns {object} 200 - user object in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getUserByID", _userController.getUserByID);

router.get("/sign_out", _userController.signOut);
/**
 * @route POST /login.do
 * @group user - Operations about user
 * @param {string} email.query.required - not validated yet
 * @param {string} password.query.required - not validated yet
 * @returns {object} 200 - An object of user
 * @returns {Error}  403 - Server Rejected
 */
router.post("/login.do", _userController.userLogin);
//this one returns data only with status code 200
router.post("/login", _userController.userLoginIsSuccess);

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
router.get("/getUserByEmail", _userController.getUserByEmail);

router.get("/user/*", function (req, res, next) {
    let flag = true;
    // console.log(req.session)
    if (req.session.data) {
        if (req.session.data.id === req.query.id) {
            next();
        }
        else {
            res.send(
                '<body>' +
                "<h2>Illegal request!<br></h2>" +
                '<a href="/login.html">Login</a>' +
                '</body></html>')
        }
    }
    else {
        res.redirect(302, "/login.html")
    }
});

/**
 * @route GET /user
 * @group user - Operations about user
 * @param {string} id.query.required - user id
 * @returns {object} 200 - An html of user page(ajax)
 * @returns {Error}  403 - Server Rejected
 */
router.get("/user/detail", _userController.userPage);


/**
 * @route GET /getAllPhones
 * @group phone - Operations about phone
 * @returns {boolean} 200 - All phone objects in Json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getAllPhones", _phoneController.getAllPhones);

/**
 * @route GET /getPhonesByID
 * @group phone - Operations about phone
 * @param {string} id.query.required - phone id
 * @returns {boolean} 200 - Phone object in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getPhoneByID", _phoneController.getPhoneByID);

/**
 * @route GET /getPhonesBySeller
 * @group phone - Operations about phone
 * @param {string} seller.query.required - seller id
 * @returns {boolean} 200 - Array of Phone objects in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getPhonesBySeller",_phoneController.getPhoneBySeller);

/**
 * @route GET /getPhonesByBrand
 * @group phone - Operations about phone
 * @param {string} brand.query.required - brand name
 * @returns {boolean} 200 - Array of Phone objects in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getPhonesByBrand",_phoneController.getPhoneByBrand);

/**
 * @route GET /getAllBrands
 * @group phone - Operations about phone
 * @returns {boolean} 200 - Array of Phone objects in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getAllBrands",_phoneController.getAllBrands);

/**
 * @route GET /getReviewByTitle
 * @group phone - Operations about phone
 * @param {string} id.query.required - phone id
 * @returns {boolean} 200 - Array of Review objects in json
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getReviewByID", _phoneController.getReviewByID);

/**
 * @route GET /getRatingByID
 * @group phone - Operations about phone
 * @param {string} id.query.required - phone id
 * @returns {boolean} 200 - Double type average rating
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getRatingByID", _phoneController.getAvgRatingByID);

/**
 * @route POST /getTopFiveRatedPhonesByIDs
 * @group phone - Operations about phone
 * @param {Array} ids.query - array of phone ids which is available in the website, currently it doesn't accept any parameter(i.e. returns the ranked rating of all phones), if you want to filter with your IDs array, please uncomment "_id: {$in : ObjectIDs}," line in the source code of query function
 * @returns {boolean} 200 - Array of id and corresponding average rating
 * @returns {Error}  403 - Server Rejected
 */
router.get("/getTop5RatedPhones", _phoneController.getTop5RatedPhones);


router.get("/getDisabledPhones", _phoneController.getDisabledPhones);
router.get("/getSoldOutSoon", _phoneController.getSoldOutSoon);
router.post("/postReview", _phoneController.postReview);

router.get("/main", _pageController.getMainPageData);

/*profile page routes*/
router.get('/userinfo', _userPageController.sendSessionInfo);
router.post('/profile', _userPageController.showPage);
router.post('/changeProfile', _userPageController.changeProfile);
router.post('/changePassword', _userPageController.changePassword);
router.get('/userListing', _userPageController.getListing);
router.post('/changePhoneList', _userPageController.changePhoneList)

module.exports = router;
