
import { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]?.id);

  const isDiscounted = product.discountedPrice && product.discountedPrice < product.price;
  const discountPercentage = isDiscounted 
    ? Math.round(((product.price - product.discountedPrice!) / product.price) * 100) 
    : 0;

  const activePrice = isDiscounted ? product.discountedPrice! : product.price;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          {product.isNew && (
            <span className="text-xs font-medium uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full">
              New Arrival
            </span>
          )}
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-accent fill-accent mr-1" />
            <span className="font-medium">{product.rating.toFixed(1)}</span>
            <span className="mx-1">·</span>
            <span className="text-muted-foreground">{product.reviewCount} reviews</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{product.name}</h1>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Product Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Key Features:</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-accent shrink-0 mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Available Sizes</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.id}
              className={cn(
                "size-selector",
                selectedSize === size.id && "active",
                size.availability === 'unavailable' && "opacity-50 cursor-not-allowed"
              )}
              disabled={size.availability === 'unavailable'}
              onClick={() => setSelectedSize(size.id)}
              aria-label={`Select size: ${size.name}`}
              aria-pressed={selectedSize === size.id}
            >
              {size.name}
              {size.availability === 'limited' && (
                <span className="ml-1 text-xs text-accent">•</span>
              )}
            </button>
          ))}
        </div>
        {product.sizes.find(s => s.id === selectedSize)?.availability === 'limited' && (
          <p className="text-xs text-accent">Low stock</p>
        )}
      </div>

      {/* Company Highlights */}
      <div className="pt-4 border-t border-border">
        <h3 className="text-lg font-semibold mb-3">About Crumb Haven Cookies:</h3>
        <p className="text-sm text-muted-foreground mb-4">
          At Crumb Haven, we craft our cookies with only the finest ingredients. Our commitment to quality means we never compromise on ingredients or taste.
        </p>
      </div>
    </div>
  );
}
