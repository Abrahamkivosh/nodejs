const nodemailer = require('nodemailer')
const html = require('./cores.js')
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "",
      pass: ""
    }
  });
  var mailOptions = {
    from: 'abrahamkivosh@gmail.com',
    sender:"info@lagaster.org",
    to: 'manono@lagaster.org',
    cc: 'abraham@lagaster.org',
    replyTo:"admin@lagaster.org",
    references: ["Beautiful world", "Learning more"],
    subject: 'Sending Email using Node.js',
    text: 'Please find attachment of the logo',
    html: html.htmlRaw(),
    attachments: [
      {
        filename: "Logo.png",
        path: '/home/kivosh/Documents/projects/learn/js/nodejs/avatar.png'
      }
    ]

  };
  
  transport.sendMail(mailOptions,(error, info)=>{
    if (error) {
        console.error(error)
    } else {
        console.info("Email sent : ")
        console.info(JSON.stringify(info.response))
    }
  })