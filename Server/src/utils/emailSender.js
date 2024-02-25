const transporter = require("../config/mailing.config");
module.exports = async (messageOptions) => {
    
  transporter.sendMail(messageOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
}
