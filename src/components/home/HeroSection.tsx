
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import Swiper styles if not imported elsewhere
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
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
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade', // Add fade effect for smooth transitions
        speed: 1000, // Slow down the transition
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + ' w-3 h-3"></span>';
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: function(swiper) {
            setActiveSlide(swiper.realIndex);
          }
        }
      });
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 z-10"></div>
      
      <div ref={swiperRef} className="swiper h-full w-full">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={slide.id} className="swiper-slide relative">
              <div 
                className={cn(
                  "w-full h-full bg-cover bg-center transform transition-transform duration-1000",
                  activeSlide === index ? "scale-105" : "scale-100"
                )}
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                onError={(e: React.SyntheticEvent<HTMLDivElement>) => {
                  // @ts-ignore - Adding error handler for background image
                  e.currentTarget.style.backgroundImage = `url(${slide.fallbackImage || 'https://placehold.co/1200x800?text=Diamond+Garment'})`;
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center px-4 max-w-4xl z-20">
                    <h1 
                      className={cn(
                        "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4", 
                        "opacity-0 transform -translate-y-10 transition-all duration-1000",
                        activeSlide === index && "opacity-100 translate-y-0"
                      )}
                    >
                      {slide.title}
                    </h1>
                    <p 
                      className={cn(
                        "text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto",
                        "opacity-0 transform -translate-y-6 transition-all duration-1000 delay-300",
                        activeSlide === index && "opacity-100 translate-y-0"
                      )}
                    >
                      {slide.description}
                    </p>
                    <div 
                      className={cn(
                        "flex flex-col sm:flex-row justify-center gap-4",
                        "opacity-0 transform -translate-y-4 transition-all duration-1000 delay-500",
                        activeSlide === index && "opacity-100 translate-y-0"
                      )}
                    >
                      <Link 
                        to={`/products?category=${slide.category}`} 
                        className="btn-primary group relative overflow-hidden px-8 py-3 rounded-full"
                      >
                        <span className="relative z-10">View Products</span>
                        <span className="absolute inset-0 bg-brand-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        <ArrowRight className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
                      </Link>
                      <Link 
                        to="/contact" 
                        className="btn-outline border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 px-8 py-3 rounded-full"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced pagination and navigation */}
        <div className="swiper-pagination bottom-8"></div>
        <div className="swiper-button-prev text-white opacity-70 hover:opacity-100 transition-opacity left-8"></div>
        <div className="swiper-button-next text-white opacity-70 hover:opacity-100 transition-opacity right-8"></div>
      </div>
      
      {/* Hero bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;
