import { Router } from 'express';
const router = new Router();
import * as UserController from '../controllers/user.controller';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

import keys from '../config/keys';

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
// Load User model
import User from '../models/User';

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  console.log('ENTERING REGISTER BACKEND');
  console.log(req.body);
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      bmi: req.body.bmi,
      diet_type: req.body.diet_type,
      diet_preferences: req.body.diet_preferences,
    });
// Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

// Get one user by id
router.route('/profile/:id').get(UserController.getUser);

export default router;
