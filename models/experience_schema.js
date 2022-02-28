const mongoose = require('mongoose');

const experience_schema = new mongoose.Schema(
    {
        exper_description: {
            type: String
        },
        exper_startDate: {
            type: Date
        },
        exper_endtDate: {
            type: Date
        }
    },
);

const experience = mongoose.model('experience', experience_schema);
module.exports = experience;