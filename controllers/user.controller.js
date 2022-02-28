const res = require('express');
const personal_info = require('../models/personal_info_schema');

//create and save new user
exports.create = (req, res)=>{
    console.log(req.body);
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return
    }

    // create new user
    const user = new personal_info({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender, 
        // is_active: req.body.is_active
    })
    
    // save user in mongoDB
    user.save((error, data) => {
        if (error)
        console.log(error.message);
        else
        console.log("Creating successfull")
    })
    // user
    //     .save(user)
    //     .then(data => {
        //         res.send(data);
        //         console.log("Creating successfull")
        //     })
        //     .catch(err =>{
            //         res.status(500).send({
                //             message: err.message || "Some error occured while creating a document"
                //         });
                //     });
                
    console.log('hello');
}
        
//retrieve and return user
exports.find = (req, res)=>{
    // personal_info.find()
    // .then(user => {
    //     res.send(user)
    // })
    // .catch(err =>{
    //     res.status(500).send({
    //         message: err.message || "Error occured while retrieving user information"
    //     });
    // });
}

// update user info by id
exports.update = (req, res)=>{

}

// Unactivate a user
exports.delete = (req, res)=>{

}

// ############################################
// const Users = require("../models/personal_info_schema");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { default: mongoose } = require("mongoose");

// const userCtrl = {
//     create: async (req, res) => {
//       try {
//         const { fullname, username, email, password, gender } = req.body;
        
// //         fullname: req.body.fullname,
// //         username: req.body.username,
// //         email: req.body.email,
// //         password: req.body.password,
// //         gender: req.body.gender, 
  
//         let newUserName = username.toLowerCase().replace(/ /g, "");
  
//         const user_name = await Users.findOne({ username: newUserName });
//         if (user_name) {
//           return res.status(400).json({ msg: "This username is already taken." });
//         }
  
//         const user_email = await Users.findOne({ email });
//         if (user_email) {
//           return res
//             .status(400)
//             .json({ msg: "This email is already registered." });
//         }
  
//         if (password.length < 6) {
//           return res
//             .status(400)
//             .json({ msg: "Password must be at least 6 characters long." });
//         }
  
//         const passwordHash = await bcrypt.hash(password, 12);
  
//         const newUser = await Users.insertMany({
//           fullname,
//           username: newUserName,
//           email,
//           password: passwordHash,
//           gender,
//         });
  
//         const access_token = createAccessToken({ id: newUser._id });
//         const refresh_token = createRefreshToken({ id: newUser._id });
  
//         res.cookie("refreshtoken", refresh_token, {
//           httpOnly: true,
//           path: "/refresh_token",
//           maxAge: 30 * 24 * 60 * 60 * 1000, //validity of 30 days
//         });

//         res.redirect('/dashboard');
//       } catch (err) {
//         return res.status(500).json({ msg: err.message });
//       }
      
//     },
//   };
  
//   const createAccessToken = (payload) => {
//     return jwt.sign(payload, 'itissecret', {
//       expiresIn: "1d",
//     });
//   };
  
//   const createRefreshToken = (payload) => {
//     return jwt.sign(payload, 'itisalsosecret', {
//       expiresIn: "30d",
//     });
//   };
  
//   module.exports = userCtrl;