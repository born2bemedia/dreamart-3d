'use server';

import sgMail from '@sendgrid/mail';

import { ADMIN_EMAIL, FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { RequestFormSchema } from '../model/schema';

import { requestFormBody } from '@/featured/email-letters/request-form-body';

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendContactForm = async (data: RequestFormSchema) => {
  const { email, firstName, lastName, phone, message } = data;

  // const response = await fetch(`/api/contact`, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });

  const msg = {
    to: ADMIN_EMAIL,
    from: FROM_EMAIL,
    subject: `New Contact Request`,
    html: `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
  };

  const userMsg = {
    to: email,
    from: FROM_EMAIL,
    subject: `We Got Your Request! Time to Make Some Magic – Dreamart 3D`,
    html: requestFormBody({ username: firstName }),
  };

  await sgMail.send(msg);
  await sgMail.send(userMsg);

  return {
    success: true,
  };
};
