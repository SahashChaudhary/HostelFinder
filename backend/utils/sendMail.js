const nodemailer = require("nodemailer");

module.exports = async (email, subject, otp) => {
  console.log(email, subject, text);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Kookieraj@gmail.com",
        pass: "wafvdlxjgvapryog",
      },
    });

    await transporter.sendMail({
      from: "Kookieraj@gmail.com", // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: "Reset your password.", // plain text body
      html: `<h>Your otp ${otp}</h1> `, // html body
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
