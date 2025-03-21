
import { Product } from "@/types";

// Main products data with all details
export const products: Product[] = [
  {
    id: "almond-oat-cookies",
    name: "Almond Oat Cookies",
    description: "A wholesome blend of nutrient-rich oats, premium almonds, and whole wheat flour, our Almond Oat Cookies offer the perfect balance of taste and health. Made exclusively with pure Desi ghee—never palm oil—these cookies bring home a rich, authentic flavour while staying free from trans fats and preservatives. Whether you're looking for a guilt-free snack or a nourishing treat, this clean-label delight ensures pure indulgence with every bite.",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
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
      "Pure Desi Ghee – No palm oil, just authentic flavour",
      "Whole Wheat Goodness – No maida, just wholesome grains",
      "Zero Trans Fat, No Palm Oil, No Preservatives – Clean, guilt-free indulgence",
      "Nutrient-Dense – Infused with almonds and oats for sustained energy",
      "Traditionally Inspired, Health-Conscious – Crafted for taste and wellness"
    ],
    rating: 4.8,
    reviewCount: 127,
    stockStatus: "in-stock",
    isNew: true
  },
  {
    id: "chocochip-brownie-cookies",
    name: "Chocochip Brownie Cookies",
    description: "For those who crave intense chocolate flavour with a crunch, our Choco Chip Brownie Cookies are the perfect treat. Combining the fudgy richness of brownies with crispy choco chips, these cookies redefine indulgence without compromising on health. Made with pure Desi ghee (never palm oil), zero trans fats, and no preservatives, each bite is a decadent yet guilt-free delight.",
    price: 219,
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
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
      "Decadent Brownie Taste – Fudgy, chocolaty, and satisfying",
      "Pure Desi Ghee Goodness – No palm oil, only authentic ingredients",
      "Zero Trans Fat, No Preservatives, No Palm Oil – Made for guilt-free indulgence",
      "Crispy Choco Chips – Perfectly balanced texture",
      "Clean Label & Health-Conscious – Rich taste, mindful ingredients"
    ],
    rating: 4.9,
    reviewCount: 156,
    stockStatus: "in-stock",
    isNew: false
  },
  {
    id: "kodo-millet-cookies",
    name: "Kodo Millet Cookies",
    description: "Power-packed with protein, fiber, and ancient grain goodness, our Kodo Millet Cookies are completely wheat-free, making them the perfect choice for gluten-sensitive or health-conscious consumers. Crafted with pure Desi ghee, zero refined sugar, and no preservatives, these cookies offer a light yet satisfying crunch while promoting better digestion and sustained energy.",
    price: 239,
    discountedPrice: 219,
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
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
      "Wheat-Free & Wholesome – Perfect for mindful snackers",
      "Protein & Fiber-Rich – Powered by Kodo millet for better health",
      "Pure Desi Ghee Flavour – No palm oil, only traditional richness",
      "No Refined Sugar, No Preservatives, No Palm Oil – Naturally nourishing",
      "Balanced & Guilt-Free – The perfect mix of taste and nutrition"
    ],
    rating: 4.7,
    reviewCount: 98,
    stockStatus: "low-stock",
    isNew: true
  },
  {
    id: "honey-oat-cookies",
    name: "Honey Oat Cookies",
    description: "Infused with the natural sweetness of honey and the nutritional power of oats, our Honey Oat Cookies deliver the perfect harmony of taste and health. Made with pure Desi ghee, zero trans fats, and no preservatives, these cookies are a wholesome snack that supports your well-being while satisfying your sweet cravings.",
    price: 199,
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
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
      "Hearty Oats for Sustained Energy – Wholesome and filling",
      "Made with Pure Desi Ghee – No palm oil, just authentic taste",
      "No Palm Oil, No Preservatives, Zero Trans Fat – Clean-label snacking",
      "Perfect Balance of Health & Indulgence – Guilt-free treat",
      "Clean Label & Health-Conscious – Rich taste, mindful ingredients"
    ],
    rating: 4.8,
    reviewCount: 112,
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
    "Pure Desi Ghee Goodness – No Palm Oil, ensuring a rich, authentic taste",
    "Zero Trans Fat & No Preservatives – Clean, guilt-free snacking",
    "Wholesome Ingredients – Almonds, oats, honey, Kodo millet, and high-quality cocoa",
    "Perfect for All Occasions – Ideal with tea, as an energy booster, or on-the-go",
    "Clean Label & Health-Conscious – Rich taste, mindful ingredients"
  ],
  foundedYear: 2022
};
