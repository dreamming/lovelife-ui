import nodemailer from "nodemailer";

const from = "Welcome to dmz@gmail.com";
function setUp() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASWD
    }
  });
}

export function sendConfirmEmail(user) {
  const tranport = setUp();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to dmz",
    text: `Please Confirm Your Email
     ${user.generateConfirmationUrl()} `
  };
  tranport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const tranport = setUp();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to dmz",
    text: `Reset Your Password
     ${user.generateResetPasswordUrl()} `
  };
  tranport.sendMail(email);
}
