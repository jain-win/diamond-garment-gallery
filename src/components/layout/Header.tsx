
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c6f71c38-84db-4392-9e00-01dcf8bf1969.png" 
            alt="Diamond Garment Logo" 
            className="h-8 sm:h-10 md:h-12"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://placehold.co/200x80?text=Diamond+Garment";
            }}
          />
          <div className="ml-2 md:ml-3">
            <p className="font-bold text-xs sm:text-sm md:text-lg text-charcoal">DIAMOND GARMENT</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-brand">Manufacturer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "nav-link font-medium relative",
                isActive(item.path) ? "active text-brand" : "",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300",
                isActive(item.path) ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[calc(var(--header-height,60px))] left-0 right-0 bg-white shadow-md transition-transform transform md:hidden z-40",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
        style={{ 
          '--header-height': isMobile ? '60px' : '80px'
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2 max-h-[calc(100vh-60px)] overflow-y-auto">
          {navigationItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={cn(
                "py-3 px-4 rounded transition-colors text-base",
                isActive(item.path) ? "bg-brand-light text-brand font-medium" : "hover:bg-gray-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
