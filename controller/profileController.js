/**
 * server.profile.controller.js
 * This controller module exposes six methods:
 *  - showPage is used for displaying the profile web page.
 *  - sendSessionInfo is used for sending user personal information from session.
 *  - changeProfile is used for changing user personal information in mongodb. Current password authentication is implemented.
 *  - changePassword is used for user changing password in mongodb. Current password authentication is implemented.
 *  - getListing is used fot getting phones related to users.
 *  - changePhoneList is used for changing the phone list that related to the user. The functions of
 *  "remove", "add", "disable", "enable" are included
 */
const express = require('express');
const mongoose = require('mongoose');
const Phonelisting = require("../dao/phonelisting.js");
const Userinfo = require("../dao/userinfo");

module.exports.showPage = function (req, res) {
    res.render('user.ejs');
};


module.exports.sendSessionInfo = function (req, res) {
    sess = req.session
    res.json({
        firstname: sess.firstname,
        lastname: sess.lastname,
        email: sess.email
    })
};

module.exports.changeProfile = async function (req, res) {
    /*Information for verify identity*/
    id = req.session.sid;
    currentEmail = req.session.email
    hashedPassword = req.body.password;

    /*The changed profile information*/
    changedEmail = req.body.email;
    changedFirstname = req.body.firstname;
    changedLastname = req.body.lastname;

    //Verify the password
    //Then change the profile in database
    result = await Userinfo.findbyUserid(id)
    if (hashedPassword == result['password']) {
        result = await Userinfo.findUserEmail(changedEmail)
        if (result == "" || result[0]['email'] == currentEmail) {
            await Userinfo.UpdateUserById(id, changedEmail, changedFirstname, changedLastname)
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

module.exports.changePassword = async function (req, res) {
    /*Info for verify identity*/
    id = req.session.sid;
    hashedCurrentPwd = req.body.currentPwd;
    hashedNewPwd = req.body.newPwd;

    //Verify the password
    //Then change the profile in database
    result = await Userinfo.findbyUserid(id)
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
};

module.exports.getListing = async function (req, res) {
    sellerId = req.session.sid;
    /*Get all phone list selled by sellerID*/
    user_related_phonelist = await Phonelisting.relatedPhoneList(sellerId);
    res.json(user_related_phonelist);
};

module.exports.changePhoneList = async function (req, res) {
    sellerId = req.session.sid;

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

};


