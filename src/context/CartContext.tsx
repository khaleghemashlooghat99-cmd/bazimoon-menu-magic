import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartQuantities } from "@/lib/cart";

const STORAGE_KEY = "bazimoon-cart";

interface CartContextValue {
  quantities: CartQuantities;
  totalCount: number;
  getQuantity: (key: string) => number;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const readStoredCart = (): CartQuantities => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object") return {};
    return Object.fromEntries(
      Object.entries(parsed as Record<string, unknown>).filter(
        (entry): entry is [string, number] => typeof entry[1] === "number" && entry[1] > 0,
      ),
    );
  } catch {
    return {};
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantities, setQuantities] = useState<CartQuantities>(readStoredCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
    } catch {
      // Storage can be unavailable (private mode); the cart still works in memory.
    }
  }, [quantities]);

  const increment = useCallback((key: string) => {
    setQuantities((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }));
  }, []);

  const remove = useCallback((key: string) => {
    setQuantities((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const decrement = useCallback((key: string) => {
    setQuantities((prev) => {
      const current = prev[key] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: current - 1 };
    });
  }, []);

  const clear = useCallback(() => setQuantities({}), []);

  const value = useMemo<CartContextValue>(() => {
    const totalCount = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    return {
      quantities,
      totalCount,
      getQuantity: (key) => quantities[key] ?? 0,
      increment,
      decrement,
      remove,
      clear,
    };
  }, [quantities, increment, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
