// // const express = require('express');
// // const mongoose = require('mongoose');

// // // // cors provides Express middleware to enable CORS (Cross-Origin Resource Sharing (CORS))
// // // const cors = require("cors");

// // const user = require("./models/personal_info");
// // // const bcrypt = require('bcrypt');
// // // const authCtrl = require('./controllers/authCtrl');
// // const app = express();
// // // app.use(cors(corsOptions));

// // // parse requests of content-type - application/json
// // app.use(express.json());

// // // const http = require('http').createServer(app);

// // app.set('view engine','ejs');
// // app.use(express.static('public'));

// // // parse requests of content-type - application/x-www-form-urlencoded
// // app.use(express.urlencoded({ extended: true }));

// // // const URI = process.env.MONGODB_URL_test;
// // mongoose.connect("mongodb://localhost:27017/personalPortfolio");
// // // {  
// // //     useNewUrlParser: true,  
// // //     useUnifiedTopology: true,  
// // //     useFindAndModify: false
// // // }

// // // app.use('/', require('./routes/authRouter'));
// // // // app.use('/dashboard', require('./routes/skillRouter'));

// // // ======= Routing =======
// // app.get(['/', '/home', '/index'], (req, res)=>{
// //     res.render('index', {title: 'Dhoha Alkhorasani | Personal Profile'});
// // });

// // app.get('/dashboard', (req, res)=>{
// //     res.render('dashboard', {title: 'login to dashboard'});
// //     // if ()
// // });

// // app.get('/login', (req, res)=>{
// //     res.render('login', {title: 'login to dashboard'});
// // });

// // app.get('/signup', (req, res)=>{
// //     res.render('signup', {title: 'signup'});
// // });

// // app.post('/signup', async (req, res)=>{
// //     const instance = new user({
// //             id: mongoose.Types.ObjectId,
// //             fullname: req.body.fullname,
// //             username: req.body.username,
// //             email: req.body.email,
// //             password: req.body.password,
// //             gender: req.body.gender,
// //         })
// //         await instance.save((error, result) => {
// //                 if (error)
// //                     console.log(error.message);
                
// //         });
// //     res.redirect('/dashboard');
// // });

// // // ======= Start Lestening =======
// // const port = process.env.PORT || 8000;
// // app.listen(port, () => {
// //     console.log("Server Start at: ", port);
// // });

// // ##############################################################

// // const express = require("express");
// // const multer  = require('multer');
// // const {default: mongoose} = require('mongoose');
// // const User = require('./models/personal_info');
// // const app = express();

// // app.set('view engine','ejs');
// // app.use(express.static('public'));

// // mongoose.connect('mongodb://localhost:27017/personalPortfolio');

// // app.post('/signup', (req, res)=>{
// //     const instance = new User({
// //         id: mongoose.Types.ObjectId,
// //         fullname: req.body.fullname,
// //         username: req.body.username,
// //         email: req.body.email,
// //         password: req.body.password,
// //         gender: req.body.gender,
// //         })
// //         instance.save((error, result) => {
// //             console.log("SUCCESSFULL");

// //                 if (error)
// //                     console.log(error.message);
// //                 else
// //                     console.log("SUCCESSFULL");
// //         });
// //     res.redirect('/dashboard');
// // });

// // // =================== ROUTING ======================
// // app.get(['/', '/home', '/index'], (req, res)=>{
// //     res.render('index', {title: 'Dhoha Alkhorasani | Personal Profile'});
// // });

// // app.get('/dashboard', (req, res)=>{
// //     res.render('dashboard', {title: 'login to dashboard'});
// //     // if ()
// // });

// // app.get('/login', (req, res)=>{
// //     res.render('login', {title: 'login to dashboard'});
// // });

// // app.get('/signup', (req, res)=>{
// //     res.render('signup', {title: 'signup'});
// // });

// // // ======= Start Lestening =======
// // const port = process.env.PORT || 8000;
// // app.listen(port, () => {
// //     console.log("Server Start at: ", port);
// // });

// // #################################################################

// // const express = require('express');
// // const {default: mongoose} = require('mongoose');
// // const Users = require("./models/personal_info");
// // const bcrypt = require('bcrypt');
// // const authCtrl = require('./controllers/auth.controller');
// // const app = express();
// // const http = require('http').createServer(app);


// // app.set('view engine','ejs');
// // app.use(express.static('public'));

// // app.use(express.urlencoded());

// // const URI = process.env.MONGODB_URL_test;
// // mongoose.connect("mongodb://localhost:27017/personalPortfolio");

// // app.use('/', require('./routes/auth.routes'));
// // // app.use('/dashboard', require('./routes/skillRouter'));

// // app.get(['/', '/home', '/index'], (req, res)=>{
// //     res.render('index', {title: 'Dhoha Alkhorasani | Personal Profile'});
// // });

// // const port = process.env.PORT || 8000;
// // app.listen(port, () => {
// //     console.log("Listening on ", port);
// // });

// // #########################################################################
// const express = require("express");
// const cors = require("cors");
// const app = express();
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// // simple route
// app.get(["/"], (req, res) => {
//   res.render('index');
// });
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// #############################################################
// #############################################################

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

app.use(express.json());

// parse request to body-parcer
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//set view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// loading routes
app.use('/', require('./routes/router'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});