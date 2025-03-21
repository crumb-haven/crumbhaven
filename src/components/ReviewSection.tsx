
import { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Review } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ReviewSectionProps {
  reviews: Review[];
  productRating: number;
  reviewCount: number;
}

export function ReviewSection({ reviews, productRating, reviewCount }: ReviewSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());
  
  // Calculate rating distribution
  const ratingDistribution = [0, 0, 0, 0, 0]; // 5 stars to 1 star
  reviews.forEach(review => {
    ratingDistribution[5 - review.rating]++;
  });
  
  const visibleReviews = expanded ? reviews : reviews.slice(0, 3);
  
  const handleLikeReview = (reviewId: string) => {
    setLikedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Customer Reviews</h2>
      
      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row md:items-center gap-8 p-6 bg-secondary/50 rounded-2xl">
        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-baseline">
            <span className="text-4xl font-semibold mr-1">{productRating.toFixed(1)}</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={cn(
                  "w-4 h-4", 
                  i < Math.round(productRating) 
                    ? "text-accent fill-accent" 
                    : "text-muted"
                )} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{reviewCount} reviews</span>
        </div>
        
        <div className="flex-1 space-y-1.5">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingDistribution[5 - star];
            const percentage = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
            
            return (
              <div key={star} className="flex items-center text-sm">
                <div className="flex items-center w-16">
                  <span className="mr-1">{star}</span>
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                </div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right text-muted-foreground">
                  {percentage.toFixed(0)}%
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col space-y-3">
          <Button className="w-full bg-primary hover:bg-primary/90">
            <MessageSquare className="w-4 h-4 mr-2" />
            Write a Review
          </Button>
        </div>
      </div>
      
      {/* Review List */}
      <div className="space-y-4">
        {visibleReviews.map((review) => (
          <div key={review.id} className="review-card animate-fade-in">
            <div className="flex justify-between">
              <div>
                <div className="flex space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={cn(
                        "w-4 h-4", 
                        i < review.rating 
                          ? "text-accent fill-accent" 
                          : "text-muted"
                      )} 
                    />
                  ))}
                </div>
                <h3 className="font-semibold leading-snug">{review.title}</h3>
                <div className="text-sm text-muted-foreground mt-0.5">
                  <span className="font-medium">{review.author}</span>
                  <span className="mx-1.5">•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="mt-3 text-sm leading-relaxed">{review.comment}</p>
            
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/60">
              <button 
                className={cn(
                  "flex items-center text-sm transition-colors duration-200",
                  likedReviews.has(review.id) 
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => handleLikeReview(review.id)}
                aria-label={likedReviews.has(review.id) ? "Liked" : "Like this review"}
              >
                <ThumbsUp className="w-4 h-4 mr-1.5" />
                <span>Helpful</span>
                <span className="ml-1.5">({review.helpful + (likedReviews.has(review.id) ? 1 : 0)})</span>
              </button>
              
              <span className="text-xs text-muted-foreground">Verified Buyer</span>
            </div>
          </div>
        ))}
        
        {reviews.length > 3 && (
          <Button
            variant="outline"
            className="w-full mt-4 border-border"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show All Reviews ({reviews.length})
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
