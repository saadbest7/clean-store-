import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Everything for your pet</h1>
          <p className="mb-6">Free shipping on orders over $50</p>
          <Link href="#products" className="bg-white text-pink-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">Shop Now</Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1601758123927-1a8c9d40c1a6?auto=format&fit=crop&w=800&q=80"
            alt="Happy pet"
            width={500}
            height={400}
            className="rounded"
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          />
        </div>
      </div>
    </section>
  );
}
