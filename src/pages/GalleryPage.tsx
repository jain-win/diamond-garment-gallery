
import { useState } from 'react';
import Layout from "../components/layout/Layout";
import { galleryImages, type GalleryImage } from '../data/gallery';
import { categories } from '../data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <Layout>
      <div className="bg-softgray py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-charcoal">Gallery</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Browse our collection of high-quality uniforms made for various sectors
          </p>
        </div>
      </div>
      
      <section className="section-container">
        <Tabs defaultValue="all" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-softgray">
              <TabsTrigger value="all" className="px-4 py-2">All Categories</TabsTrigger>
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
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <div className="gallery-masonry">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="break-inside-avoid mb-4 cursor-pointer transform transition-transform hover:scale-[1.01]"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                    <p className="text-white/80 text-sm">
                      {categories.find(c => c.id === image.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs>
      </section>
      
      {/* Lightbox */}
      <div 
        className={cn(
          "lightbox",
          lightboxImage && "active"
        )}
        onClick={closeLightbox}
      >
        {lightboxImage && (
          <div className="relative">
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title} 
              className="lightbox-img"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GalleryPage;
