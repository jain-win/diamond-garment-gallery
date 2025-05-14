
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCategoryProps {
  title: string;
  image: string;
  category: string;
  className?: string;
}

const ProductCategory = ({ title, image, category, className }: ProductCategoryProps) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg shadow-md group h-64", className)}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <Link 
          to={`/products?category=${category}`} 
          className="bg-brand hover:bg-brand-dark text-white rounded-md px-4 py-2 text-sm transition-all transform hover:-translate-y-1"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="section-container">
      <h2 className="section-title text-center">Our Product Categories</h2>
      <p className="section-subtitle text-center mx-auto">
        We manufacture high-quality uniforms for various industries and institutions
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ProductCategory 
          title="Hospital Wear" 
          image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop" 
          category="hospital" 
        />
        <ProductCategory 
          title="School Uniforms" 
          image="https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=880&auto=format&fit=crop" 
          category="school" 
          className="md:col-span-2 lg:col-span-1"
        />
        <ProductCategory 
          title="Sports Uniforms" 
          image="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=880&auto=format&fit=crop" 
          category="sports" 
          className="lg:col-span-1"
        />
        <ProductCategory 
          title="Hotel Uniforms" 
          image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=880&auto=format&fit=crop" 
          category="hotel"
        />
        <ProductCategory 
          title="Industrial Uniforms" 
          image="https://images.unsplash.com/photo-1588544609750-6a3c8fbf27af?q=80&w=880&auto=format&fit=crop" 
          category="industrial"
        />
        <ProductCategory 
          title="Scout & NCC" 
          image="https://images.unsplash.com/photo-1588347024214-25215297b426?q=80&w=880&auto=format&fit=crop" 
          category="scout"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
