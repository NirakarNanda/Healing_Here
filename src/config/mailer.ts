import nodemailer from 'nodemailer';

export let transporter = nodemailer.createTransport({
  // host: "sandbox.smtp.mailtrap.io",
  // port: 2525,
    host: process.env.MAIL_HOST,
    auth: {
      user: `${process.env.MAIL_USER}`,
      pass: `${process.env.MAIL_PASS}`
    }
});