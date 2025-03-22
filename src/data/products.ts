
import { Product } from "@/types";

// Main products data with all details
export const products: Product[] = [
  {
    id: "almond-oat-cookies",
    name: "Almond Oat Cookies",
    description: "A wholesome blend of nutrient-rich oats, premium almonds, and whole wheat flour, our Almond Oat Cookies offer the perfect balance of taste and health. Made exclusively with pure Desi ghee—never palm oil—these cookies bring home a rich, authentic flavour while staying free from trans fats and preservatives.",
    price: 199,
    images: [
      "/lovable-uploads/74df9f08-5863-436b-9f5d-71bee2ecce4e.png",
    ],
    colors: [
      { id: "natural", name: "Natural", value: "#E8D7C1" }
    ],
    sizes: [
      { id: "100g", name: "100g Pack", availability: "available" },
      { id: "250g", name: "250g Pack", availability: "available" },
      { id: "500g", name: "500g Family Pack", availability: "limited" }
    ],
    features: [
      "100% Desi Ghee used",
      "No Palm Oil",
      "No Maida",
      "No Preservatives; no Transfats",
      "Goodness of Almonds and Oats"
    ],
    rating: 4.9,
    reviewCount: 160,
    stockStatus: "in-stock",
    isNew: true
  },
  {
    id: "chocochip-brownie-cookies",
    name: "Chocolate Brownie Cookies",
    description: "For those who crave intense chocolate flavour with a crunch, our Choco Chip Brownie Cookies are the perfect treat. Combining the fudgy richness of brownies with crispy choco chips, these cookies redefine indulgence without compromising on health. Made with pure Desi ghee (never palm oil), zero trans fats, and no preservatives.",
    price: 219,
    images: [
      "/lovable-uploads/56916dc4-d22b-43fd-826a-acade469f371.png",
    ],
    colors: [
      { id: "chocolate", name: "Chocolate", value: "#5C4033" }
    ],
    sizes: [
      { id: "100g", name: "100g Pack", availability: "available" },
      { id: "250g", name: "250g Pack", availability: "available" },
      { id: "500g", name: "500g Family Pack", availability: "limited" }
    ],
    features: [
      "100% Desi Ghee used",
      "No Palm Oil",
      "No Preservatives; no Transfats",
      "Infused with rich chocochip brownies"
    ],
    rating: 4.9,
    reviewCount: 156,
    stockStatus: "in-stock",
    isNew: false
  },
  {
    id: "kodo-millet-cookies",
    name: "Kodo Millet Cookies",
    description: "Power-packed with protein, fiber, and ancient grain goodness, our Kodo Millet Cookies are completely wheat-free, making them the perfect choice for gluten-sensitive or health-conscious consumers. Crafted with pure Desi ghee, zero refined sugar, and no preservatives, these cookies offer a light yet satisfying crunch.",
    price: 239,
    discountedPrice: 219,
    images: [
      "/lovable-uploads/20258625-add7-4ea3-92f0-fb7eb3b3f3f8.png",
    ],
    colors: [
      { id: "natural", name: "Natural", value: "#F4E9D7" }
    ],
    sizes: [
      { id: "100g", name: "100g Pack", availability: "available" },
      { id: "250g", name: "250g Pack", availability: "available" },
      { id: "500g", name: "500g Family Pack", availability: "limited" }
    ],
    features: [
      "Wheat-free",
      "No Refined Sugar",
      "100% Desi Ghee used",
      "No Palm Oil",
      "No Preservatives; no Transfats",
      "Goodness of Kodo millet"
    ],
    rating: 4.8,
    reviewCount: 128,
    stockStatus: "low-stock",
    isNew: true
  },
  {
    id: "honey-oat-cookies",
    name: "Honey Oat Cookies",
    description: "Infused with the natural sweetness of honey and the nutritional power of oats, our Honey Oat Cookies deliver the perfect harmony of taste and health. Made with pure Desi ghee, zero trans fats, and no preservatives, these cookies are a wholesome snack that supports your well-being while satisfying your sweet cravings.",
    price: 199,
    images: [
      "/lovable-uploads/3a89828c-0df5-4eb4-b462-6b2fa3f75cc9.png",
    ],
    colors: [
      { id: "golden", name: "Golden", value: "#E8D197" }
    ],
    sizes: [
      { id: "100g", name: "100g Pack", availability: "available" },
      { id: "250g", name: "250g Pack", availability: "available" },
      { id: "500g", name: "500g Family Pack", availability: "limited" }
    ],
    features: [
      "100% Desi Ghee used",
      "No Palm Oil",
      "No Preservatives",
      "No Transfats",
      "Goodness of Oats and Honey"
    ],
    rating: 4.8,
    reviewCount: 142,
    stockStatus: "in-stock",
    isNew: false
  }
];

// Featured product for main display
export const featuredProduct = products[0]; // Almond Oat Cookies

// Related products to show with a featured product
export const relatedProducts = products.slice(1);

// Company information
export const companyInfo = {
  name: "Crumb Haven",
  description: "At Crumb Haven, we believe indulgence should be as nourishing as it is delicious. Our cookies are crafted with Pure Desi Ghee, Zero Preservatives, and No Trans Fats, ensuring every bite delivers authentic flavour with clean, wholesome ingredients. We replace processed additives with nature's best, striking the perfect balance between taste and well-being. Every cookie is a testament to our commitment—where tradition meets health, and flavour never takes a backseat.",
  highlights: [
    "100% Desi Ghee used",
    "No Palm Oil",
    "No Preservatives",
    "No Transfats",
    "Goodness of Oats, Millets and Nuts"
  ],
  foundedYear: 2022
};
