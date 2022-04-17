let usersModel = require("../dao/usersModel");
const mongoose = require("mongoose");

module.exports = {
    getUserByEmail(email) {
        return new Promise((resolve,reject)=>{
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
            .catch(err =>{
            console.log(err);
            console.log(err.code);
            return err;
        })
    },

    getAllUsers() {
        return new Promise((resolve,reject)=>{
            usersModel.find({

            })
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
                    } else {
                        resolve(true);
                    }
                })
        })
            .catch(err =>{
                console.log(err);
                console.log(err.code);
               return err;
            })
    }
}









