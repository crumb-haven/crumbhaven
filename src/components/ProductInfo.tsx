
import { useState } from 'react';
import { ShoppingBag, Heart, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { Product, Color, Size } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.id);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]?.id);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    const selectedColorObj = product.colors.find(c => c.id === selectedColor);
    const selectedSizeObj = product.sizes.find(s => s.id === selectedSize);
    
    if (!selectedColorObj || !selectedSizeObj) return;
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} (${selectedColorObj.name}, ${selectedSizeObj.name})`,
      duration: 3000,
    });
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

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
        
        <div className="flex items-baseline space-x-3">
          <span className={cn(
            "text-2xl font-semibold",
            isDiscounted && "text-accent"
          )}>
            ${activePrice.toFixed(2)}
          </span>
          
          {isDiscounted && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm font-medium bg-accent/10 text-accent px-2 py-1 rounded">
                Save {discountPercentage}%
              </span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Color Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Color: {product.colors.find(c => c.id === selectedColor)?.name}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.id}
              className={cn(
                "variant-selector",
                selectedColor === color.id && "active"
              )}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select color: ${color.name}`}
              aria-pressed={selectedColor === color.id}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Size</span>
          <button className="text-xs text-primary underline">Size Guide</button>
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

      {/* Quantity and Add to Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button
            className="px-3 py-2 hover:bg-secondary transition-colors duration-200"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            className="product-quantity-input w-12 text-center border-0 focus:ring-0 bg-transparent"
            value={quantity}
            min="1"
            max="10"
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            aria-label="Quantity"
          />
          <button
            className="px-3 py-2 hover:bg-secondary transition-colors duration-200"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <Button 
          className="flex-1 h-11 text-sm font-medium bg-primary hover:bg-primary/90 transition-colors"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 border-border hover:bg-secondary transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Product Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary rounded-full">
            <Truck className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <p className="font-medium">Free Shipping</p>
            <p className="text-muted-foreground">On orders over $50</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary rounded-full">
            <RotateCcw className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <p className="font-medium">Easy Returns</p>
            <p className="text-muted-foreground">30 day return policy</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-secondary rounded-full">
            <Shield className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <p className="font-medium">Secure Checkout</p>
            <p className="text-muted-foreground">Encrypted transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
