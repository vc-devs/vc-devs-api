const nodemailer = require('nodemailer');
const emailTemplate = require('./../config');

let config = {}

config.password = '52021180';
config.sendAddr = 'marcio.hsdl@gmail.com';
config.receipt  = 'marcio.lima@mangue3.com';

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL  
    auth: {
        user: config.sendAddr,
        pass: config.password
    }
});


function sendMail(req, res, next) {
    let data    = req.body;
    let subject = data.subject;
    let email   = data.email;
    let name    = data.name;
    let message = data.message;
    
    smtpTransport.sendMail({
        from: config.sendAddr,
        to: config.receipt,
        subject: subject,
        html: emailTemplate.emailTemplate(name, email, message, subject),
    }, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mensagem enviada: " + response.message);
        }
    });

    res.json({
        'status': 'success'
    });
};


module.exports = {
    sendMail: sendMail,
};