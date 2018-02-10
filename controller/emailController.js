const nodemailer = require('nodemailer');
const config = require('./../config');


var smtpTransport = nodemailer.createTransport({
    service: config.service,
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
        html: '<h1> '+ name + ' | ' + email + '<br/> ' + message + '</h1>'
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