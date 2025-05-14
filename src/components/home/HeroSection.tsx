
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Product categories with images and descriptions
const categories = [
  {
    id: 1,
    title: 'Hospital Wear',
    description: 'High quality medical uniforms and OT gowns for healthcare professionals',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=880&auto=format&fit=crop',
    category: 'hospital'
  },
  {
    id: 2,
    title: 'School Uniforms',
    description: 'Comfortable and durable uniforms for students of all age groups',
    image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=880&auto=format&fit=crop',
    category: 'school'
  },
  {
    id: 3,
    title: 'Sports Uniforms',
    description: 'Performance-enhancing sportswear for various games and activities',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=880&auto=format&fit=crop',
    category: 'sports'
  },
  {
    id: 4,
    title: 'Hotel Uniforms',
    description: 'Elegant and professional outfits for hospitality staff',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=880&auto=format&fit=crop',
    category: 'hotel'
  },
  {
    id: 5,
    title: 'Industrial Uniforms',
    description: 'Durable workwear designed for safety and comfort in industrial settings',
    image: 'https://images.unsplash.com/photo-1588544609750-6a3c8fbf27af?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?w=880&auto=format&fit=crop',
    category: 'industrial'
  },
  {
    id: 6,
    title: 'Scout & NCC',
    description: 'Official uniforms for Scout, Guide, and NCC cadets',
    image: 'https://images.unsplash.com/photo-1588347024214-25215297b426?q=80&w=880&auto=format&fit=crop',
    fallbackImage: 'https://images.unsplash.com/photo-1529333166437-7feb30b09970?w=880&auto=format&fit=crop',
    category: 'scout'
  }
];

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [autoplay, setAutoplay] = useState<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  // Handle image load errors and fallbacks
  const handleImageError = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      const img = document.getElementById(`category-image-${categoryId}`) as HTMLImageElement;
      if (img && category.fallbackImage) {
        img.src = category.fallbackImage;
      }
    }
  };

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 5000);
    
    setAutoplay(interval);
    
    return () => {
      if (autoplay) clearInterval(autoplay);
    };
  }, []);
  
  // Reset timer when manually changing
  const handleSetCategory = (index: number) => {
    if (autoplay) clearInterval(autoplay);
    setActiveCategory(index);
    
    const newInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 5000);
    
    setAutoplay(newInterval);
  };

  return (
    <section className="relative bg-gradient-to-br from-brand/5 via-background to-background overflow-hidden min-h-[85vh]">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
              </pattern>
            </defs>
            <rect fill="url(#pattern-circles)" width="100%" height="100%"></rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-7 items-center gap-8">
          {/* Left content - text and buttons */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand ring-1 ring-inset ring-brand/20">
                Diamond Garment
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Professional</span>
              <span className="block mt-1 text-brand">Uniform Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Crafting high-quality uniforms for schools, hospitals, hotels, industrial needs, and more since 1982.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right content - carousel */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Active image with animation */}
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-all duration-700",
                    activeCategory === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  )}
                >
                  {/* Background image with proper error handling */}
                  <div className="w-full h-[400px] md:h-[500px] relative">
                    <AspectRatio ratio={16/9} className="h-full">
                      <img
                        id={`category-image-${category.id}`}
                        src={category.image}
                        alt={category.title}
                        onError={() => handleImageError(category.id)}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                    </AspectRatio>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6 md:p-8">
                    <h3 className={cn(
                      "text-2xl md:text-3xl font-bold text-white transition-all duration-500 transform",
                      activeCategory === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}>
                      {category.title}
                    </h3>
                    <p className={cn(
                      "text-white/80 mt-2 max-w-md transition-all duration-500 delay-100 transform",
                      activeCategory === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}>
                      {category.description}
                    </p>
                    <div className={cn(
                      "mt-4 transition-all duration-500 delay-200 transform",
                      activeCategory === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}>
                      <Link 
                        to={`/products?category=${category.category}`} 
                        className="inline-flex items-center font-medium text-white hover:text-brand transition-colors"
                      >
                        View Collection <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleSetCategory(index)}
                  className={cn(
                    "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                    activeCategory === index 
                      ? "bg-brand scale-110" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View ${category.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-24 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
      <div className="absolute top-12 -right-12 w-32 h-32 bg-brand/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
