var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "condepedro968@gmail.com", //replace with the email address
        pass: "Chaima1999!?" //replace with the password
    }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    const mail = {
        from: name,
        to: email,
        subject: subject,
        text: message
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = router
