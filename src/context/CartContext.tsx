import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';

type CartItem = Product & { quantity: number };

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  toggleCart: () => void;
  isOpen: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

const CartDrawer = () => {
  const { items, removeItem, isOpen, toggleCart } = useCart();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Cart</h2>
        <button onClick={toggleCart} aria-label="Close cart">
          &times;
        </button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
        {items.length === 0 && (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
        {items.map((item) => (
          <div key={item.id} className="flex gap-2">
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="object-cover rounded"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              aria-label="Remove item"
              className="text-red-500"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsOpen((o) => !o);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, toggleCart, isOpen }}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
};
