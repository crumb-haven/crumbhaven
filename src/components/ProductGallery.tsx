
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const scrollToThumbnail = (index: number) => {
    if (thumbnailsRef.current) {
      const thumbnailElements = thumbnailsRef.current.children;
      if (thumbnailElements[index]) {
        thumbnailElements[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    // Handle keyboard navigation for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape' && isEnlarged) {
        setIsEnlarged(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnlarged]);

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="product-image-container mb-4 aspect-square md:aspect-[4/5] overflow-hidden relative group">
        <img
          src={images[activeIndex]}
          alt={`${productName} - View ${activeIndex + 1}`}
          className={cn(
            "product-image w-full h-full object-cover transition-all duration-700",
            isEnlarged ? "cursor-zoom-out" : "cursor-zoom-in"
          )}
          onClick={() => setIsEnlarged(!isEnlarged)}
        />
        
        {/* Expand button */}
        <button 
          className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => setIsEnlarged(!isEnlarged)}
          aria-label={isEnlarged ? "Zoom out" : "Zoom in"}
        >
          <Expand size={18} />
        </button>
        
        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            className="p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="relative px-4">
        <div 
          ref={thumbnailsRef}
          className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar fade-mask"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <button
              key={index}
              className={cn(
                "flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-200",
                activeIndex === index 
                  ? "ring-2 ring-primary" 
                  : "opacity-70 hover:opacity-100"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            >
              <img
                src={src}
                alt={`${productName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Enlarged view */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsEnlarged(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={images[activeIndex]}
              alt={`${productName} - Enlarged view`}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-sm"
              onClick={() => setIsEnlarged(false)}
              aria-label="Close enlarged view"
            >
              <X size={20} />
            </button>
            
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    activeIndex === index 
                      ? "bg-primary w-4" 
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
