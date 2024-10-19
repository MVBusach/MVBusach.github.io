//Servidor express
import express from 'express'
const app = express()

//cors
import cors from 'cors'
app.use(cors())

//JSON parser para express
import bodyParser from 'body-parser'
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

//configurar email
const nodemailer = require('nodemailer');
//Configuración de SMTP
let transportParams = {
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secureConnection : false,
    auth: {
       user: process.env.EMAIL_ADDRESS,
       pass: process.env.EMAIL_PASSWORD
    }
}
let smtpTransport = nodemailer.createTransport(transportParams);


app.get('/', (req, res) => {
    // Validate, sanitize and send
    console.log('API Funcionando')
    res.send('API Funcionando');
})

app.post('/contact',(req, res)=>{
    console.log('/contact')
    console.log('params', transportParams)
    //console.log(req.body)
    
    //Valores del mensaje
    let text = req.body.message || 'Mensaje de prueba'
    let project = req.body.project
    let contactEmail = req.body.email
    let contactName = req.body.name
    let emailConfirm = req.body.emailConfirm
    if(emailConfirm!="" || emailConfirm.length != 0 ){
      console.log(`Intento de SPAM ingresando email: ${emailConfirm}`)
      res.end('error');
      return false;
    }

    let subjectText = `Solicitud de uso para ${project}`;
    let messageText = `
    ${contactName}, con su email de contacto ${contactEmail} ha realizado una solicitud de uso para la aplicación ${project}.
    Su intención de uso es la siguiente:
    ${text}
    `;

    var email = {
        from: process.env.EMAIL_FROM, // Sender address
        to: process.env.EMAIL_TO,         // List of recipients
        subject: subjectText || 'Correo de prueba', // Subject line
        text: messageText // Plain text body
    };
    smtpTransport.sendMail(email, function(err, info) {
        if (err) {
          console.log('ERROR', err)
          res.end('error');
        } else {
          console.log(info);
          res.send(`Mensaje enviado: ${messageText}`);
        }
    });
    
})

export default {
  path: '/api/',
  handler: app
}
