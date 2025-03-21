
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  colors: Color[];
  sizes: Size[];
  features: string[];
  rating: number;
  reviewCount: number;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  availability: 'available' | 'limited' | 'unavailable';
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  comment: string;
  helpful: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  colorId: string;
  sizeId: string;
}
