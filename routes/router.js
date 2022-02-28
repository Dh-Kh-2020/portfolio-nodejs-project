const express = require('express');
const rout = express.Router();
// const ap = express();
const services = require('../services/render');
const userCtrl = require('../controllers/user.controller');
// const bodyparser = require('body-parser');

// ap.use(bodyparser.urlencoded({ extended: true }));

rout.get('/signup', services.signup);

rout.get(['/', 'index', 'home'], services.homeRoutes);

rout.get('/dashboard', services.dashboard);

rout.get('/update_user',services.update_user);

rout.get('/login', services.login);

rout.get('/skills', services.skills);

rout.get('/experience', services.experience);

rout.get('/education', services.education);

rout.get('/course', services.course);

rout.get('/*', services.notFound);

// ===== API route =====
// Rout for personal_info_schema
rout.post('/signup', userCtrl.create);

// rout.get('/signup/api/users', userCtrl.find);
// rout.get('/signup/api/users/:id', userCtrl.update);
// rout.get('/signup/api/users/:id', userCtrl.delete);

module.exports = rout;

// ###################################
// const rout = require('express').Router();
// const userCtrl = require('../controllers/user.controller');
// // const express = require('express');
// // const rout = express.Router();
// // // const ap = express();
// // const services = require('../services/render');
// // const userCtrl = require('../controllers/user.controller');
// // var form = formidable.IncomingForm();

// rout.get('/signup', (req, res)=>{
//     // form.parse(req, function(err,fileds,files){
//     //     try {
//     //         const { fullname, username, email, password, gender } = req.body;
//     //     }
//     // })
//     res.render('signup');
// });

// rout.post('/signup', userCtrl.create);


// module.exports = rout;