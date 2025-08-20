import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="PetStore logo" width={32} height={32} />
          <span className="text-xl font-bold">PetStore</span>
        </Link>
        <ul className="flex items-center gap-6">
          <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link href="#products" className="hover:text-pink-600">Products</Link></li>
          <li>
            <button
              onClick={toggleCart}
              className={
                'relative flex items-center gap-1 hover:text-pink-600 focus:outline-none ' +
                'focus-visible:ring-2 focus-visible:ring-pink-500 rounded'
              }
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
              </svg>
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </li>
          <li><Link href="#contact" className="hover:text-pink-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
