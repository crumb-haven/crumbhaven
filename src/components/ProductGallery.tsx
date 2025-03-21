
import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };
  
  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-border bg-background">
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <img
            src={images[activeIndex]}
            alt={`${productName} - Image ${activeIndex + 1}`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover w-full h-full transition-opacity opacity-100 duration-300"
          />
        </AspectRatio>
        
        {images.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="flex items-center space-x-2 overflow-x-auto py-1 px-1">
          {images.map((image, i) => (
            <button
              key={i}
              className={cn(
                "relative w-[60px] sm:w-[80px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md border border-border transition-opacity",
                activeIndex === i ? "ring-2 ring-accent opacity-100" : "opacity-70 hover:opacity-100"
              )}
              onClick={() => goToImage(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={activeIndex === i}
            >
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                  src={image}
                  alt={`${productName} - Thumbnail ${i + 1}`}
                  className="object-cover"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
