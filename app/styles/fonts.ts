import { Montserrat, Noto_Sans, Rubik } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  variable: '--font-montserrat',
  display: 'fallback',
  // preload: true,
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-rubik',
  display: 'swap',
});

export { montserrat, noto_sans, rubik };
