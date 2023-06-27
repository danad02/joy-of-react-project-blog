import React from 'react';
import { Work_Sans, Overpass_Mono } from 'next/font/google';
import clsx from 'clsx';
import { cookies } from 'next/headers';

import { generateThemeStyleObject } from '@/helpers/theme-helpers';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Overpass_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  const cookieStore = cookies();
  const savedTheme = cookieStore.get('theme');
  const theme = savedTheme?.value || 'light';

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      style={generateThemeStyleObject(theme)}
    >
      <body>
        <Header theme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
