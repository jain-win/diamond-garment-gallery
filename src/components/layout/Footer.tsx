
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/c6f71c38-84db-4392-9e00-01dcf8bf1969.png" 
                alt="Diamond Garment Logo" 
                className="h-10 bg-white p-1 rounded-sm"
              />
              <div className="ml-3">
                <p className="font-bold text-sm md:text-base">DIAMOND GARMENT</p>
                <p className="text-xs text-brand">Manufacturer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Manufacturer of Hospital Wear and All Kinds of Uniforms
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-brand transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-brand transition-colors">About Us</Link>
              <Link to="/products" className="text-gray-400 hover:text-brand transition-colors">Products</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-brand transition-colors">Gallery</Link>
              <Link to="/contact" className="text-gray-400 hover:text-brand transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/products?category=hospital" className="text-gray-400 hover:text-brand transition-colors">Hospital Wear</Link>
              <Link to="/products?category=school" className="text-gray-400 hover:text-brand transition-colors">School Uniforms</Link>
              <Link to="/products?category=sports" className="text-gray-400 hover:text-brand transition-colors">Sports Uniforms</Link>
              <Link to="/products?category=hotel" className="text-gray-400 hover:text-brand transition-colors">Hotel Uniforms</Link>
              <Link to="/products?category=industrial" className="text-gray-400 hover:text-brand transition-colors">Industrial Uniforms</Link>
              <Link to="/products?category=scout" className="text-gray-400 hover:text-brand transition-colors">Scout/Guide/NCC</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">18/888/2 Jawahar Nagar,<br />Near Postoffice, Station Road,<br />Ichalkaranji, Maharashtra - 416115</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9175334556" className="text-gray-400 hover:text-brand">+91 75334 556</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917020460115" className="text-gray-400 hover:text-brand">+91 70204 60115</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:diamondgarment115@gmail.com" className="text-gray-400 hover:text-brand truncate">diamondgarment115@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Diamond Garment. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-xs">
              Design by <a href="#" className="text-brand hover:underline">Diamond Garment</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
