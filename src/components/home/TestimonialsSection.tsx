
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Patel",
    role: "Medical Director, City Hospital",
    quote: "Diamond Garment has provided our hospital with excellent quality medical uniforms. Their attention to detail and commitment to quality is unmatched. Highly recommended!",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=250&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mrs. Sunita Sharma",
    role: "Principal, Modern School",
    quote: "We've been working with Diamond Garment for our school uniforms for the past 5 years. Their uniforms are durable, comfortable, and always delivered on time.",
    image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?q=80&w=250&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Mr. Anand Joshi",
    role: "HR Manager, Grand Hotel",
    quote: "The hotel uniforms provided by Diamond Garment have been perfect for our staff. The quality is excellent and the designs are elegant and professional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Capt. Vikram Singh",
    role: "NCC Officer",
    quote: "Diamond Garment understands the specific requirements of NCC uniforms. The attention to detail in sticking to regulations while ensuring comfort is commendable.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=250&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.testimonials-pagination',
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
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
    <section className="py-16 bg-softgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <p className="section-subtitle text-center mx-auto">
          Hear from our satisfied clients about their experience with Diamond Garment
        </p>
        
        <div className="mt-12 relative">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper pb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-3">
                        <h4 className="font-bold text-charcoal">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-brand text-5xl mb-2">"</div>
                    <p className="text-gray-700 flex-grow">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonials-pagination text-center mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
