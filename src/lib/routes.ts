export const ITEMS_PATH = "/items";

/** Router state passed when opening the sub menu; never reflected in the URL. */
export type ItemsLocationState = { categoryId?: string } | null;
