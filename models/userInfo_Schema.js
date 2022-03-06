const mongoose = require('mongoose');
var validate = require('mongoose-validator');

/**************** Custom Validation *****************/
var fullnameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between 3 and 50 characters'
    })
];

var usernameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 15],
        message: 'Name should be between 3 and 15 characters'
    })
];

// var emailValidator = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };
/*************** /Custom Validation *****************/

/**************** User Info Schema ****************/
const userInfo = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            validate: fullnameValidator
        },
        username: {
            type: String,
            required: true,
            validate: usernameValidator,
            unique: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            // validate: [emailValidator, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            // default: "",
            // validate: {
            //     validator: function(v) {
            //         return /\d{3}-\d{3}-\d{4}/.test(v);
            //     },
            //     message: props => `${props.value} is not a valid phone number!`
            // },
        },
        address: {
            type: String,
            default: "",
        },
        gender: {
            type: String,
            default: "male",
            enum: {
                values: ['male', 'female'],
                message: '{VALUE} is not supported'
            } 
        },
        role: {
            type: String,
            default: "user",
            enum: {
                values: ['user', 'admin'],
                message: '{VALUE} is not supported'
            } 
        },
        avatar: {
            type: String,
            default: "../imgs/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.png"
            // default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        },
        cv: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);  

const userInfos = mongoose.model("userInfos", userInfo);
module.exports = userInfos;