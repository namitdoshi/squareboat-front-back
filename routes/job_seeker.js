const express = require('express');
const router = express.Router();

const controller_job_seeker = require('../controller/controller_job_seeker');


router.post('/login-job-seeker', controller_job_seeker.login_job_seeker);
router.post('/signup-job-seeker', controller_job_seeker.signup_job_seeker);

module.exports = router;