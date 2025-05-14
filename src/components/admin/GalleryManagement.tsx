import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription 
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { categories } from '@/data/products';
import { galleryImages, type GalleryImage } from '@/data/gallery';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const GalleryManagement = () => {
  const [images, setImages] = useState<GalleryImage[]>([...galleryImages]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    image: '',
    category: 'hospital'
  });
  const { toast } = useToast();

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddImage = () => {
    const newImage = {
      ...formData,
      id: parseInt(Date.now().toString()),
    } as GalleryImage;

    setImages([...images, newImage]);
    setIsAddDialogOpen(false);
    resetForm();

    toast({
      title: "Image Added",
      description: "The image has been successfully added to the gallery."
    });
  };

  const handleEditImage = () => {
    if (!currentImage) return;

    const updatedImages = images.map(img => 
      img.id === currentImage.id ? { ...formData, id: parseInt(formData.id) } as GalleryImage : img
    );

    setImages(updatedImages);
    setIsEditDialogOpen(false);
    resetForm();

    toast({
      title: "Image Updated",
      description: "The gallery image has been successfully updated."
    });
  };

  const handleDeleteImage = () => {
    if (!currentImage) return;

    const filteredImages = images.filter(img => img.id !== currentImage.id);
    setImages(filteredImages);
    setIsDeleteDialogOpen(false);

    toast({
      title: "Image Deleted",
      description: "The image has been successfully removed from the gallery."
    });
  };

  const openEditDialog = (image: GalleryImage) => {
    setCurrentImage(image);
    setFormData({
      id: image.id.toString(),
      title: image.title,
      image: image.image,
      category: image.category
    });
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (image: GalleryImage) => {
    setCurrentImage(image);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      image: '',
      category: 'hospital'
    });
    setCurrentImage(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <Button 
          onClick={() => {
            resetForm();
            setIsAddDialogOpen(true);
          }}
        >
          Add New Image
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <div className="flex justify-center mb-8">
          <TabsList className="bg-softgray">
            <TabsTrigger value="all" className="px-4 py-2">All Images</TabsTrigger>
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
          <Select 
            value={activeCategory}
            onValueChange={setActiveCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={1}>
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/300x300?text=${encodeURIComponent("Image not available")}`;
                    }}
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white">
                  <div className="text-sm font-medium truncate">{image.title}</div>
                  <div className="text-xs opacity-80">
                    {categories.find(c => c.id === image.category)?.name || 'Uncategorized'}
                  </div>
                </div>
              </div>
              <div className="p-2 flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1 text-sm"
                  onClick={() => openEditDialog(image)}
                >
                  Edit
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex-1 text-red-500 hover:text-red-700 hover:bg-red-50 text-sm"
                  onClick={() => openDeleteDialog(image)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
          
          {filteredImages.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500">No images found in this category.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  resetForm();
                  if (activeCategory !== 'all') {
                    setFormData(prev => ({ ...prev, category: activeCategory }));
                  }
                  setIsAddDialogOpen(true);
                }}
                className="mt-4"
              >
                Add an Image
              </Button>
            </div>
          )}
        </div>
      </Tabs>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Image</DialogTitle>
            <DialogDescription>
              Add a new image to your gallery
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title">Image Title</label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="Enter image title"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="category">Category</label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="image">Image URL</label>
              <Input 
                id="image" 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange} 
                placeholder="Enter image URL"
              />
              {formData.image && (
                <div className="mt-2">
                  <AspectRatio ratio={1}>
                    <img 
                      src={formData.image} 
                      alt="Image preview" 
                      className="rounded-md object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/300x300?text=${encodeURIComponent("Image not available")}`;
                      }}
                    />
                  </AspectRatio>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddImage}>Add to Gallery</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Image</DialogTitle>
            <DialogDescription>
              Update the gallery image details
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title">Image Title</label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="Enter image title"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="category">Category</label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="image">Image URL</label>
              <Input 
                id="image" 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange} 
                placeholder="Enter image URL"
              />
              {formData.image && (
                <div className="mt-2">
                  <AspectRatio ratio={1}>
                    <img 
                      src={formData.image} 
                      alt="Image preview" 
                      className="rounded-md object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/300x300?text=${encodeURIComponent("Image not available")}`;
                      }}
                    />
                  </AspectRatio>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditImage}>Update Image</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Image</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{currentImage?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={handleDeleteImage}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryManagement;
