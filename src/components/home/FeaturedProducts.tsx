
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCategoryProps {
  title: string;
  image: string;
  fallbackImage?: string;
  category: string;
  className?: string;
}

const ProductCategory = ({ title, image, fallbackImage, category, className }: ProductCategoryProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackImage || `https://placehold.co/600x400?text=${encodeURIComponent(title)}`;
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg shadow-md group card-hover", className)}>
      <AspectRatio ratio={4/3}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
          onError={handleImageError}
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
      </AspectRatio>
    </div>
  );
};

const FeaturedProducts = () => {
  const categories = [
    {
      title: 'Hospital Wear',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=880&auto=format&fit=crop',
      category: 'hospital'
    },
    {
      title: 'School Uniforms',
      image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=880&auto=format&fit=crop',
      category: 'school'
    },
    {
      title: 'Sports Uniforms',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=880&auto=format&fit=crop',
      category: 'sports'
    },
    {
      title: 'Hotel Uniforms',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=880&auto=format&fit=crop',
      category: 'hotel'
    },
    {
      title: 'Industrial Uniforms',
      image: 'https://images.unsplash.com/photo-1588544609750-6a3c8fbf27af?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?w=880&auto=format&fit=crop',
      category: 'industrial'
    },
    {
      title: 'Scout & NCC',
      image: 'https://images.unsplash.com/photo-1588347024214-25215297b426?q=80&w=880&auto=format&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1529333166437-7feb30b09970?w=880&auto=format&fit=crop',
      category: 'scout'
    }
  ];

  return (
    <section className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Our Product Categories</h2>
        <div className="w-20 h-1 bg-brand mb-6 mx-auto"></div>
        <p className="text-lg text-gray-600">
          We manufacture high-quality uniforms for various industries and institutions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <ProductCategory 
            key={index}
            title={category.title} 
            image={category.image}
            fallbackImage={category.fallbackImage}
            category={category.category} 
            className={index === 1 ? "md:col-span-2 lg:col-span-1" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
