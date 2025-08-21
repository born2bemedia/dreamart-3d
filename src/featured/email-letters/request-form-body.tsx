import { htmlTemplate } from './html-template';

export const requestFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div style="width: 595px; margin: 0 auto;">
        <header class="header">
          <img src="https://dreamart3d.com/images/email/header.png" alt="full-logo" width="595" height="110" />
        </header>
        <div class="wrapper">
          <div class="main">
            <p style="font-size: 24px; color: #717173; margin-bottom: 24px;">We Got Your Request! Time to Make Some Magic – Dreamart 3D</p>
            <p class="text" style="color: #717173; margin-bottom: 16px;">Dear ${username},</p>
            <p class="text" style="color: #717173; margin-bottom: 24px;">Thanks for choosing Dreamart 3D for your project! We’ve got your service request, and we’re already excited to dive into it. Our team is reviewing the details, and we’ll be reaching out soon to chat more about your vision.</p>
            <p style="color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 16px;">What’s Next?</p>
            <p class="text" style="color: #717173; margin-bottom: 16px;">We’ll be in touch shortly to make sure we customize our services to match your needs perfectly.</p>
            <p class="text" style="color: #717173; margin-bottom: 16px;">Got anything else you’d like to add? Don’t hesitate — we’re all ears and love hearing more about your big ideas!</p>
            <p class="text" style="color: #717173; margin-bottom: 24px;">Thanks again for trusting us with your creativity. Let’s get to work and make something awesome!</p>
            <p style="color: #fff; font-size: 20px; font-weight: 600;">Best, <br /><span style="color: #2583FF;">The Dreamart 3D Team</span></p>
          </div>
        </div>
        <div>
          <img src="https://dreamart3d.com/images/email/footer.png" alt="full-logo" width="595" height="130" />
        </div>
      </div>
    `,
    style: `      
      .main {
        border-radius: 24px;
        border: 1px solid #222325;
        background: #141517;
        padding: 24px;
      }

      .wrapper {
        background: #121316;
        padding: 16px;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
       
      .text {
        color: #717173 !important;
        font-size: 16px;
      }
    `,
  });
};
