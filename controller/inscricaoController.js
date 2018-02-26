const nodemailer = require('nodemailer');
const emailInscricao = require('./../config');

let config = {}

var dataList = _.map(list, function(value, key){
    return [key, value];
});

config.password = 'quick2018';
config.sendAddr = 'vcemail2018@gmail.com';
config.receipt  = data.email

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
    let id = data.id;
    let name    = data.name;
    let email   = data.email;
    let document = data.document;
    let tel   = data.tel;
    
    smtpTransport.sendMail({
        from: config.sendAddr,
        to: config.receipt,
        subject: 'Confirmação de Inscrição',
        html: emailTemplate.emailInscricao(id, name, email, document, tel, subject),
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