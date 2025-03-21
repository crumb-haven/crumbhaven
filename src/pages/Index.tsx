import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Logo } from "@/components/Logo";
import { Product, Review } from "@/types";

// Mock product data (will be replaced with Supabase data later)
const mockProduct: Product = {
  id: "organic-artisan-sourdough",
  name: "Organic Artisan Sourdough Bread",
  description: "Handcrafted with centuries-old tradition, our organic sourdough bread features a crisp crust and tender, airy interior with a distinctive tangy flavor. Made from organic flour, filtered water, and our house-cultivated starter—nothing more.",
  price: 12.99,
  discountedPrice: 9.99,
  images: [
    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  ],
  colors: [
    { id: "classic", name: "Classic", value: "#E8D7C1" },
    { id: "whole-wheat", name: "Whole Wheat", value: "#9D7E5D" },
    { id: "sesame", name: "Sesame", value: "#F4E9D7" }
  ],
  sizes: [
    { id: "small", name: "Small (500g)", availability: "available" },
    { id: "medium", name: "Medium (750g)", availability: "available" },
    { id: "large", name: "Large (1kg)", availability: "limited" },
    { id: "xl", name: "Extra Large (1.5kg)", availability: "unavailable" }
  ],
  features: [
    "Naturally leavened for 24+ hours",
    "No commercial yeast",
    "Organic ingredients",
    "Longer shelf life than commercial bread",
    "Easier to digest due to fermentation process"
  ],
  rating: 4.8,
  reviewCount: 128,
  stockStatus: "in-stock",
  isNew: true
};

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: "rev1",
    author: "Alex M.",
    date: "1 month ago",
    rating: 5,
    title: "Best bread I've ever had",
    comment: "This sourdough is exceptional. The crust is perfectly crisp and the inside is so tender and flavorful. I can tell it's made with quality ingredients and care. Will definitely be ordering again!",
    helpful: 24
  },
  {
    id: "rev2",
    author: "Sophia K.",
    date: "2 weeks ago",
    rating: 5,
    title: "Worth every penny",
    comment: "I was hesitant about the price at first, but after tasting it, I understand why. The flavor is complex and delicious, and it stays fresh for days. This is not your average grocery store bread!",
    helpful: 18
  },
  {
    id: "rev3",
    author: "Michael T.",
    date: "1 month ago",
    rating: 4,
    title: "Excellent texture and flavor",
    comment: "The bread has an amazing texture and flavor. The only reason I'm giving 4 stars instead of 5 is that I wish the loaf was a bit larger for the price. But quality-wise, it's top-notch.",
    helpful: 7
  },
  {
    id: "rev4",
    author: "Emma L.",
    date: "3 weeks ago",
    rating: 5,
    title: "Finally, bread that doesn't upset my stomach!",
    comment: "I've had difficulty digesting regular bread for years, but this sourdough is a game-changer. The long fermentation process seems to make all the difference. Delicious and easy on my digestive system!",
    helpful: 31
  },
  {
    id: "rev5",
    author: "David R.",
    date: "2 months ago",
    rating: 3,
    title: "Good, but arrived a bit crushed",
    comment: "The bread itself is delicious, but my loaf arrived slightly crushed on one side. I understand shipping bread is challenging, but maybe the packaging could be improved? The taste is still excellent though.",
    helpful: 9
  }
];

// Mock related products
const mockRelatedProducts: Product[] = [
  {
    id: "cinnamon-raisin-sourdough",
    name: "Cinnamon Raisin Sourdough",
    description: "Our classic sourdough infused with cinnamon and plump, juicy raisins.",
    price: 14.99,
    images: [
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [],
    sizes: [],
    features: [],
    rating: 4.7,
    reviewCount: 98,
    stockStatus: "in-stock"
  },
  {
    id: "rustic-baguette",
    name: "Rustic Baguette",
    description: "Traditional French-style baguette with a crispy crust and light, airy interior.",
    price: 8.99,
    discountedPrice: 6.99,
    images: [
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [],
    sizes: [],
    features: [],
    rating: 4.5,
    reviewCount: 76,
    stockStatus: "in-stock",
    isNew: true
  },
  {
    id: "multigrain-loaf",
    name: "Ancient Grain Multigrain Loaf",
    description: "Hearty multigrain bread made with five ancient grains for extra nutrition and flavor.",
    price: 12.99,
    images: [
      "https://images.unsplash.com/photo-1565181415-38786bf293ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [],
    sizes: [],
    features: [],
    rating: 4.8,
    reviewCount: 112,
    stockStatus: "in-stock"
  },
  {
    id: "olive-rosemary-sourdough",
    name: "Olive & Rosemary Sourdough",
    description: "Our signature sourdough loaded with Kalamata olives and fresh rosemary.",
    price: 15.99,
    images: [
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [],
    sizes: [],
    features: [],
    rating: 4.9,
    reviewCount: 87,
    stockStatus: "low-stock"
  },
  {
    id: "cranberry-walnut-loaf",
    name: "Cranberry Walnut Loaf",
    description: "Sweet dried cranberries and crunchy walnuts in a delicious artisan bread.",
    price: 14.99,
    discountedPrice: 12.99,
    images: [
      "https://images.unsplash.com/photo-1612203985729-90c22dfd1216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    colors: [],
    sizes: [],
    features: [],
    rating: 4.6,
    reviewCount: 65,
    stockStatus: "in-stock"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <>
      <Helmet>
        <title>{mockProduct.name} | Crumb Haven</title>
        <meta name="description" content={mockProduct.description.substring(0, 155)} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div className="sticky top-24 h-fit max-h-[calc(100vh-180px)]">
            <ProductGallery 
              images={mockProduct.images} 
              productName={mockProduct.name} 
            />
          </div>
          
          {/* Product Info */}
          <div>
            <ProductInfo product={mockProduct} />
          </div>
        </div>
        
        {/* Details & Reviews Tabs */}
        <div className="mt-16 border-t border-border pt-8">
          <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 w-full border-b border-border rounded-none bg-transparent h-auto p-0 space-x-8">
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Reviews ({mockProduct.reviewCount})
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-0 animate-fade-in">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">About the Product</h3>
                  <p>
                    Our Organic Artisan Sourdough Bread is the crown jewel of our bakery. Each loaf takes over 24 hours to create, using traditional methods that have been perfected over centuries. The long fermentation process develops complex flavors and creates a bread that's not only delicious but more digestible than commercial alternatives.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {mockProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Ingredients</h3>
                  <p>
                    Organic flour, filtered water, and our house-cultivated sourdough starter (wild yeast). No commercial yeast, no additives, no preservatives. Just real bread, as it should be.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Nutrition Facts</h3>
                  <div className="not-prose border border-border rounded-lg p-5 mt-4">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div className="text-sm">Serving Size</div>
                      <div className="text-sm font-medium">1 slice (50g)</div>
                      
                      <div className="text-sm">Calories</div>
                      <div className="text-sm font-medium">130</div>
                      
                      <div className="text-sm">Total Fat</div>
                      <div className="text-sm font-medium">1g</div>
                      
                      <div className="text-sm">Sodium</div>
                      <div className="text-sm font-medium">230mg</div>
                      
                      <div className="text-sm">Total Carbohydrates</div>
                      <div className="text-sm font-medium">28g</div>
                      
                      <div className="text-sm">Dietary Fiber</div>
                      <div className="text-sm font-medium">2g</div>
                      
                      <div className="text-sm">Sugars</div>
                      <div className="text-sm font-medium">0g</div>
                      
                      <div className="text-sm">Protein</div>
                      <div className="text-sm font-medium">4g</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0 animate-fade-in">
              <ReviewSection 
                reviews={mockReviews} 
                productRating={mockProduct.rating} 
                reviewCount={mockProduct.reviewCount} 
              />
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-0 animate-fade-in">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                  <p>
                    We ship our fresh bread nationwide, carefully packaged to ensure it arrives in perfect condition. Orders placed before 12pm EST are baked and shipped the same day (Monday-Friday). All other orders are processed the next business day.
                  </p>
                  
                  <h4 className="text-lg font-medium mt-6 mb-3">Shipping Methods</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <strong>Standard Shipping (2-4 business days):</strong> $5.99 or FREE on orders over $50
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <strong>Express Shipping (1-2 business days):</strong> $12.99
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Return Policy</h3>
                  <p>
                    We stand behind the quality of our products. If you're not completely satisfied with your purchase, please contact our customer service team within 24 hours of delivery.
                  </p>
                  
                  <p className="mt-4">
                    Due to the perishable nature of our products, we do not accept returns. However, if your order arrives damaged or is not up to our quality standards, we'll gladly issue a refund or send a replacement.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Storage Instructions</h3>
                  <p>
                    For optimal freshness, store your bread in a paper bag at room temperature for up to 3 days. For longer storage, slice and freeze in an airtight container for up to 3 months. To refresh, simply toast from frozen.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <RelatedProducts products={mockRelatedProducts} />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo size="large" className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Artisan bread and pastries, handcrafted with love and tradition since 2015.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">All Products</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Sourdough Bread</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Pastries</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Our Process</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Newsletter</h4>
              <p className="text-sm text-muted-foreground">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <div className="flex mt-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium rounded-r-lg hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Crumb Haven. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
