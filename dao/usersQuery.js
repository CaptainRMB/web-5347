let usersModel = require("../dao/usersModel");
const mongoose = require("mongoose");
const phonesModel = require("./phonesModel");
const {ObjectID: ObjectId} = require("mongodb");

module.exports = {
    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            usersModel.find({
                email: email
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                })
        })
            .catch(err => {
                console.log(err);
                console.log(err.code);
                return err;
            })
    },

    login(email, password) {
        return new Promise((resolve, reject) => {
            usersModel.find({
                email: email,
                password: password
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err);
                })
        })
            .catch(err => {
                console.log(err);
                console.log(err.code);
                return err;
            })
    },

    getAllUsers() {
        return new Promise((resolve, reject) => {
            usersModel.find({})
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    signUp(email, password, firstname, lastname){
        return new Promise((resolve,reject)=>{
                usersModel.create({
                    email:email,
                    password:password,
                    firstname:firstname,
                    lastname:lastname
                },function (err,small){
                    if (err){
                        reject(err);
                    }
                    else {
                        resolve(true);
                    }
                })
        })
            .catch(err => {
                console.log(err);
                console.log(err.code);
                return err;
            })
    },


    getUserByID(id) {
        return new Promise((resolve, reject) => {
            usersModel.find({
                _id: id
            })
                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    getUsersNamesIDs() {
        return new Promise((resolve, reject) => {
            usersModel
                .find({})
                .select({
                    _id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                })

                .then(doc => {
                    resolve(doc);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}









