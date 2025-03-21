
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { ShoppingBag, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' 
        ? -current.clientWidth / 2 
        : current.clientWidth / 2;
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">You Might Also Like</h2>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 border-border hover:bg-secondary transition-colors hidden sm:flex"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 border-border hover:bg-secondary transition-colors hidden sm:flex"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-5 overflow-x-auto pb-4 hide-scrollbar fade-mask"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="group flex-shrink-0 w-[280px] glass-card overflow-hidden animate-fade-in"
          >
            <Link to={`/products/${product.id}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {product.isNew && (
                  <span className="absolute top-3 left-3 text-xs font-medium tracking-wider bg-accent text-white px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={cn(
                          "w-3.5 h-3.5", 
                          i < Math.floor(product.rating) 
                            ? "text-accent fill-accent" 
                            : "text-muted"
                        )} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1.5">({product.reviewCount})</span>
                </div>
                
                <h3 className="font-medium line-clamp-1">{product.name}</h3>
                
                <div className="flex items-baseline mt-1.5">
                  {product.discountedPrice ? (
                    <>
                      <span className="font-semibold text-accent">${product.discountedPrice.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </Link>
            
            <div className="p-5 pt-0">
              <Button 
                variant="outline" 
                className="w-full border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
