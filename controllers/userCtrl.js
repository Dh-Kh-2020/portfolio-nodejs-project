var formidable = require('formidable');
const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
const userInfo = require('../models/userInfo_Schema');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return
    }

    const user = new userInfo({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        address: req.body.address,
        gender: req.body.gender,
        role: req.body.role
    })

    user.save(user)
        .then(data => {
            res.redirect('/dashboard');
            console.log("Creating successfull")
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some error occured while creating a document"});
            console.log(req.body);
        });
}

exports.find = (req, res)=>{
    userInfo.findOne()
        .then(data => {
            
        })
}

exports.update = (req, res)=>{

}

exports.delete = (req, res)=>{

}