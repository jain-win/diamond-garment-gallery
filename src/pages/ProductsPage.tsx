
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from "../components/layout/Layout";
import { products, categories, type Product } from '../data/products';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
    
    // Update URL with the category parameter
    if (activeCategory !== 'all') {
      navigate(`/products?category=${activeCategory}`, { replace: true });
    } else {
      navigate('/products', { replace: true });
    }
  }, [activeCategory, navigate]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleEnquireClick = (product: Product) => {
    navigate(`/contact?product=${product.name}`);
  };
  
  return (
    <Layout>
      <div className="bg-softgray py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-charcoal">Our Products</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Discover our wide range of high-quality uniforms designed for various industries and institutions
          </p>
        </div>
      </div>
      
      <section className="section-container">
        <Tabs defaultValue={activeCategory} onValueChange={handleCategoryChange} value={activeCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-softgray">
              <TabsTrigger value="all" className="px-4 py-2">All Products</TabsTrigger>
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="px-4 py-2 hidden md:inline-flex"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <div className="block md:hidden mb-8">
            <select 
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="all">All Products</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onEnquire={handleEnquireClick} 
                />
              ))}
            </div>
          </TabsContent>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onEnquire={handleEnquireClick} 
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      
      <section className="py-16 bg-brand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Uniforms?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We offer customized uniform solutions tailored to your specific requirements
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-white text-brand hover:bg-gray-100 rounded-md px-8 py-6 h-auto font-medium transition-all"
          >
            Contact Us for Custom Orders
          </Button>
        </div>
      </section>
    </Layout>
  );
};

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

const ProductCard = ({ product, onEnquire }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-charcoal">{product.name}</h3>
          <span className={cn(
            "text-xs font-medium py-1 px-2 rounded-full",
            product.category === 'hospital' && "bg-blue-100 text-blue-800",
            product.category === 'school' && "bg-green-100 text-green-800",
            product.category === 'sports' && "bg-orange-100 text-orange-800",
            product.category === 'hotel' && "bg-purple-100 text-purple-800",
            product.category === 'industrial' && "bg-yellow-100 text-yellow-800",
            product.category === 'scout' && "bg-red-100 text-red-800"
          )}>
            {categories.find(c => c.id === product.category)?.name}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={() => onEnquire(product)}
            className="flex-1 bg-brand hover:bg-brand-dark text-white"
          >
            Enquire Now
          </Button>
          <Button 
            asChild
            variant="outline"
            className="flex-1 border-brand text-brand hover:bg-brand-light"
          >
            <a href={`tel:+9175334556`}>Order via Call</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
