const express = require('express');
const router = express.Router();

const jobSeekerRouter = require('./job_seeker');
const recruiterRouter = require('./recruiter');


router.use('/', jobSeekerRouter);

router.use('/', recruiterRouter);

module.exports = router;
