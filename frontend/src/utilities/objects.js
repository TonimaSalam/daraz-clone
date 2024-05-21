import profileIcon from "../assets/icons/profile-icon.png";
import electronicsAccessoriesAdd from "../assets/adds/electronics-accessories-add.jpg";
import kidsAccessoriesAdd from "../assets/adds/kids-accessories-add.jpg";
import mensAccessoriesAdd from "../assets/adds/mens-accessories-add.jpg";
import womenAccessoriesAdd from "../assets/adds/women-accessories-add.jpg";
import vegetablesAdd from "../assets/adds/vegetables-add.jpg";
import medicineAdd from "../assets/adds/medicine-add.jpg";
import ladiesDress from "../assets/products/ladies-dress.jpg";
import ladiesShoe from "../assets/products/ladies-shoe.jpg";
import perfume from "../assets/products/perfume.jpg";
import pocketWatch from "../assets/products/pocket-watch.jpg";
import shirt from "../assets/products/shirt.jpg";
import toy from "../assets/products/toy.png";

export const saleProducts = [
  {
    image:ladiesDress,
    productTitle:"Comfortable ladies dress",
    discountPrice: 780,
    price:850
  },
  {
    image:ladiesShoe,
    productTitle:"Comfortable ladies shoe",
    discountPrice: 380,
    price:750
  },
  {
    image:perfume,
    productTitle:"Ladies perfume",
    discountPrice: 1130,
    price:1550
  },
  {
    image:pocketWatch,
    productTitle:"Antic Pocket Watch",
    discountPrice: 180,
    price:800
  },
  {
    image:shirt,
    productTitle:"Comfortable Gents Suit",
    discountPrice: 1780,
    price:2850
  },
  {
    image:toy,
    productTitle:"Soft teddy toy for kids",
    discountPrice: 780,
    price:1850
  },
]

export const adds = [
  electronicsAccessoriesAdd,
  mensAccessoriesAdd,
  womenAccessoriesAdd,
  vegetablesAdd,
  kidsAccessoriesAdd,
  medicineAdd,
];

export const categoriesObj = [
  {
    icon: profileIcon,
    text: "Women's & Girls' Fashion",
    subcategories:["Jwellery sets","Jwellery sets","Jwellery sets"]
  },
  {
    icon: profileIcon,
    text: "Health & Beauty",
  },
  {
    icon: profileIcon,
    text: "Watches, Bags, Jewellery",
  },
  {
    icon: profileIcon,
    text: "Men's & Boys' Fashion",
  },
  {
    icon: profileIcon,
    text: "Mother & Baby",
  },
  {
    icon: profileIcon,
    text: "Electronics Device",
  },
  {
    icon: profileIcon,
    text: "TV & Home Appliances",
  },
  {
    icon: profileIcon,
    text: "TV & Home Appliances",
  },
  {
    icon: profileIcon,
    text: "Electronic Accessories",
  },
  {
    icon: profileIcon,
    text: "Groceriess",
  },
  {
    icon: profileIcon,
    text: "Home & Lifestyle",
  },
  {
    icon: profileIcon,
    text: "Sports & Outdoors",
  },
  {
    icon: profileIcon,
    text: "Automotive & Motorbike",
  },
];
