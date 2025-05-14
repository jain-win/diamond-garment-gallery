
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-container bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About Diamond Garment</h2>
          <p className="text-gray-600 mb-4">
            Diamond Garment is a premier uniform manufacturing company located in Ichalkaranji, Maharashtra. 
            With years of experience in the textile industry, we've established ourselves as a trusted name in 
            providing high-quality uniforms for various sectors.
          </p>
          <p className="text-gray-600 mb-6">
            Our wide range of products includes hospital wear, school uniforms, sportswear, hotel uniforms, 
            industrial uniforms, and scout/guide/NCC outfits. We pride ourselves on using premium fabrics, 
            maintaining consistent quality, and delivering on time.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-softgray p-4 rounded-lg">
              <h4 className="font-bold text-brand">Quality Materials</h4>
              <p className="text-sm text-gray-600">Premium fabrics for comfort and durability</p>
            </div>
            <div className="bg-softgray p-4 rounded-lg">
              <h4 className="font-bold text-brand">Customization</h4>
              <p className="text-sm text-gray-600">Tailored solutions for your specific needs</p>
            </div>
            <div className="bg-softgray p-4 rounded-lg">
              <h4 className="font-bold text-brand">Timely Delivery</h4>
              <p className="text-sm text-gray-600">Committed to meeting deadlines</p>
            </div>
            <div className="bg-softgray p-4 rounded-lg">
              <h4 className="font-bold text-brand">Competitive Pricing</h4>
              <p className="text-sm text-gray-600">Best quality at reasonable rates</p>
            </div>
          </div>
          
          <Link to="/about" className="btn-primary">Learn More About Us</Link>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=880&auto=format&fit=crop" 
              alt="Diamond Garment Workshop" 
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
          </div>
          <div className="absolute top-10 -right-6 -bottom-6 left-10 border-4 border-brand rounded-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
