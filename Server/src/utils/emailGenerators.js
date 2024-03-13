const jwt = require("jsonwebtoken");
require('dotenv').config()
const generateEmailUi = require("./messageUiGenerator");

const generateEmailValidationMessage = (email) => {
  const payload = {
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 600,
  });
  const message = {
    from: `SprintSnap <sprint_snap@company.com>`,
    to: email,
    subject: "Email Verification",
    html: generateEmailUi(
      "email verification",
      `http://localhost:5173/auth/verifyemail?token=${token}`
    ),
  };

  return message;
};

const generateResetPasswordMessage = (email) => {
  const payload = {
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 600,
  });
  const message = {
    from: `SprintSnap <sprint_snap@company.com>`,
    to: email,
    subject: "Reset Password",
    html: generateEmailUi(
      "reset password",
      `http://localhost:5173/auth/password/reset?token=${token}`
    ),
  };

  return message;
};
const generateInvitationEmail = (invitation,email, sender)=>{
  const message = {
    from: `SprintSnap <sprint_snap@company.com>`,
    to: email,
    subject: "Collaboration Invitation",
    html: generateEmailUi(
      "invitation collaborative",
      `http://localhost:5173/invitation/${invitation}/confirm`,
      sender
    ),
  };
  return message;
}
module.exports = {
  generateEmailValidationMessage,
  generateResetPasswordMessage,
  generateInvitationEmail,
};