import type { Metadata } from 'next';

import { Hero, Services } from './components';

export const metadata: Metadata = {
  title: 'Moddle 3D Services | 3D Modeling, Animation, UI/UX, and More',
  description:
    'Explore the wide range of services we offer at Moddle 3D, from 3D modeling and animations to UI/UX design and video production. Let’s create something amazing!',
  openGraph: {
    title: 'Moddle 3D Services | 3D Modeling, Animation, UI/UX, and More',
    description:
      'Explore the wide range of services we offer at Moddle 3D, from 3D modeling and animations to UI/UX design and video production. Let’s create something amazing!',
    images: 'https://moddle3d.com/images/meta.png',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
}
