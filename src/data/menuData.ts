import chickenPestoPizza from "@/assets/chicken-pesto-pizza.jpg";
import margaritaPizza from "@/assets/margarita-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import espresso from "@/assets/espresso.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import cola from "@/assets/cola.jpg";
import orangeJuice from "@/assets/orange-juice.jpg";
import smoothie from "@/assets/smoothie.jpg";
import classicBurger from "@/assets/classic-burger.jpg";
import cheeseBurger from "@/assets/cheese-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import pizzaIcon from "@/assets/pizza-slice.png";
import coffeeIcon from "@/assets/latte-art.png";
import hotDrinkIcon from "@/assets/french-press.png";
import starterIcon from "@/assets/nachos.png";
import suchiIcon from "@/assets/sushi.png";
import mafiaIcon from "@/assets/hat.png";
import boardGameIcon from "@/assets/board-game.png";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: Category[] = [
  {
    id: "pizza",
    name: "پیتزا",
    icon: pizzaIcon,
    items: [
      {
        id: "chicken-pesto",
        name: "پیتزا چیکن پستو",
        price: 14.99,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا مارگاریتا",
        price: 12.99,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        price: 13.99,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا چیکن پستو",
        price: 14.99,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا مارگاریتا",
        price: 12.99,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        price: 13.99,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا چیکن پستو",
        price: 14.99,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا مارگاریتا",
        price: 12.99,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        price: 13.99,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      }
    ],
  },
  {
    id: "coffee",
    name: "قهوه",
    icon: coffeeIcon,
    items: [
      {
        id: "espresso",
        name: "اسپرسو",
        price: 3.99,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 4.99,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافه لاته",
        price: 5.49,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
    ],
  },
  {
    id: "appetizer",
    name: "پیش غذا",
    icon: starterIcon,
    items: [
      {
        id: "seasoned-fries",
        name: "سیب زمینی ویژه",
        price: 4.99,
        image: classicBurger,
        ingredients: "سیب‌زمینی سرخ‌شده، ادویه مخصوص",
      },
      {
        id: "garlic-bread",
        name: "نان سیر",
        price: 3.99,
        image: margaritaPizza,
        ingredients: "نان، کره و سیر",
      },
      {
        id: "caesar-salad",
        name: "سالاد سزار",
        price: 6.99,
        image: chickenPestoPizza,
        ingredients: "مرغ گریل‌شده، کاهو، پنیر پارمزان، سس سزار",
      },
    ],
  },
  {
    id: "hot-drinks",
    name: "نوشیدنی گرم",
    icon: hotDrinkIcon,
    items: [
      {
        id: "tea",
        name: "چای",
        price: 2.99,
        image: espresso,
        ingredients: "چای سیاه",
      },
      {
        id: "hot-chocolate",
        name: "هات چاکلت",
        price: 4.49,
        image: cappuccino,
        ingredients: "شکلات، شیر گرم",
      },
      {
        id: "masala",
        name: "چای ماسالا",
        price: 4.99,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
    ],
  },
  {
    id: "mocktail",
    name: "سوشی",
    icon: suchiIcon,
    items: [
      {
        id: "orange-mocktail",
        name: "ماکتیل پرتقال",
        price: 4.99,
        image: orangeJuice,
        ingredients: "آب پرتقال، یخ",
      },
      {
        id: "berry-mocktail",
        name: "ماکتیل بری",
        price: 5.99,
        image: smoothie,
        ingredients: "توت‌های قرمز، یخ",
      },
      {
        id: "cola-mocktail",
        name: "ماکتیل کولا",
        price: 4.49,
        image: cola,
        ingredients: "نوشابه کولا، یخ",
      },
    ],
  },
  {
    id: "chips-cheese",
    name: "چیپس و پنیر",
    icon: "🧀",
    items: [
      {
        id: "classic-chips-cheese",
        name: "چیپس و پنیر کلاسیک",
        price: 6.99,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، ادویه",
      },
      {
        id: "mushroom-chips-cheese",
        name: "چیپس و پنیر قارچ",
        price: 7.99,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، قارچ",
      },
      {
        id: "special-chips-cheese",
        name: "چیپس و پنیر ویژه",
        price: 8.99,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
    ],
  },
  {
    id: "fried",
    name: "سوخاری",
    icon: "🍗",
    items: [
      {
        id: "fried-chicken",
        name: "مرغ سوخاری",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ سوخاری، آرد سوخاری، ادویه",
      },
      {
        id: "fried-strips",
        name: "فیله استریپس",
        price: 9.99,
        image: chickenBurger,
        ingredients: "فیله مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "بال سوخاری",
        price: 8.99,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
    ],
  },
  {
    id: "sandwich",
    name: "ساندویچ",
    icon: "🥪",
    items: [
      {
        id: "classic-sandwich",
        name: "ساندویچ کلاسیک",
        price: 8.99,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ساندویچ پنیر",
        price: 9.99,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "ساندویچ مرغ",
        price: 10.99,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "mafia",
    name: "مافیا",
    icon: mafiaIcon,
    items: [
      {
        id: "mafia-hourly-fee",
        name: "هزینه بازی ساعتی",
        price: 100000,
        image: mafiaIcon,
      },
    ],
  },
  {
    id: "board-game",
    name: "بوردگیم",
    icon: boardGameIcon,
    items: [
      {
        id: "board-game-hourly-fee",
        name: "هزینه بازی ساعتی",
        price: 100000,
        image: boardGameIcon,
      },
    ],
  },
];
