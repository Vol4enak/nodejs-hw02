const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;
// 25, 465, 2525;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 25,
  auth: {
    user: "vadim123144@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "lejob16889@muzitp.com",
//   from: "vadim123144@meta.ua",
//   subject: "test mail",
//   html: "<h1>PRIVEEET</h1>",
// };
// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));


  const sendEmail = async (data) => {
    const email = { ...data, from: "vadim123144@meta.ua" };
    await transport.sendMail(email);
    return true;
  };

  module.exports = sendEmail;