const express = require('express');
const router = express.Router();

const controller_recruiter = require('../controller/controller_recruiter');


router.post('/login-recruiter', controller_recruiter.login_recruiter);
router.post('/signup-recruiter', controller_recruiter.signup_recruiter);

module.exports = router;