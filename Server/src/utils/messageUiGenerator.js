const generateEmailUi = (subject, url) => {
  let buttonContent = "";
  let message;
  switch (subject) {
    case "email verification":
      message = `Thank you for registering with
        <span style="font-weight: 600; color:rgb(115, 115, 255) ;">SprintSnap</span>! To complete your
        registration and verify your email address, please click on the
        following button`;
      buttonContent = "verify your email";
      break;
    case "reset password":
      message = `
        Thank you for initiating the password reset process for your
        <span style="font-weight: 600; color:rgb(115, 115, 255) ;">SprintSnap</span> account! To proceed with resetting your password, please click the button below`;
      buttonContent = "reset your password";
      break;
    default:
      break;
  }

  let htmlMessage = `
            <div>
              <h1>
                SprintSnap
                (<span style="font-size:1.3em;">${subject}</span>)
              </h1>
              <p>
                ${message}
              </p>
              <a href="${url}">
                <button style="padding: 1em; background: blue; border-radius: 25px; color:white;">${buttonContent}</button>
              </a>
            </div>

    `;
  return htmlMessage;
};

module.exports = generateEmailUi;
