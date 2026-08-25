export const BUSINESS_NAME = "Soul 45";
export const BUSINESS_FULL_NAME = "Soul 45 - Listening Bar and Record Shop";

export const BUSINESS_DESCRIPTION =
  "Soul 45 is Hull's first vinyl cafe, bar and record shop, specialising in jazz, funk, soul, deep house, house, disco and electronic music.";

export const BUSINESS_VALUES =
  "The venue is built around inclusivity, diversity, freedom of expression and a love of music.";

export const ADDRESS_LINES = ["45 Newland Ave", "Hull", "HU5 3BE", "United Kingdom"];

export const INSTAGRAM_HANDLE = "@soul45_hu5";
export const INSTAGRAM_URL = "https://www.instagram.com/soul45_hu5/";
export const LOGO_SRC = "/images/soul45-logo.jpg";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Soul+45+45+Newland+Ave+Hull+HU5+3BE";
export const GOOGLE_PLACE_ID = "";

export type MenuItem = {
  name: string;
  price: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export type WineCollection = {
  name: string;
  wines: string[];
  servings: MenuItem[];
};

export const DRAUGHT_MENU: MenuItem[] = [
  {
    name: "Brinkhoffs Lager",
    price: "£5.90",
    image: "/images/Brinkhoffs-Lager.png",
    imageAlt: "Brinkhoffs Lager tap at Soul 45",
  },
  {
    name: "Grand Central IPA",
    price: "£6.50",
    image: "/images/Grand-Central-IPA.png",
    imageAlt: "Grand Central IPA tap at Soul 45",
  },
  {
    name: "Appleshed Cider",
    price: "£5.90",
    image: "/images/Appleshed-Cider.png",
    imageAlt: "Appleshed Cider tap at Soul 45",
  },
  {
    name: "Kasteel Rouge (½ Pint)",
    price: "£7.00",
    image: "/images/kasteel-rouge.jpg",
    imageAlt: "Kasteel Rouge product label",
    imagePosition: "center",
  },
];

export const SPIRITS_MENU: MenuItem[] = [
  { name: "Vodka", price: "£4.50" },
  { name: "Vanilla Vodka", price: "£4.50" },
  { name: "London Dry Gin", price: "£4.50" },
  { name: "Pink Gin", price: "£4.75" },
  { name: "White Rum", price: "£4.50" },
  { name: "Spiced Rum", price: "£4.75" },
  { name: "Bourbon", price: "£4.75" },
  { name: "Tequila Silver", price: "£4.75" },
  { name: "Tequila Gold", price: "£4.75" },
  { name: "Sambuca", price: "£4.50" },
  { name: "Black Sambuca", price: "£4.75" },
];

export const SPIRIT_MIXER_MENU = {
  item: { name: "Any Spirit & Mixer", price: "£6.95" },
  mixerChoices: ["Tonic Water", "Lemonade", "Soda Water", "Coke", "Coke Zero"],
};

export const WINE_COLLECTIONS: WineCollection[] = [
  {
    name: "House Collection",
    wines: ["Pinot Grigio", "Cabernet Sauvignon"],
    servings: [
      { name: "125ml", price: "£5.00" },
      { name: "175ml", price: "£6.00" },
      { name: "250ml", price: "£8.50" },
      { name: "Bottle", price: "£25.00" },
    ],
  },
  {
    name: "Premium Collection",
    wines: ["Sauvignon Blanc", "Malbec"],
    servings: [
      { name: "125ml", price: "£5.75" },
      { name: "175ml", price: "£6.75" },
      { name: "250ml", price: "£9.50" },
      { name: "Bottle", price: "£28.00" },
    ],
  },
];

export const PROSECCO_MENU = {
  name: "Accurello DOC",
  servings: [
    { name: "125ml", price: "£6.50" },
    { name: "Bottle", price: "£27.95" },
  ],
};

export const SOFT_DRINKS_MENU: MenuItem[] = [
  { name: "Coca-Cola", price: "£2.80" },
  { name: "Coca-Cola Zero", price: "£2.80" },
  { name: "Lemonade", price: "£2.80" },
  { name: "Still Water", price: "£2.50" },
  { name: "Sparkling Water", price: "£2.50" },
  { name: "Premium Tonic Water", price: "£2.80" },
];

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Listening Bar", href: "/listening-bar" },
  { label: "Events", href: "/events" },
  { label: "Records", href: "/records" },
  { label: "Drinks", href: "/drinks" },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit", href: "/visit" },
];

export const OPENING_HOURS_NOTE =
  "Opening hours are announced on Instagram and in-venue notices.";

export const CONTACT_NOTE =
  "For the latest announcements, event updates and direct messages, use Instagram.";
