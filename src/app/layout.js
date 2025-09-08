import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Prestige Maintenance USA',
  description:
    'Prestige Maintenance USA provides you with the Right People and Reliable Experience you need to maintain your commercial facility.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
