import { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";
const authAdmin = {
  email: "tuanva@bestpicktechnology.com",
  pass: "Tuan@1604",
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: authAdmin.email,
      pass: authAdmin.pass,
    },
    // tls: {
    //   ciphers: "SSLv3",
    // },
  });

  const { name, email, message } = req.body;

  if (!message || !email) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  // https://nodemailer.com/message/#common-fields
  const mailData = {
    from: email,
    to: authAdmin.email,
    subject: `Message from ${name || email}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || "Something went wrong" });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: "Message sent!", body: req.body });
      }
    });
  });

  return;
};

export default handler;
