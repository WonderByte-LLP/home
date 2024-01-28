'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-tailwind/react';

import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}

RootLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

RootLayout.defaultProps = {
  children: undefined,
};

export default RootLayout;

