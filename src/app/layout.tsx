import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PetStore | Dropshipping Pets',
  description: 'Shop the best supplies for your furry friends. Free shipping on orders over $50.',
  openGraph: {
    title: 'PetStore',
    description: 'Shop the best supplies for your furry friends.',
    url: 'https://example.com',
    siteName: 'PetStore',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601758123927-1a8c9d40c1a6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'PetStore',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
