require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

 const sendRegistrationEmail = async (userEmail, userName) => {
  const subject = 'Welcome to Our App';
  const text = `Hello ${userName},\n\nWelcome to our app! We're excited to have you on board.`;
  const html = `
    <p>Hello ${userName},</p>
    <p>Welcome to our app! We're excited to have you on board.</p>
  `;

  await sendEmail(userEmail, subject, text, html);
}

const sendTransactionEmail = async (userEmail, userName, amount, toAccount) => {
  const subject = 'Transaction Alert';
  const text = `Hello ${userName},\n\nAn amount of ${amount} has been debited from your account.`;
  const html = `
    <p>Hello ${userName},</p>
    <p>An amount of ${amount} has been debited from your account.</p>
    <p>To Account: ${toAccount}</p>
  `;  

  await sendEmail(userEmail, subject, text, html);
}

const sendTransactionFailedEmail = async (userEmail, userName, amount , toAccount) => {
  const subject = 'Transaction Failed Alert';
  const text = `Hello ${userName},\n\nAn attempt to debit an amount of ${amount} from your account has failed.`;
  const html = `
    <p>Hello ${userName},</p>
    <p>An attempt to debit an amount of ${amount} from your account has failed.</p>
    <p>To Account: ${toAccount}</p>
  `;
  await sendEmail(userEmail, subject, text, html);
}

module.exports = {transporter, sendEmail, sendRegistrationEmail, sendTransactionEmail, sendTransactionFailedEmail};