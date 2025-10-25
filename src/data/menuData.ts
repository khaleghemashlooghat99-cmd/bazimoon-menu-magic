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

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
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
    name: "Pizza",
    icon: "🍕",
    items: [
      {
        id: "chicken-pesto",
        name: "Chicken Pesto Pizza",
        price: 14.99,
        image: chickenPestoPizza,
      },
      {
        id: "margarita",
        name: "Margarita Pizza",
        price: 12.99,
        image: margaritaPizza,
      },
      {
        id: "pepperoni",
        name: "Pepperoni Pizza",
        price: 13.99,
        image: pepperoniPizza,
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    icon: "☕",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        price: 3.99,
        image: espresso,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 4.99,
        image: cappuccino,
      },
      {
        id: "latte",
        name: "Caffe Latte",
        price: 5.49,
        image: latte,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    items: [
      {
        id: "cola",
        name: "Cola",
        price: 2.99,
        image: cola,
      },
      {
        id: "orange-juice",
        name: "Fresh Orange Juice",
        price: 4.99,
        image: orangeJuice,
      },
      {
        id: "smoothie",
        name: "Berry Smoothie",
        price: 5.99,
        image: smoothie,
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    icon: "🍔",
    items: [
      {
        id: "classic-burger",
        name: "Classic Burger",
        price: 11.99,
        image: classicBurger,
      },
      {
        id: "cheese-burger",
        name: "Cheese Burger",
        price: 12.99,
        image: cheeseBurger,
      },
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        price: 10.99,
        image: chickenBurger,
      },
    ],
  },
];
