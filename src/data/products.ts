export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Cozy Dog Bed',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Cat Scratching Post',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1583511655936-4a6c1f42b602?auto=format&fit=crop&w=400&q=80',
    rating: 4,
  },
  {
    id: 3,
    name: 'Pet Food Bowl',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1587929651402-cdce1ce83f4d?auto=format&fit=crop&w=400&q=80',
    rating: 4,
  },
  {
    id: 4,
    name: 'Chew Toy',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
];

export default products;
