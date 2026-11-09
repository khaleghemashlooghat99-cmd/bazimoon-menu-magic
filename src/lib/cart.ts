import { menuData, type Category, type MenuItem } from "@/data/menuData";

export type CartQuantities = Record<string, number>;

export interface CartLine {
  key: string;
  category: Category;
  item: MenuItem;
  quantity: number;
}

export interface CartGroup {
  category: Category;
  lines: CartLine[];
}

/** Item ids repeat inside some categories, so the position is part of the key. */
export const makeCartKey = (categoryId: string, itemId: string, index: number) => `${categoryId}:${itemId}:${index}`;

/** Resolves stored quantities against the current menu, in menu order. Stale keys are skipped. */
export const getCartGroups = (quantities: CartQuantities): CartGroup[] =>
  menuData.reduce<CartGroup[]>((groups, category) => {
    const lines = category.items.reduce<CartLine[]>((acc, item, index) => {
      const key = makeCartKey(category.id, item.id, index);
      const quantity = quantities[key];
      if (quantity > 0) acc.push({ key, category, item, quantity });
      return acc;
    }, []);
    if (lines.length) groups.push({ category, lines });
    return groups;
  }, []);
