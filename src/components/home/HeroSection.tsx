
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
    <section className="relative w-full h-[80vh] md:h-[90vh]">
      <div ref={swiperRef} className="swiper h-full w-full">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div key={slide.id} className="swiper-slide relative">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
                onError={(e: React.SyntheticEvent<HTMLDivElement>) => {
                  // @ts-ignore - Adding error handler for background image
                  e.currentTarget.style.backgroundImage = `url(${slide.fallbackImage || 'https://placehold.co/1200x800?text=Diamond+Garment'})`;
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-in">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link 
                        to={`/products?category=${slide.category}`} 
                        className="btn-primary"
                      >
                        View Products
                      </Link>
                      <Link 
                        to="/contact" 
                        className="btn-outline border-white text-white hover:bg-white hover:text-charcoal"
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
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev text-white"></div>
        <div className="swiper-button-next text-white"></div>
      </div>
    </section>
  );
};

export default HeroSection;
