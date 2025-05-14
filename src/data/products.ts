
export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features?: string[];
}

export const products: Product[] = [
  // Hospital Wear
  {
    id: 1,
    name: "OT Gowns",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "High-quality surgical gowns designed for comfort and protection in operating theaters.",
    features: [
      "Water-resistant fabric",
      "Breathable material",
      "Adjustable neck closure",
      "Available in multiple sizes",
      "Autoclavable"
    ]
  },
  {
    id: 2,
    name: "Doctor Coats",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1576671114149-c1320040b2b4?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Professional lab coats for doctors and medical staff with multiple pockets and durable fabric.",
    features: [
      "Premium cotton blend",
      "Multiple pocket design",
      "Stain-resistant",
      "Easy-care fabric",
      "Professional appearance"
    ]
  },
  {
    id: 3,
    name: "Scrub Sets",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Comfortable and durable scrub sets for healthcare professionals in various colors.",
    features: [
      "Lightweight fabric",
      "Elastic waistband",
      "Multiple color options",
      "Wrinkle-resistant",
      "Drawstring pants"
    ]
  },
  {
    id: 4,
    name: "Nurse Uniforms",
    category: "hospital",
    image: "https://images.unsplash.com/photo-1584634731339-252e168scheduling?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Professional and comfortable nurse uniforms designed for everyday hospital use.",
    features: [
      "Poly-cotton blend",
      "Functional pocket design",
      "Easy to launder",
      "Comfortable fit",
      "Professional appearance"
    ]
  },
  
  // School Uniforms
  {
    id: 5,
    name: "Boys' School Uniform",
    category: "school",
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Complete school uniform sets for boys including shirts, pants, and ties.",
    features: [
      "Durable poly-cotton blend",
      "Easy to maintain",
      "Stain-resistant",
      "Comfortable for all-day wear",
      "Available in all sizes"
    ]
  },
  {
    id: 6,
    name: "Girls' School Uniform",
    category: "school",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Complete school uniform sets for girls including pinafores, shirts, and accessories.",
    features: [
      "Crease-resistant fabric",
      "Adjustable features for growth",
      "Easy-care material",
      "Durable stitching",
      "Multiple style options"
    ]
  },
  {
    id: 7,
    name: "School Blazers",
    category: "school",
    image: "https://images.unsplash.com/photo-1562923094-7fd730524182?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Premium school blazers with custom embroidery options for school logos.",
    features: [
      "Premium polyester blend",
      "Custom embroidery available",
      "Lined interior",
      "Durable construction",
      "Professional appearance"
    ]
  },
  {
    id: 8,
    name: "P.E. Uniforms",
    category: "school",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Comfortable and durable physical education uniforms for school students.",
    features: [
      "Breathable fabric",
      "Quick-drying material",
      "Flexible design for movement",
      "Reinforced stitching",
      "Color-fast fabric"
    ]
  },
  
  // Sports Uniforms
  {
    id: 9,
    name: "Cricket Uniforms",
    category: "sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "High-performance cricket uniforms with moisture-wicking fabric for maximum comfort.",
    features: [
      "Moisture-wicking fabric",
      "UV protection",
      "Breathable material",
      "Custom team colors",
      "Durable construction"
    ]
  },
  {
    id: 10,
    name: "Football Kits",
    category: "sports",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Complete football kits including jerseys, shorts, and socks with customizable designs.",
    features: [
      "Quick-dry polyester",
      "Breathable mesh panels",
      "Custom sublimation printing",
      "Elastic waistband",
      "Team customization available"
    ]
  },
  {
    id: 11,
    name: "Basketball Uniforms",
    category: "sports",
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Lightweight and breathable basketball uniforms for teams and schools.",
    features: [
      "Lightweight performance fabric",
      "Moisture management system",
      "Reversible options available",
      "Custom numbering",
      "Reinforced seams"
    ]
  },
  {
    id: 12,
    name: "Track Suits",
    category: "sports",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Comfortable track suits for athletics and general sports activities.",
    features: [
      "Water-resistant outer layer",
      "Soft lining",
      "Zippered pockets",
      "Elastic cuffs",
      "Adjustable waistband"
    ]
  },
  
  // Hotel Uniforms
  {
    id: 13,
    name: "Front Desk Uniforms",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Professional and elegant front desk uniforms for hotel staff.",
    features: [
      "Wrinkle-resistant fabric",
      "Professional appearance",
      "Comfortable for long shifts",
      "Easy-care material",
      "Custom hotel branding available"
    ]
  },
  {
    id: 14,
    name: "Housekeeping Uniforms",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1596394723269-f2be5ffe7D96?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Practical and comfortable housekeeping uniforms for hotel cleaning staff.",
    features: [
      "Durable construction",
      "Stain-resistant fabric",
      "Multiple pockets for supplies",
      "Easy to launder",
      "Comfortable fit"
    ]
  },
  {
    id: 15,
    name: "Chef Coats & Aprons",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1556909114-44e3e9909e41?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Professional chef coats, hats, and aprons for kitchen staff with restaurant branding options.",
    features: [
      "Heat-resistant fabric",
      "Double-breasted design",
      "Stain-resistant treatment",
      "Breathable material",
      "Customizable with restaurant logo"
    ]
  },
  {
    id: 16,
    name: "Waiter Uniforms",
    category: "hotel",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Elegant and practical waiter and waitress uniforms for restaurant staff.",
    features: [
      "Stain-resistant fabric",
      "Professional appearance",
      "Comfortable for long shifts",
      "Multiple style options",
      "Customizable to restaurant theme"
    ]
  },
  
  // Industrial Uniforms
  {
    id: 17,
    name: "Factory Workwear",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1588544609750-6a3c8fbf27af?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Durable factory uniforms designed for safety and comfort in industrial environments.",
    features: [
      "Heavy-duty fabric",
      "Reinforced seams",
      "Safety reflective strips",
      "Multiple tool pockets",
      "Chemical resistant options"
    ]
  },
  {
    id: 18,
    name: "Mechanic Overalls",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Tough and practical mechanic overalls with multiple tool pockets and oil-resistant fabric.",
    features: [
      "Oil and grease resistant",
      "Multiple tool pockets",
      "Reinforced knee areas",
      "Adjustable fit",
      "Easy to clean"
    ]
  },
  {
    id: 19,
    name: "Safety Vests",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1563954415-29577e800572?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "High-visibility safety vests with reflective strips for industrial and construction workers.",
    features: [
      "High-visibility colors",
      "Reflective strips",
      "Lightweight mesh fabric",
      "Adjustable closures",
      "Meets safety standards"
    ]
  },
  {
    id: 20,
    name: "Workshop Uniforms",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1540374280160-79a29fd7338d?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Comfortable and practical workshop uniforms for various industrial applications.",
    features: [
      "Durable twill fabric",
      "Multiple pocket design",
      "Stain-resistant treatment",
      "Comfortable for all-day wear",
      "Company logo customization"
    ]
  },
  
  // Scout & NCC
  {
    id: 21,
    name: "Scout Uniforms",
    category: "scout",
    image: "https://images.unsplash.com/photo-1588347024214-25215297b426?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Official scout uniforms made according to regulation specifications.",
    features: [
      "Regulation-compliant design",
      "Durable cotton blend",
      "Official color specifications",
      "Multiple pocket design",
      "Badge attachment areas"
    ]
  },
  {
    id: 22,
    name: "NCC Uniforms",
    category: "scout",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240feedback?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Regulation NCC uniforms for cadets with proper specifications and detailing.",
    features: [
      "Official specification fabric",
      "Proper military detailing",
      "Reinforced stitching",
      "Correct insignia placement",
      "Regulation pockets and buttons"
    ]
  },
  {
    id: 23,
    name: "Guide Uniforms",
    category: "scout",
    image: "https://images.unsplash.com/photo-1532474807639-00e19a0d0015?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Official guide uniforms with proper badges and accessories.",
    features: [
      "Regulation design",
      "Quality fabric",
      "Correct color specification",
      "Badge attachment points",
      "Comfortable fit"
    ]
  },
  {
    id: 24,
    name: "Accessory Kit",
    category: "scout",
    image: "https://images.unsplash.com/photo-1584048766940-378a320b79b3?ixlib=rb-4.0.3&q=80&auto=format&fit=crop",
    description: "Complete accessory kits for scout and NCC uniforms including belts, caps, and badges.",
    features: [
      "Regulation belts",
      "Official caps",
      "Badge collection",
      "Shoulder straps",
      "Ceremonial accessories"
    ]
  }
];

export const categories = [
  { 
    id: "hospital", 
    name: "Hospital Wear", 
    description: "Uniforms for healthcare professionals",
    icon: "hospital"
  },
  { 
    id: "school", 
    name: "School Uniforms", 
    description: "Uniforms for educational institutions",
    icon: "school"
  },
  { 
    id: "sports", 
    name: "Sports Uniforms", 
    description: "Uniforms for various sports activities",
    icon: "sports"
  },
  { 
    id: "hotel", 
    name: "Hotel Uniforms", 
    description: "Uniforms for hospitality staff",
    icon: "hotel"
  },
  { 
    id: "industrial", 
    name: "Industrial Uniforms", 
    description: "Workwear for industrial environments",
    icon: "factory"
  },
  { 
    id: "scout", 
    name: "Scout & NCC", 
    description: "Uniforms for scouts, guides, and NCC cadets",
    icon: "scout"
  }
];
