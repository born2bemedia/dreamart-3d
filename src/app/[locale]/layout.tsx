import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'sonner';

import { Footer, Header } from '@/shared/ui/components';
import { LenisScrollProvider } from '@/shared/ui/kit';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

import { ThanksPopup } from '@/featured/thanks-popup/ui/ThanksPopup';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Dreamart 3D | Unleash Your Creativity with 3D Modeling, Animation & More',
  description:
    'Welcome to Dreamart 3D, where we turn your creative ideas into reality! Explore our 3D models, animations, and UI/UX design solutions designed to make your projects stand out.',
  openGraph: {
    title: 'Dreamart 3D | Unleash Your Creativity with 3D Modeling, Animation & More',
    description:
      'Welcome to Dreamart 3D, where we turn your creative ideas into reality! Explore our 3D models, animations, and UI/UX design solutions designed to make your projects stand out.',
    images: 'https://dreamart3d.com/images/meta.png',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={inter.variable}>
        <NextIntlClientProvider>
          <LenisScrollProvider>
            <Header />
            {children}
            <Footer />
          </LenisScrollProvider>
          <ThanksPopup />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
