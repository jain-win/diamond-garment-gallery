
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-brand">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Order Custom Uniforms?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today for a quote on high-quality uniforms tailored to your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products" 
            className="bg-white text-brand hover:bg-gray-100 rounded-md px-6 py-3 font-medium transition-all"
          >
            View Our Products
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-brand rounded-md px-6 py-3 font-medium transition-all"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
