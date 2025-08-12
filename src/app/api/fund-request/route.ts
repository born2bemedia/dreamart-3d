import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type FundRequestData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as FundRequestData;
    const { firstName, lastName, email, phone, message } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'Nueva solicitud',
      html: `
        <h2>Nueva solicitud</h2>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
      `,
    };

    // Send email
    await sgMail.send(msg);

    /*const clientMSG = {
      to: email, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'Tanzora Request Received',
      html: `
      `,
    };

    await sgMail.send(clientMSG);*/

    return NextResponse.json({ message: 'Fund access request sent successfully.' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send fund access request.', error: errorMessage },
      { status: 500 }
    );
  }
}
