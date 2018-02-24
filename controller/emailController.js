const nodemailer = require('nodemailer');
const emailTemplate = require('./../config');

let config = {}

config.password = 'quick2018';
config.sendAddr = 'vcemail2018@gmail.com';
config.receipt  = 'vestibularcidadao.vc@gmail.com';

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