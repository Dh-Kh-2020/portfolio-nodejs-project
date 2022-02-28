const mongoose = require('mongoose');

const services_schema = new mongoose.Schema(
    {
        service_name: {
            type: String
        },
        service_description: {
            type: String
        },
        service_icon: {
            type: String,
            default: '<i class="fa-solid fa-handshake"></i>'
        },
        is_active: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

const services = mongoose.model('services', services_schema);
module.exports = services;