const faNumber = new Intl.NumberFormat("fa-IR");

/** Menu prices are stored in thousands of tomans. */
export const formatToman = (price: number) => faNumber.format(Math.round(price * 1000));

export const formatFaNumber = (value: number) => faNumber.format(value);
