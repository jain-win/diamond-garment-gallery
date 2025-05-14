
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  return (
    <section className="section-container bg-gray-50 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1 px-4 md:px-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-10 h-1 bg-brand rounded-full"></span>
            <span className="text-sm font-medium uppercase tracking-wider text-brand">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal leading-tight">
            Diamond Garment <span className="text-brand">Excellence</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Diamond Garment is a premier uniform manufacturing company located in Ichalkaranji, Maharashtra. 
            With years of experience in the textile industry, we've established ourselves as a trusted name in 
            providing high-quality uniforms for various sectors.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our wide range of products includes hospital wear, school uniforms, sportswear, hotel uniforms, 
            industrial uniforms, and scout/guide/NCC outfits. We pride ourselves on using premium fabrics, 
            maintaining consistent quality, and delivering on time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start">
              <CheckCircle className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Quality Materials</h4>
                <p className="text-sm text-gray-600">Premium fabrics for comfort and durability</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start">
              <Target className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Customization</h4>
                <p className="text-sm text-gray-600">Tailored solutions for your specific needs</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start">
              <Clock className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Timely Delivery</h4>
                <p className="text-sm text-gray-600">Committed to meeting deadlines</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start">
              <Award className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Competitive Pricing</h4>
                <p className="text-sm text-gray-600">Best quality at reasonable rates</p>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="btn-primary inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
        
        <div className="order-1 md:order-2 relative mb-10 md:mb-0 px-4 md:px-0">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
            <AspectRatio ratio={4/3}>
              <img 
                src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=880&auto=format&fit=crop" 
                alt="Diamond Garment Workshop" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=880&auto=format&fit=crop";
                  e.currentTarget.onerror = null;
                }}
              />
            </AspectRatio>
          </div>
          <div className="absolute top-10 -right-3 -bottom-6 left-10 border-4 border-brand rounded-xl -z-10 hidden md:block"></div>
          <div className="absolute -bottom-4 -right-4 bg-brand p-4 rounded-lg shadow-lg z-20 hidden md:block">
            <p className="text-white text-xl font-bold">Est. 2008</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
