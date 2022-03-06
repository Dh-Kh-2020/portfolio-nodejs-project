const DB = require('../DB/connection');

const userAuth = new DB.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    remember: {
        type: String,
        required: true,
        default: 'off'
    },
    verified: {
        type: Boolean,
        default: false
    },

    is_active: Boolean
});

module.exports = DB.model("userAuth", userAuth);