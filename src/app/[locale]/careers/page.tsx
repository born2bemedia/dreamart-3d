import type { Metadata } from 'next';

import { ApplyForm, Hero, OpenJobs, Perks } from './components';

export const metadata: Metadata = {
  title: 'Join the Dreamart 3D Team | Creative Careers in 3D Design & Animation',
  description:
    'Ready to be part of something amazing? Check out our open positions at Dreamart 3D and join a team that’s passionate about creativity, innovation, and fun!',
  openGraph: {
    title: 'Join the Dreamart 3D Team | Creative Careers in 3D Design & Animation',
    description:
      'Ready to be part of something amazing? Check out our open positions at Dreamart 3D and join a team that’s passionate about creativity, innovation, and fun!',
    images: 'https://dreamart3d.com/images/meta.png',
  },
};

export default function Careers() {
  return (
    <main>
      <Hero />
      <Perks />
      <OpenJobs />
      <ApplyForm />
    </main>
  );
}
