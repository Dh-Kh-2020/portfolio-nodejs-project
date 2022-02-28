const Users = require("../models/personal_info");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const authCtrl = {
    register: async (req, res) => {
      try {
        const { fullname, username, email, password, gender } = req.body;
  
        let newUserName = username.toLowerCase().replace(/ /g, "");
  
        const user_name = await Users.findOne({ username: newUserName });
        if (user_name) {
          return res.status(400).json({ msg: "This username is already taken." });
        }
  
        const user_email = await Users.findOne({ email });
        if (user_email) {
          return res
            .status(400)
            .json({ msg: "This email is already registered." });
        }
  
        if (password.length < 6) {
          return res
            .status(400)
            .json({ msg: "Password must be at least 6 characters long." });
        }
  
        const passwordHash = await bcrypt.hash(password, 12);
  
        const newUser = await Users.insertMany({
          fullname,
          username: newUserName,
          email,
          password: passwordHash,
          gender,
        });
  
        const access_token = createAccessToken({ id: newUser._id });
        const refresh_token = createRefreshToken({ id: newUser._id });
  
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/refresh_token",
          maxAge: 30 * 24 * 60 * 60 * 1000, //validity of 30 days
        });

        res.redirect('/');
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
      
    },
  };
  
  const createAccessToken = (payload) => {
    return jwt.sign(payload, 'itissecret', {
      expiresIn: "1d",
    });
  };
  
  const createRefreshToken = (payload) => {
    return jwt.sign(payload, 'itisalsosecret', {
      expiresIn: "30d",
    });
  };
  
  module.exports = authCtrl;