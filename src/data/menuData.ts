import chickenPestoPizza from "@/assets/chicken-pesto-pizza.jpg";
import margaritaPizza from "@/assets/margarita-pizza.jpg";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import baconPizza from "@/assets/bacon-cream-pizza.jpg";
import turkeybaconPizza from "@/assets/turkey-bacon-pizza.jpg";
import espresso from "@/assets/espresso.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import cola from "@/assets/cola.jpg";
import orangeJuice from "@/assets/orange-juice.jpg";
import smoothie from "@/assets/smoothie.jpg";
import classicBurger from "@/assets/classic-burger.jpg";
import cheeseBurger from "@/assets/cheese-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import pizzaIcon from "@/assets/black-white-icons/pizza.png";
import coffeeIcon from "@/assets/black-white-icons/coffee.png";
import milkShakeIcon from "@/assets/black-white-icons/milkshake.png";
import starterIcon from "@/assets/black-white-icons/pasta.png";
import suchiIcon from "@/assets/black-white-icons/sushi.png";
import burgerIcon from "@/assets/black-white-icons/burger.png";
import mafiaIcon from "@/assets/black-white-icons/mafia.png";
import boardGameIcon from "@/assets/black-white-icons/board-game.png";
import appetizerIcon from "@/assets/black-white-icons/appetizer.png";
import iceCoffeeIcon from "@/assets/black-white-icons/ice-coffee.png";
import teaIcon from "@/assets/black-white-icons/tea.png";
import smoothieIcon from "@/assets/black-white-icons/smoothie.png";
import matchaIcon from "@/assets/black-white-icons/matcha.png";
import hotDrinkIcon from "@/assets/black-white-icons/hotdrink.png";
import snackIcon from "@/assets/black-white-icons/snack.png";
import sauceIcon from "@/assets/black-white-icons/sauce.png";
import ketchupIcon from "@/assets/ketchup.jpg";


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
  description?: string;
}

export const menuData: Category[] = [
  {
    id: "pizza",
    name: "پیــــتزا",
    icon: pizzaIcon,
    items: [
      {
        id: "chicken-pesto",
        name: "پیتزا پپرونی",
        price: 785,
        image: pepperoniPizza,
        ingredients: "سس مارینارا، پنیر پیتزا، فلفل هالوپینو، سوسیس پپرونی",
      },
      {
        id: "margarita",
        name: "پیتزا بیکن و خامه",
        price: 980,
        image: baconPizza,
        ingredients: "سس خامه، پنیر پیتزا، بیکن گوشت، قارچ، زیتون سیاه، گوجه گیلاسی، فلفل دلمه",
      },
      {
        id: "pepperoni",
        name: "پیتزا بیکن بوقلمون",
        price: 935,
        image: turkeybaconPizza,
        ingredients: "سس کف پستو، پنیر پیتزا، بیکن بوقلمون، قارچ، زیتون سبز، گوجه گیلاسی، فلفل دلمه، تاپینگ سس آلفردو",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا پلد بیف",
        price: 900,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا سیر و استیک",
        price: 1060,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا چیکن گریل",
        price: 820,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
      {
        id: "chicken-pesto",
        name: "پیتزا آلفردو",
        price: 840,
        image: chickenPestoPizza,
        ingredients: "مرغ، سس پستو، پنیر موزارلا",
      },
      {
        id: "margarita",
        name: "پیتزا پستو",
        price: 855,
        image: margaritaPizza,
        ingredients: "سس گوجه، پنیر موزارلا، ریحان",
      },
      {
        id: "pepperoni",
        name: "پیتزا باربیکیو",
        price: 795,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
      {
        id: "pepperoni",
        name: "نان سیر",
        price: 450,
        image: pepperoniPizza,
        ingredients: "پپرونی، پنیر موزارلا، سس گوجه",
      },
    ],
  },
  {
    id: "coffee",
    name: "اسپرسـو بـار",
    icon: coffeeIcon,
    items: [
      {
        id: "espresso",
        name: "اسپرسو",
        price: 165,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "آمریکانو",
        price: 190,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        price: 245,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "cappuccino",
        name: "موکا",
        price: 300,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
      {
        id: "latte",
        name: "کافی لاته",
        price: 275,
        image: latte,
        ingredients: "اسپرسو، شیر بخار داده‌شده",
      },
      {
        id: "espresso",
        name: "کارامل ماکیاتو",
        price: 290,
        image: espresso,
        ingredients: "قهوه اسپرسو",
      },
      {
        id: "cappuccino",
        name: "لاته کوکی",
        price: 300,
        image: cappuccino,
        ingredients: "اسپرسو، شیر بخار داده‌شده، فوم شیر",
      },
    ],
  },
    {
    id: "burger",
    name: "بــرگــر",
    icon: burgerIcon,
    items: [
      {
        id: "classic-chips-cheese",
        name: "کلاسیک برگر",
        price: 545,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، ادویه",
      },
      {
        id: "mushroom-chips-cheese",
        name: "چیز برگر",
        price: 600,
        image: cheeseBurger,
        ingredients: "چیپس، پنیر، قارچ",
      },
      {
        id: "special-chips-cheese",
        name: "ماشروم برگر",
        price: 670,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "کاراملایز برگر",
        price: 715,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "چیلی برگر",
        price: 680,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "چیکن برگر",
        price: 510,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "اسموکی بیکن برگر",
        price: 760,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "مینی کلاسیک برگر",
        price: 335,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
      {
        id: "special-chips-cheese",
        name: "مینی چیز برگر",
        price: 380,
        image: chickenBurger,
        ingredients: "چیپس، پنیر، قارچ، ژامبون",
      },
    ],
  },
  {
    id: "pasta",
    name: "پاســـتا",
    icon: starterIcon,
    items: [
      {
        id: "seasoned-fries",
        name: "پاستا آلفردو",
        price: 680,
        image: classicBurger,
        ingredients: "سیب‌زمینی سرخ‌شده، ادویه مخصوص",
      },
      {
        id: "garlic-bread",
        name: "پاستا پستو",
        price: 715,
        image: margaritaPizza,
        ingredients: "نان، کره و سیر",
      },
      {
        id: "caesar-salad",
        name: "پاستا بیف آلفردو",
        price: 865,
        image: chickenPestoPizza,
        ingredients: "مرغ گریل‌شده، کاهو، پنیر پارمزان، سس سزار",
      },
      {
        id: "caesar-salad",
        name: "پاستا ونیزی",
        price: 545,
        image: chickenPestoPizza,
        ingredients: "مرغ گریل‌شده، کاهو، پنیر پارمزان، سس سزار",
      },
    ],
  },
  
  {
    id: "sushi",
    name: "سوشـــی",
    icon: suchiIcon,
    items: [
      {
        id: "orange-mocktail",
        name: "وجی ماکی",
        price: 910,
        image: orangeJuice,
        ingredients: "آب پرتقال، یخ",
      },
      {
        id: "berry-mocktail",
        name: "چیکن کاتسو",
        price: 1150,
        image: smoothie,
        ingredients: "توت‌های قرمز، یخ",
      },
      {
        id: "cola-mocktail",
        name: "اوشن بایت",
        price: 1330,
        image: cola,
        ingredients: "نوشابه کولا، یخ",
      },
      {
        id: "cola-mocktail",
        name: "سالمون آووکادو",
        price: 1440,
        image: cola,
        ingredients: "نوشابه کولا، یخ",
      },
      {
        id: "cola-mocktail",
        name: "تونارول",
        price: 1490,
        image: cola,
        ingredients: "نوشابه کولا، یخ",
      },
    ],
  },
  {
    id: "milk-shake",
    name: "میلک شیـک",
    icon: milkShakeIcon,
    items: [
      {
        id: "tea",
        name: "تورتــوگا (شــکلات)",
        price: 345,
        image: espresso,
        ingredients: "چای سیاه",
      },
      {
        id: "hot-chocolate",
        name: "طهـــران 1410 (نوتـــلا)",
        price: 385,
        image: cappuccino,
        ingredients: "شکلات، شیر گرم",
      },
      {
        id: "masala",
        name: "استـــوژیت (پســـته)",
        price: 430,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
      {
        id: "araghnana",
        name: "زیرخــــاکی (ارده)",
        price: 375,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
      {
        id: "araghnana",
        name: "هورامـــون (بادام زمینی و انبه)",
        price: 410,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
      {
        id: "araghnana",
        name: "مورگانـــا (ویـــتمو)",
        price: 345,
        image: latte,
        ingredients: "چای سیاه، شیر، ادویه‌های معطر",
      },
    ],
  },
  {
    id: "ice-coffee",
    name: "آیـس کافـــی",
    icon: iceCoffeeIcon,
    items: [
      {
        id: "fried-chicken",
        name: "آیس آمریــکانو",
        price: 200,
        image: chickenBurger,
        ingredients: "مرغ سوخاری، آرد سوخاری، ادویه",
      },
      {
        id: "fried-strips",
        name: "آیس مـــوکا",
        price: 310,
        image: chickenBurger,
        ingredients: "فیله مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "آیس لاتـــه",
        price: 275,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "آیس کارامــل",
        price: 300,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "فـــراپاچینو",
        price: 300,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
      {
        id: "fried-wings",
        name: "آفــوگاتــو",
        price: 255,
        image: chickenBurger,
        ingredients: "بال مرغ، آرد سوخاری، ادویه",
      },
    ],
  },
  {
    id: "tea",
    name: "چای و دمنوش",
    icon: teaIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "چای ســـیاه",
        price: 135,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "چای هل و زعفران",
        price: 210,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "چای مراکـــشی",
        price: 190,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "دمنوش کهـــربا",
        price: 245,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "دمنوش فتوســنتز",
        price: 245,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "دمنوش گـــیلان",
        price: 245,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "دمنوش شیــراز",
        price: 245,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "smoothie",
    name: "ماکتیل و اسموتی",
    icon: smoothieIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "لــــیمونــاد",
        price: 255,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "مـوهـــیـــتو",
        price: 255,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "فـــروزن لیــمونـــعنا",
        price: 290,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "فروزن توت فرنگی رزبری",
        price: 400,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ماءالشـــعیر کــره‌ای",
        price: 275,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "کــوکا کــاراملــی",
        price: 190,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "نارسیــــس",
        price: 265,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "مانیـــلا",
        price: 265,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "بـاربـــی",
        price: 375,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "تروپیـــکال",
        price: 330,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "مـــورگانــا",
        price: 385,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
    ],
  },
  {
    id: "matcha",
    name: "ماچــابــار",
    icon: matchaIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ماچــا نارگیــل گرم",
        price: 320,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "ماچــا کوکـــی گرم",
        price: 320,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "آیس ماچــا نارگیــل",
        price: 355,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "آیس ماچــا کوکـــی",
        price: 355,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "آیس تروپیــکال ماچــا",
        price: 375,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "hotdrinks",
    name: "نوشیدنی گرم",
    icon: hotDrinkIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "شـــیر نوتـلا",
        price: 385,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "هـات پســـته",
        price: 375,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "آیریــش کــرم",
        price: 330,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "هــات چاکلــت",
        price: 290,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "ماســــالا",
        price: 290,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "کـــــرک",
        price: 255,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "چای لاتـه کارامـل",
        price: 245,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "snack",
    name: "اسنک و چیپس پنیر",
    icon: snackIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "ژامـــبون (2 تیکـه)",
        price: 345,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "ژامـــبون (4 تیکـه)",
        price: 625,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "مـــرغ (2 تیکـه)",
        price: 380,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "مـــرغ (4 تیکـه)",
        price: 660,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "چیپـس پنیر ژامبـون",
        price: 785,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "classic-sandwich",
        name: "چیپـس پنیر مــرغ",
        price: 780,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "appetizer",
    name: "پیــش غــذا",
    icon: appetizerIcon,
    items: [
      {
        id: "classic-sandwich",
        name: "سـیب ســـاده",
        price: 280,
        image: classicBurger,
        ingredients: "نان ساندویچ، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "cheese-sandwich",
        name: "سـیب آلفــردو",
        price: 395,
        image: cheeseBurger,
        ingredients: "نان ساندویچ، پنیر، کاهو، گوجه",
      },
      {
        id: "chicken-sandwich",
        name: "کتـف سوخـاری",
        price: 450,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "بوفالــو وینگــز",
        price: 495,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "ســـیب ویـــژه",
        price: 495,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "ســالاد ســـزار",
        price: 680,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "ســالاد سبـــز",
        price: 555,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
      {
        id: "chicken-sandwich",
        name: "سـالاد میکـس و استیـک",
        price: 935,
        image: chickenBurger,
        ingredients: "مرغ گریل‌شده، کاهو، گوجه، سس مخصوص",
      },
    ],
  },
  {
    id: "sauce",
    name: "سـس اضافـه",
    icon: sauceIcon,
    items: [
      {
        id: "ketchup",
        name: "سس کچـــــاپ",
        price: 40,
        image: ketchupIcon,
      },
      {
        id: "ketchup",
        name: "سس فرانســــه",
        price: 40,
        image: ketchupIcon,
      },
      {
        id: "ketchup",
        name: "سس ســــیر/گریـن",
        price: 40,
        image: ketchupIcon,
      },
      {
        id: "ketchup",
        name: "سس سزار/میکس و استیک",
        price: 40,
        image: ketchupIcon,
      },
    ],
  },
  {
    id: "mafia",
    name: "مافیا",
    icon: mafiaIcon,
    description: "بازی مافیا در طبقه‌ای جداگانه و مخصوص با محیطی گرم و دوستانه انجام می‌شود و محلی برای علاقه‌مندان به تجربه این بازی دسته‌جمعی است. برای رزرو دک مافیا و اطلاع از سانس‌ها، با مدیریت کافه هماهنگ کنید.",
    items: [],
  },
  {
    id: "board-game",
    name: "بردگیم",
    icon: boardGameIcon,
    description: "بیش از 300 مدل از انواع بردگیم در کافه بازیمون با تنوع سبک وجود دارند تا با توجه به سبک سلیقه خودتون، تعداد نفرات، حس و حال و مدت زمان لازم برای بازی از بین آن‌ها انتخاب کنید و با دوستان خود در محیط کافه تجربه کنید. هر کدام از بازی‌هایی که انتخاب کنید توسط گیم مستر کافه به شما توضیح داده خواهد شد تا به راحتی به بازی کردن بپردازید.",
    items: [],
  },
];
