import type { Metadata } from 'next';

import { GetInTouch } from './components/GetInTouch/GetInTouch';

export const metadata: Metadata = {
  title: 'Get in Touch with Moddle 3D | Let’s Create Something Amazing Together',
  description:
    'Have a question or want to work with us? Contact us today and let’s turn your ideas into reality!',
  openGraph: {
    title: 'Get in Touch with Moddle 3D | Let’s Create Something Amazing Together',
    description:
      'Have a question or want to work with us? Contact us today and let’s turn your ideas into reality!',
    images: 'https://moddle3d.com/images/meta.png',
  },
};

export default function ContactsPage() {
  return <GetInTouch />;
}
