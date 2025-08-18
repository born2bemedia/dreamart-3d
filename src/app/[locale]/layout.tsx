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
  title: {
    template: '%s | DreamArt 3D',
    default: 'DreamArt 3D',
  },
  description: '',
  openGraph: {
    title: {
      template: '%s | DreamArt 3D',
      default: 'DreamArt 3D',
    },
    description: '',
    //images: 'https://tanzora.io/images/meta.png',
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
