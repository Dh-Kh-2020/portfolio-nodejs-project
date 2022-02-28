const mongoose = require('mongoose');

const personal_info_Schema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            // trim: true,
            maxlength: 25,
        },
        username: {
            type: String,
            required: true,
            // trim: true,
            maxlength: 25,
            unique: true,
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
        },
        avatar: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        },
        role: {
            type: String,
            default: "user",
        },
        gender: {
            type: String,
            default: "male",
        },
        mobile: {
            type: String,
            // default: "",
        },
        address: {
            type: String,
            // default: "",
        },
        cv: {
            type: String,
        },
        is_active: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

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

const education_schema = new mongoose.Schema(
    {
        education: {
            type: String
        }
    }
);

const works_schema = new mongoose.Schema(
    {
        work_title: {
            type: String
        },
        work_info: {
            type: String
        },
        is_active: {
            type: Boolean
        }
    }
);

// module.exports = mongoose.model('personal_info', personal_info_Schema);
const personal_info = mongoose.model('personal_info', personal_info_Schema);
const skills = mongoose.model('skills', skills_schema);
const services = mongoose.model('services', services_schema);
const experience = mongoose.model('experience', experience_schema);
const education = mongoose.model('education', education_schema);
const works = mongoose.model('works', works_schema);
  
// Exporting our model objects
module.exports = {
    personal_info, skills, services, experience, education, works
}