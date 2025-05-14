
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Clock, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About Diamond Garment</h2>
          <div className="w-20 h-1 bg-brand mb-6"></div>
          <p className="text-gray-600 mb-4">
            Diamond Garment is a premier uniform manufacturing company located in Ichalkaranji, Maharashtra. 
            With years of experience in the textile industry, we've established ourselves as a trusted name in 
            providing high-quality uniforms for various sectors.
          </p>
          <p className="text-gray-600 mb-8">
            Our wide range of products includes hospital wear, school uniforms, sportswear, hotel uniforms, 
            industrial uniforms, and scout/guide/NCC outfits. We pride ourselves on using premium fabrics, 
            maintaining consistent quality, and delivering on time.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start">
              <CheckCircle className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Quality Materials</h4>
                <p className="text-sm text-gray-600">Premium fabrics for comfort and durability</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start">
              <Target className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Customization</h4>
                <p className="text-sm text-gray-600">Tailored solutions for your specific needs</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start">
              <Clock className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Timely Delivery</h4>
                <p className="text-sm text-gray-600">Committed to meeting deadlines</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start">
              <Award className="text-brand mr-3 h-6 w-6 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal mb-1">Competitive Pricing</h4>
                <p className="text-sm text-gray-600">Best quality at reasonable rates</p>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="btn-primary inline-flex items-center gap-2">
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=880&auto=format&fit=crop" 
              alt="Diamond Garment Workshop" 
              className="rounded-lg shadow-xl object-cover w-full h-[450px]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=880&auto=format&fit=crop";
                e.currentTarget.onerror = null;
              }}
            />
          </div>
          <div className="absolute top-10 -right-6 -bottom-6 left-10 border-4 border-brand rounded-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
