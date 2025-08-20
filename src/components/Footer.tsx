import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200" id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm">We love pets and provide quality products.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li><Link href="#" className="hover:text-white">Privacy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your email"
              className="px-3 py-2 rounded text-gray-900 flex-1"
            />
            <button
              className={
                'bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 focus:outline-none ' +
                'focus-visible:ring-2 focus-visible:ring-pink-500'
              }
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-xs pb-4">&copy; {new Date().getFullYear()} PetStore. All rights reserved.</p>
    </footer>
  );
}
