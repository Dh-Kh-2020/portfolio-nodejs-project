const mongoose = require('mongoose');

const skills_schema = new mongoose.Schema(
    {
        about: {
            type: String,
            required: true
        },
        skills: [
            {
                type: String,
                required: true
            }
        ]
    },
    {
        timestamps: true
    }
);

const skills = mongoose.model('skills', skills_schema);
module.exports = skills;