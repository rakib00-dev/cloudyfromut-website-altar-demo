import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rothschild & Co',
  description:
    'Rothschild & Co is one of the world’s largest independent financial advisory groups, employing 4,200 people in over 40 countries across the world, delivering a unique global perspective across four market-leading business divisions; Global Advisory, Asset Management, Wealth Management and Merchant Banking.',
  keywords:
    'Global Advisory,Wealth Management,Asset Management,Trusts,Private Wealth,Private Banking,Merchant Banking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="src/app/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
