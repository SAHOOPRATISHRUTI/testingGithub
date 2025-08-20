const { transporter, mailOptions } = require("../emailSetUp/mailSetup");
const EmailLogs = require("../models/emailLogsModel");
const sendEmail = async (
  email,
  emailType,
  emailSubject,
  mailData,
  attachments
) => {
  const mailOptionsInfo = {
    from: mailOptions.from,
    to: email,
    subject: emailSubject,
    html: mailData,
    attachments: attachedFileDetails,
  };
  const isSucess = await transporter.sendMail(mailOptions);

  const emailLogData = {
    emailType,
    emailFrom: mailOptions.from,
    emailTo: email,
    subject: emailSubject,
    body: mailData,
    status: isSucess.accepted.length !== 0 ? "SUCCESS" : "FAIL",
  };

  return await saveEmailLogs(emailLogData);
};

const saveEmailLogs = async (emailData) => {
  const emailLogData = new EmailLogs(emailData);
  return await emailLogData.save();
};

module.exports = {
  sendEmail,
  saveEmailLogs,
};
