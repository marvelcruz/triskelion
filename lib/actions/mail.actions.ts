'use server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { z } from 'zod';
import { formSchema } from '@/components/Contact';

const { EMAIL: email, PASSWORD: password } = process.env;

export const sendMail = async ({
  name: userName,
  email: userEmail,
  message: userMessage,
}: z.infer<typeof formSchema>) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: email,
    // cc: userEmail, // send carbon copy
    subject: `Message from ${userName} - ${userEmail}`,
    text: userMessage,
  };

  const sendMailPromise = () => {
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error) => {
        if (!error) {
          resolve('Email sent.');
        } else {
          reject(error.message);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return JSON.stringify({ sent: true });
  } catch (error) {
    return JSON.stringify({ sent: false });
  }
};
