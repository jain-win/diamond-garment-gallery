
export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const galleryImages: GalleryImage[] = [
  // Hospital Wear
  {
    id: 1,
    title: "Doctor Coat",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1576671114149-c1320040b2b4?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Surgical Scrubs",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "OT Gown",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop"
  },
  
  // School Uniforms
  {
    id: 4,
    title: "Boys School Uniform",
    category: "school",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Girls School Uniform",
    category: "school",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Preschool Uniform",
    category: "school",
    image: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=880&auto=format&fit=crop"
  },
  
  // Sports Uniforms
  {
    id: 7,
    title: "Cricket Uniform",
    category: "sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Football Kit",
    category: "sports",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Track Suit",
    category: "sports",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=880&auto=format&fit=crop"
  },
  
  // Hotel Uniforms
  {
    id: 10,
    title: "Front Desk Staff",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Chef Coat",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1556909114-44e3e9909e41?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Waiter Uniform",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=880&auto=format&fit=crop"
  },
  
  // Industrial Uniforms
  {
    id: 13,
    title: "Factory Worker",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1588544609750-6a3c8fbf27af?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Mechanic Overall",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1605656816944-971cd5c1407f?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Safety Vest",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1563954415-29577e800572?q=80&w=880&auto=format&fit=crop"
  },
  
  // Scout & NCC
  {
    id: 16,
    title: "Scout Uniform",
    category: "scout",
    image: "https://images.unsplash.com/photo-1588347024214-25215297b426?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Guide Uniform",
    category: "scout",
    image: "https://images.unsplash.com/photo-1532474807639-00e19a0d0015?q=80&w=880&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "NCC Cadet",
    category: "scout",
    image: "https://images.unsplash.com/photo-1584048766940-378a320b79b3?q=80&w=880&auto=format&fit=crop"
  }
];
