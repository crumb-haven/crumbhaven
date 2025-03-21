import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Logo } from "@/components/Logo";
import { featuredProduct, relatedProducts, companyInfo } from "@/data/products";

// Mock reviews data
const mockReviews = [
  {
    id: "rev1",
    author: "Alex M.",
    date: "1 month ago",
    rating: 5,
    title: "Best cookies I've ever had",
    comment: "These almond oat cookies are exceptional. The texture is perfectly balanced and the flavor is so authentic. I can tell they're made with quality ingredients and care. Will definitely be ordering again!",
    helpful: 24
  },
  {
    id: "rev2",
    author: "Sophia K.",
    date: "2 weeks ago",
    rating: 5,
    title: "Worth every penny",
    comment: "I was hesitant about the price at first, but after tasting these cookies, I understand why. The flavor is complex and delicious. This is not your average store-bought cookie!",
    helpful: 18
  },
  {
    id: "rev3",
    author: "Michael T.",
    date: "1 month ago",
    rating: 4,
    title: "Excellent texture and flavor",
    comment: "The cookies have an amazing texture and flavor. The only reason I'm giving 4 stars instead of 5 is that I wish the pack was a bit larger for the price. But quality-wise, it's top-notch.",
    helpful: 7
  },
  {
    id: "rev4",
    author: "Emma L.",
    date: "3 weeks ago",
    rating: 5,
    title: "Finally, cookies that don't upset my stomach!",
    comment: "I've had difficulty with processed cookies for years, but these are a game-changer. The clean ingredients seem to make all the difference. Delicious and easy on my digestive system!",
    helpful: 31
  },
  {
    id: "rev5",
    author: "David R.",
    date: "2 months ago",
    rating: 3,
    title: "Good, but arrived a bit crushed",
    comment: "The cookies themselves are delicious, but my package arrived with some broken pieces. I understand shipping cookies is challenging, but maybe the packaging could be improved? The taste is still excellent though.",
    helpful: 9
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <>
      <Helmet>
        <title>{featuredProduct.name} | {companyInfo.name}</title>
        <meta name="description" content={featuredProduct.description.substring(0, 155)} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div className="sticky top-24 h-fit max-h-[calc(100vh-180px)]">
            <ProductGallery 
              images={featuredProduct.images} 
              productName={featuredProduct.name} 
            />
          </div>
          
          {/* Product Info */}
          <div>
            <ProductInfo product={featuredProduct} />
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
                Reviews ({featuredProduct.reviewCount})
              </TabsTrigger>
              <TabsTrigger 
                value="about" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                About Crumb Haven
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
                    {featuredProduct.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {featuredProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Ingredients</h3>
                  <p>
                    Pure Desi Ghee, Whole Wheat Flour, Almonds, Oats, Honey, Natural Flavors.
                    No Palm Oil, No Preservatives, No Trans Fats, No Artificial Colors or Flavors.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Nutrition Facts</h3>
                  <div className="not-prose border border-border rounded-lg p-5 mt-4">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div className="text-sm">Serving Size</div>
                      <div className="text-sm font-medium">25g (2 cookies)</div>
                      
                      <div className="text-sm">Calories</div>
                      <div className="text-sm font-medium">120</div>
                      
                      <div className="text-sm">Total Fat</div>
                      <div className="text-sm font-medium">6g</div>
                      
                      <div className="text-sm">Saturated Fat</div>
                      <div className="text-sm font-medium">3g</div>
                      
                      <div className="text-sm">Trans Fat</div>
                      <div className="text-sm font-medium">0g</div>
                      
                      <div className="text-sm">Sodium</div>
                      <div className="text-sm font-medium">60mg</div>
                      
                      <div className="text-sm">Total Carbohydrates</div>
                      <div className="text-sm font-medium">16g</div>
                      
                      <div className="text-sm">Dietary Fiber</div>
                      <div className="text-sm font-medium">2g</div>
                      
                      <div className="text-sm">Sugars</div>
                      <div className="text-sm font-medium">8g</div>
                      
                      <div className="text-sm">Protein</div>
                      <div className="text-sm font-medium">3g</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0 animate-fade-in">
              <ReviewSection 
                reviews={mockReviews} 
                productRating={featuredProduct.rating} 
                reviewCount={featuredProduct.reviewCount} 
              />
            </TabsContent>
            
            <TabsContent value="about" className="mt-0 animate-fade-in">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">About Crumb Haven</h3>
                  <p>
                    {companyInfo.description}
                  </p>
                  
                  <h4 className="text-lg font-medium mt-6 mb-3">Our Commitment</h4>
                  <ul className="space-y-2">
                    {companyInfo.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-medium mt-6 mb-3">Our Story</h4>
                  <p>
                    Founded in {companyInfo.foundedYear}, Crumb Haven began with a simple mission: to create cookies that taste incredible while using only the purest, most wholesome ingredients. We believe that traditional methods and clean ingredients create the most satisfying treats.
                  </p>
                  <p>
                    Every batch of our cookies is prepared with care, using time-honored techniques and premium ingredients like pure desi ghee. Our dedication to quality means we never compromise with cheap alternatives like palm oil or artificial preservatives.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-0 animate-fade-in">
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                  <p>
                    We ship our fresh cookies nationwide, carefully packaged to ensure they arrive in perfect condition. Orders placed before 12pm EST are baked and shipped the same day (Monday-Friday). All other orders are processed the next business day.
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
                    For optimal freshness, store your cookies in a paper bag at room temperature for up to 3 days. For longer storage, slice and freeze in an airtight container for up to 3 months. To refresh, simply toast from frozen.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo size="large" className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Premium cookies crafted with pure desi ghee and wholesome ingredients. No preservatives, no trans fats, just pure goodness since {companyInfo.foundedYear}.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">All Products</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Almond Oat Cookies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Chocochip Brownie Cookies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Kodo Millet Cookies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Honey Oat Cookies</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Our Ingredients</a></li>
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
