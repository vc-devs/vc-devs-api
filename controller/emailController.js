const nodemailer     = require('nodemailer');
const emailTemplates = require('./../emailTemplates');
const _              = require('lodash');

let config = {}
config.password = 'quick2018';
config.sendAddr = 'vcemail2018@gmail.com';

const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL  
    auth: {
        user: config.sendAddr,
        pass: config.password
    }
});

function dataList(list) {
    return _.map(list, function(value, key){
        return [key, value];
    })
};

function contact(req, res, next) {
    let data    = req.body;
    let subject = data.subject;
    let email   = data.email;
    let name    = data.name;
    let message = data.message;

    config.receipt  = 'vestibularcidadao.vc@gmail.com';
    
    sendEmail(emailTemplates.emailTemplate(name,email,message,subject));    

    res.json({
        'status': 'success'
    });
};

function inscricao(req, res, next) {
    
    let data = dataList(req.body);
    
    config.receipt  = req.body.email;

    sendEmail(emailTemplates.emailInscricao(data));

    res.json({
        'status': 'success'
    });
};

function sendEmail(html){
    smtpTransport.sendMail({
        from: config.sendAddr,
        to: config.receipt,
        subject: 'Confirmação de Inscrição',
        html: html,
    }, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Mensagem enviada: " + response.status);
        }
    });

}
module.exports = {
    contact   : contact,
    inscricao : inscricao,
};