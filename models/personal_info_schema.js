const mongoose = require('mongoose');

const personal_info_Schema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            unique: true,
            // trim: true,
            maxlength: 25,
        },
        username: {
            type: String,
            required: true,
            // trim: true,
            maxlength: 25,
        },
        email: {
            type: String,
            required: true,
            // trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        // avatar: {
        //     type: String,
        //     default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        // },
        // role: {
        //     type: String,
        //     default: "user",
        // },
        gender: {
            type: String,
            default: "male",
        },
        // mobile: {
        //     type: String,
        //     // default: "",
        // },
        // address: {
        //     type: String,
        //     // default: "",
        // },
        // cv: {
        //     type: String,
        // },
        // is_active:{
        //     type: Boolean,
        //     default: true
        // }
    }
    // {
    //     timestamps: true
    // }
);

const personal_info = mongoose.model('personal_info', personal_info_Schema);
module.exports = personal_info;