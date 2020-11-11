const express = require('express');
const router = express.Router();
var cors = require('cors')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail.com',
    auth: {
        user: process.env.EMAIL, //replace with the email address
        pass: process.env.PASS //replace with the password
    },
    secure: true,
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

router.post('/send', cors(), (req, res, next) => {
    const name = req.body.name
    const subject = req.body.subject
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${process.env.EMAIL} \n subject: ${subject} \n message: ${message} `
    console.log(content)
    const mail = {
        from: name,
        to: process.env.EMAIL,
        subject: `${name}: ${subject}`,
        text: `${email},  ${message}`
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: err
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = router
