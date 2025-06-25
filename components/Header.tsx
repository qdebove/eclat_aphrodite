import Link from 'next/link';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="L'Éclat d'Aphrodite Logo" className="h-16 w-auto" />
          <h1 className="ml-4 text-2xl italic">L'Éclat d'Aphrodite</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services">Prestations</Link></li>
            <li><Link href="#treatments">Soins</Link></li>
            <li><Link href="#gallery">Galerie</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}