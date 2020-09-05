const Recruiter = require("../models/recruiter");

exports.login_recruiter = (req, res) => {
    Recruiter.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    })
    .then((recruiter) => {
        if (recruiter.email == req.body.email) {
            // req.session.loggedin = true;
            // req.session.email = req.body.email;
            return res.json({
                status:200,
                data: true,
                message: "recruiter Logged in"
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

exports.signup_recruiter = (req, res) => {
  Recruiter.create({
        email: req.body.email,
        companyName: req.body.companyName,
        password: req.body.password,
    })
    .then((recruiter) => {
        return res.json({
            status: 200,
            message: "recruiter Sign up succesful",
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
        return res.json({
            status: 500,
            data: err,
            message: "recruiter Sign Up failed.",
        });
    });
};
