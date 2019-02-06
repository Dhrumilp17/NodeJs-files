var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xyz@gmail.com',
    pass: 'abcde'
  }
});

var mailOptions = {
  from: 'xyz@gmail.com',
  to: 'pqr@gmail.com',
  subject: 'Testing',
  text: 'Recieved message'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});