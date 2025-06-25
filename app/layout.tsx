import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: "L'Éclat d'Aphrodite",
  description: "Salon de beauté - extension cils, semi-permanent, microblading"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-rose-50 text-gray-900">
        <Header />
        <main className="mt-20 container mx-auto px-4 py-8 space-y-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}