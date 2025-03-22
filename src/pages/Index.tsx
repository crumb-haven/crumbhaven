import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { BrandFeatures } from "@/components/BrandFeatures";
import { Logo } from "@/components/Logo";
import { relatedProducts, companyInfo, products } from "@/data/products";

// Use the first product as the featured product for reviews
const featuredProduct = products[0];

// Mock reviews data with Indian names
const mockReviews = [
  {
    id: "rev1",
    author: "Priya Sharma",
    date: "1 month ago",
    rating: 5,
    title: "Best cookies I've ever had",
    comment: "These almond oat cookies are exceptional. The texture is perfectly balanced and the flavor is so authentic. I can tell they're made with quality ingredients and care. Will definitely be ordering again!",
    helpful: 24
  },
  {
    id: "rev2",
    author: "Ananya Patel",
    date: "2 weeks ago",
    rating: 5,
    title: "Worth every penny",
    comment: "I was hesitant about the price at first, but after tasting these cookies, I understand why. The flavor is complex and delicious. This is not your average store-bought cookie!",
    helpful: 18
  },
  {
    id: "rev3",
    author: "Rahul Verma",
    date: "1 month ago",
    rating: 4,
    title: "Excellent texture and flavor",
    comment: "The cookies have an amazing texture and flavor. The only reason I'm giving 4 stars instead of 5 is that I wish the pack was a bit larger for the price. But quality-wise, it's top-notch.",
    helpful: 7
  },
  {
    id: "rev4",
    author: "Meera Iyer",
    date: "3 weeks ago",
    rating: 5,
    title: "Finally, cookies that don't upset my stomach!",
    comment: "I've had difficulty with processed cookies for years, but these are a game-changer. The clean ingredients seem to make all the difference. Delicious and easy on my digestive system!",
    helpful: 31
  },
  {
    id: "rev5",
    author: "Arjun Singh",
    date: "2 months ago",
    rating: 5,
    title: "Authentic taste, reminds me of homemade",
    comment: "These cookies remind me of the ones my grandmother used to make. The use of desi ghee makes all the difference. The texture is perfect - crisp on the outside, slightly chewy inside.",
    helpful: 16
  },
  {
    id: "rev6",
    author: "Kavita Desai",
    date: "3 weeks ago",
    rating: 5,
    title: "Perfect guilt-free snack",
    comment: "Love that these are made with clean ingredients. No preservatives, no palm oil - just wholesome goodness. And they taste amazing! Perfect with my evening chai.",
    helpful: 22
  },
  {
    id: "rev7",
    author: "Vikram Reddy",
    date: "1 month ago",
    rating: 5,
    title: "Great alternative to processed cookies",
    comment: "As someone who's health-conscious, I'm always looking for better alternatives to processed foods. These cookies are perfect - natural ingredients, no preservatives, and they taste amazing!",
    helpful: 19
  },
  {
    id: "rev8",
    author: "Deepa Gupta",
    date: "2 months ago",
    rating: 5,
    title: "Kids love them too!",
    comment: "I bought these for myself but my kids ended up loving them too! It's so nice to find a treat that's both delicious and made with quality ingredients I can feel good about giving to my family.",
    helpful: 27
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <>
      <Helmet>
        <title>Crumb Haven | Healthy Delicious Cookies</title>
        <meta name="description" content="At Crumb Haven, we craft cookies with pure desi ghee and wholesome ingredients. No preservatives, no trans fats, just pure goodness." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 container">
        {/* Brand Info - Full Width */}
        <div className="mb-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-primary">Crumb Haven</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Where Tradition Meets Health
              </p>
            </div>
            
            <div className="prose max-w-none text-muted-foreground">
              <p>
                {companyInfo.description}
              </p>
            </div>
            
            <BrandFeatures showTitle={false} />
          </div>
        </div>
        
        {/* Related Products (now as primary products showcase) */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-semibold mb-8">Our Special Cookies</h2>
          <RelatedProducts products={relatedProducts} />
        </div>
        
        {/* Details & Reviews Tabs */}
        <div className="mt-16 border-t border-border pt-8">
          <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 w-full border-b border-border rounded-none bg-transparent h-auto p-0 space-x-8">
              <TabsTrigger 
                value="details" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Our Story
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent bg-transparent p-0 pb-3 px-2 data-[state=active]:shadow-none text-base font-medium text-muted-foreground data-[state=active]:text-foreground transition-all"
              >
                Customer Reviews
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
                  <h3 className="text-xl font-semibold mb-4">About Crumb Haven</h3>
                  <p>
                    At Crumb Haven, we craft cookies that blend traditional methods with wholesome ingredients. Our commitment to purity means we use only the finest desi ghee, whole grains, and natural sweeteners.
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
            
            <TabsContent value="reviews" className="mt-0 animate-fade-in">
              <ReviewSection 
                reviews={mockReviews} 
                productRating={featuredProduct.rating} 
                reviewCount={featuredProduct.reviewCount} 
              />
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
