const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/user");

const passport = require("passport");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    User.findOne({ username })
    .then(function(existingUser){
        if (existingUser) {
                passport.authenticate('local')(req, res, () => {
                  const userData = {
                    _id: existingUser._id,
                  }
                  return res.status(200).json({ message: 'Login successful' , user: userData });
                });
              } 
        else {
                User.register(
                  new User({ username }),
                  password,
                  (err, newUser) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).json({ error: 'Registration failed' });
                    }
          
                    passport.authenticate('local')(req, res, () => {
                      const userData = {
                        _id: newUser._id,
                      }
                      return res.status(200).json({ message: 'Registration successful', user: userData });
                    });
                  }
                );
              }
    })
    .catch(function(err){
        console.error(err);
        return res.status(500).json({ error: 'An error occurred' });
    })
      
 });
  

router.get('/logout', (req, res) => {
    req.logout(); 
    res.status(200).json({ message: 'Logout successful' });
  });

module.exports = router;
