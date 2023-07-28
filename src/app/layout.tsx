import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppinsFont = Poppins({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'New Dog',
  description: 'Animated pics of our new puppy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>{children}</body>
    </html>
  );
}
