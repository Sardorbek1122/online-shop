import {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';

type ShoppingCartProviderProps = {
  children: ReactNode
};

type ShoppingCartContextType = {
  getItemQuentity: (id: number) => number;
  increaseCartQuentity: (id: number) => void;
  decreaseCartQuentity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

type CartItem = {
  id: number,
  quantity: number,
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuentity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuentity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }

      return currItems.map(item => {
        if (item.id === id) {
          return { ...item, quentity: item.quantity + 1 };
        }

        return item;
      });
    });
  }

  function decreaseCartQuentity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      }

      return currItems.map(item => {
        if (item.id === id) {
          return { ...item, quentity: item.quantity - 1 };
        }

        return item;
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider value={{
      getItemQuentity,
      increaseCartQuentity,
      decreaseCartQuentity,
      removeFromCart,
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
