const transporter = require("../config/mailing.config");
module.exports = async (messageOptions) => {
    const message = {
      from: `Allo Media ossamakahrbaq@dj.col`,
      to: messageOptions.email,
      subject: messageOptions.subject,
      html: `<h1>hello</h1>`,
    };
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
}
