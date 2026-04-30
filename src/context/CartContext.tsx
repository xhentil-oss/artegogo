import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  qty: number;
  emoji?: string;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  changeQty: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeItem = (id: string) => setCart((p) => p.filter((i) => i.id !== id));

  const changeQty = (id: string, delta: number) =>
    setCart((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addItem, removeItem, changeQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
