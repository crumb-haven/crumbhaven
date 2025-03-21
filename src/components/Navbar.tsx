
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { companyInfo } from '@/data/products';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled 
          ? "bg-background/80 shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Logo size="medium" />
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Shop
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Our Cookies
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-foreground/80" />
          </button>
          
          <button 
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Account"
          >
            <User className="h-5 w-5 text-foreground/80" />
          </button>
          
          <button 
            className="flex w-8 h-8 items-center justify-center rounded-full hover:bg-secondary transition-colors duration-200 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-foreground/80" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-accent text-[10px] font-medium text-white rounded-full">
              0
            </span>
          </button>
          
          <button 
            className="md:hidden flex w-8 h-8 items-center justify-center rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground/80" />
            ) : (
              <Menu className="h-5 w-5 text-foreground/80" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md border-t border-border animate-fade-in">
          <div className="container py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Cookies
              </Link>
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                className="flex items-center justify-center px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
              
              <button 
                className="flex items-center justify-center px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Account
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
