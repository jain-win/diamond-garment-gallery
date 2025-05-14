
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
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
  const [isHovering, setIsHovering] = useState(false);
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

  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (autoplay) {
      clearInterval(autoplay);
      setAutoplay(null);
    }
  };
  
  // Resume autoplay when not hovering
  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoplay();
  };
  
  // Start the autoplay interval
  const startAutoplay = () => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 5000);
    
    setAutoplay(interval);
    return interval;
  };
  
  // Handle automatic sliding
  useEffect(() => {
    const interval = startAutoplay();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);
  
  // Navigate to previous slide
  const prevSlide = () => {
    if (autoplay) clearInterval(autoplay);
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    if (!isHovering) startAutoplay();
  };
  
  // Navigate to next slide
  const nextSlide = () => {
    if (autoplay) clearInterval(autoplay);
    setActiveCategory((prev) => (prev + 1) % categories.length);
    if (!isHovering) startAutoplay();
  };
  
  // Click on indicator dot
  const handleSetCategory = (index: number) => {
    if (autoplay) clearInterval(autoplay);
    setActiveCategory(index);
    if (!isHovering) startAutoplay();
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-gradient-to-b from-background to-slate-50/50 flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[500px] w-[500px] -top-[250px] -right-[250px] bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute h-[400px] w-[400px] top-[50%] -left-[200px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute h-[300px] w-[300px] -bottom-[150px] right-[10%] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content - animated headings and CTA */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="overflow-hidden">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand ring-1 ring-inset ring-brand/20 animate-fade-in">
                Premium Quality Since 1982
              </span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block overflow-hidden">
                  <span className="block transform transition-transform duration-700 animate-slide-in">
                    Professional
                  </span>
                </span>
                <span className="block mt-1 text-brand overflow-hidden">
                  <span className="block transform transition-transform duration-700 delay-100 animate-slide-in">
                    Uniform Solutions
                  </span>
                </span>
              </h1>
              
              <div className="overflow-hidden">
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 transform transition-transform duration-700 delay-200 animate-slide-in">
                  Crafting high-quality uniforms for schools, hospitals, hotels, industrial needs, and more since 1982.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 transform transition-all duration-700 delay-300 animate-fade-in">
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-brand/20 hover:scale-105 transition-all">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:bg-brand/10 hover:text-brand hover:border-brand/20 transition-all">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right content - hero carousel */}
          <div className="lg:col-span-7 relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image slider */}
              <div className="relative w-full h-[450px] md:h-[550px]">
                {categories.map((category, index) => (
                  <div 
                    key={category.id}
                    className={cn(
                      "absolute inset-0 w-full h-full transition-all duration-1000",
                      activeCategory === index 
                        ? "opacity-100 transform scale-100" 
                        : "opacity-0 transform scale-110"
                    )}
                  >
                    <AspectRatio ratio={16/10} className="h-full">
                      <img
                        id={`category-image-${category.id}`}
                        src={category.image}
                        alt={category.title}
                        onError={() => handleImageError(category.id)}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />
                    </AspectRatio>
                    
                    {/* Text overlay with staggered animations */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      <div className={cn(
                        "transition-all duration-700 transform",
                        activeCategory === index 
                          ? "translate-y-0 opacity-100" 
                          : "translate-y-8 opacity-0"
                      )}>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                          {category.title}
                        </h3>
                        <p className="text-white/90 max-w-lg text-lg mb-6">
                          {category.description}
                        </p>
                        <Link 
                          to={`/products?category=${category.category}`} 
                          className="inline-flex items-center font-medium text-white bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full backdrop-blur-sm transition-all"
                        >
                          View Collection <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 gap-2">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleSetCategory(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeCategory === index 
                      ? "bg-brand w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View ${category.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
