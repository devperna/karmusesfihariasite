import React, { createContext, useState, useContext, ReactNode } from 'react';
import { MenuItem } from '../types';

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  isAnimating: boolean;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  getItemQuantity: (itemId: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Duração da animação
  };

  const addToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    triggerAnimation();
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
  };

  const increaseQuantity = (itemId: number) => {
    setCartItems(prevItems =>
      prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
    );
    triggerAnimation();
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === itemId);
      if (existingItem && existingItem.quantity === 1) {
        return prevItems.filter(i => i.id !== itemId);
      } else {
        return prevItems.map(i =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toggleCart(); // Fecha o carrinho ao finalizar
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemQuantity = (itemId: number) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    isCartOpen,
    isAnimating,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};