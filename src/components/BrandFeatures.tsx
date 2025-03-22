
import { CheckCircle2 } from 'lucide-react';

interface BrandFeaturesProps {
  className?: string;
}

export function BrandFeatures({ className }: BrandFeaturesProps) {
  const features = [
    "100% Desi Ghee used",
    "No Palm Oil",
    "No Preservatives",
    "No Transfats",
    "Goodness of Oats, Millets and Nuts"
  ];

  return (
    <div className={`my-8 p-6 bg-secondary/50 rounded-2xl ${className}`}>
      <h2 className="text-2xl font-semibold mb-4">Why Choose Crumb Haven?</h2>
      <p className="text-muted-foreground mb-6">
        At Crumb Haven, we believe that healthy treats can be delicious too. Our cookies are crafted with care, 
        using only the finest ingredients to ensure you get the best taste without compromising on your well-being.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
