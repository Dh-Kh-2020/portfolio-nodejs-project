const express = require('express');
const rout = express.Router();
const userCtrl = require('../controllers/userCtrl');

rout.get(['/', '/home', '/index'], (req, res)=>{
    res.render('index', {title: 'Dhoha Alkhorasani | Personal Portfolio'});
})

rout.get('/signup', (req, res)=>{
    res.render('signup');
})

rout.get('/dashboard', (req, res)=>{
    res.render('dashboard');
})

rout.get('/skills', (req, res)=>{
    res.render('skills');
});

rout.get('/*', (req, res)=>{
    res.status(404).render('404');
})

// ===== API route =====
// Rout for singup page to enter registing data to userInfo_Schema
rout.post('/signup', userCtrl.create);
rout.get('/signup', userCtrl.find);
// rout.put('/signup/:id', userCtrl.update);
// rout.delete('/signup/:id', userCtrl.delete);

module.exports = rout;