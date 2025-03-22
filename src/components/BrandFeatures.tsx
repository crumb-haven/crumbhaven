
import { CheckCircle2 } from 'lucide-react';

interface BrandFeaturesProps {
  className?: string;
  showTitle?: boolean;
}

export function BrandFeatures({ className, showTitle = true }: BrandFeaturesProps) {
  const features = [
    "100% Desi Ghee used",
    "No Palm Oil",
    "No Preservatives",
    "No Transfats",
    "Goodness of Oats, Millets and Nuts"
  ];

  return (
    <div className={`p-8 bg-gradient-to-br from-cream-100 to-sand-100 rounded-2xl shadow-product ${className}`}>
      {showTitle && (
        <h2 className="text-3xl font-serif font-semibold mb-6 text-primary">Why Choose Crumb Haven?</h2>
      )}
      
      <p className="text-muted-foreground mb-8 leading-relaxed">
        At Crumb Haven, we believe that healthy treats can be delicious too. Our cookies are crafted with care, 
        using only the finest ingredients to ensure you get the best taste without compromising on your well-being.
        We replace processed additives with nature's best, striking the perfect balance between taste and health.
        Every cookie is a testament to our commitment—where tradition meets health, and flavour never takes a backseat.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 bg-white/50 p-4 rounded-xl">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
