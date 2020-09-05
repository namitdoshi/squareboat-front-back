const Job_Seeker = require("../models/job_seeker");

exports.login_job_seeker = (req, res) => {
    console.log(1)
    Job_Seeker.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    })
    .then((jobSeeker) => {
        if (jobSeeker.email == req.body.email) {
            // req.session.loggedin = true;
            // req.session.email = req.body.email;
            return res.json({
                status:200,
                data: true,
                message: "Job seeker Logged in"
            });
        } else {
            return res.json({
                status:200,
                data: false,
                message: "Username or Password doesn't match!! Try Again.",
            });
        }
    })
};

exports.signup_job_seeker = (req, res) => {
    Job_Seeker.create({
        email: req.body.email,
        password: req.body.password,
    })
    .then((jobSeeker) => {
        return res.json({
            status: 200,
            message: "Job Seeker Sign up succesful",
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
        return res.json({
            status: 500,
            data: err,
            message: "Sign Up failed.",
        });
    });
};
