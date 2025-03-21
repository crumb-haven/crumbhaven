
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'h-12',     // Increased from h-8
    medium: 'h-16',    // Increased from h-10
    large: 'h-20'      // Increased from h-14
  };

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img 
        src="/lovable-uploads/9ec3da9e-0ee8-411a-8e68-5cc7023629e5.png" 
        alt="Crumb Haven" 
        className={`w-auto ${sizeClasses[size]}`}
      />
    </Link>
  );
}
