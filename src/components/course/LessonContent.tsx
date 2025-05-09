import React from 'react';
import { Check, Book, Sparkles, Palette, LayoutGrid } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
interface LessonContentProps {
  lessonKey: string;
}

// This component will render lesson content based on the provided key
const LessonContent: React.FC<LessonContentProps> = ({
  lessonKey
}) => {
  // Map of lesson content by key
  const lessonContent: Record<string, React.ReactNode> = {
    'lesson-setup-etsy': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Setting Up Your Etsy Account</h2>
        
        <div className="space-y-4">
          <p>
            Setting up your Etsy shop correctly from the start will save you headaches down the road. 
            In this lesson, we'll walk through the entire process of creating a professional Etsy 
            storefront that's optimized for POD products.
          </p>
          
          <h3 className="text-lg font-medium">Step 1: Create Your Account</h3>
          <p>Start by signing up for an Etsy account if you don't already have one. Create an email that you check regularly as this will be your primary contact for orders and customer service. We do not reccomend using your main email, as once you get lots of orders it will be flooded daily with order confirmations.</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to <a href="https://www.etsy.com/sell" className="text-primary underline" target="_blank" rel="noopener noreferrer">Etsy.com/sell</a></li>
            <li>Click "Get Started"</li>
            <li>Enter your email, name, and password</li>
            <li>Verify your email through the link Etsy sends you</li>
          </ol>
          
          <h3 className="text-lg font-medium">Step 2: Shop Preferences</h3>
          <p>
            Now it's time to set up your shop preferences. This includes your shop language, country, 
            and currency. These settings are important for how Etsy calculates your fees and taxes.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-medium text-slate-800">Pro Tip:</p>
            <p className="text-slate-700">
              Use the currency that matches your target audience's local currency. If you're targeting U.S. 
              customers, use USD. This reduces friction at checkout.
            </p>
          </div>
          
          <h3 className="text-lg font-medium">Step 3: Choose Your Shop Name</h3>
          <p>
            Your shop name is crucial for branding. Choose something memorable, easy to spell, and 
            related to your niche if possible. Your shop name can be up to 20 characters long and 
            cannot include spaces or special characters.
          </p>
          
          <p>If you're unsure, don't worry too much—you can change your shop name once after opening, and you can always request Etsy to change it again later. We reccomend utilizing ChatGPT by asking if for a list of different store names.</p>
          
          <h3 className="text-lg font-medium">Step 4: Create a Temporary Listing</h3>
          <p>
            During the setup process, Etsy will ask you to create your first listing. Since you're just getting started, we recommend creating a temporary placeholder listing that you'll delete later:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload any random photo (a nature photo, stock image, or anything non-copyrighted)</li>
            <li>Fill out the title with something generic like "Test Product - Coming Soon"</li>
            <li>Add a basic description saying your shop is under construction</li>
            <li>Set a random price (like $9.99) - it doesn't matter since you'll delete this listing</li>
            <li>Select random tags and categories to complete the form</li>
          </ul>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
            <p className="font-medium text-slate-800">Important:</p>
            <p className="text-slate-700">
              Delete this temporary listing immediately after your shop is fully set up. You don't want potential customers finding this placeholder item. You'll be charged a $0.20 listing fee, but this is unavoidable to create your shop.
            </p>
          </div>
          
          <h3 className="text-lg font-medium">Step 5: Set Up Payment Methods</h3>
          <p>
            Etsy offers several payment options. Etsy Payments is the most common and allows you to 
            accept credit cards, debit cards, Etsy gift cards, and more. You'll need to provide:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bank account information for deposits</li>
            <li>Credit card for Etsy fees (you can use the same bank account)</li>
            <li>Identity verification documents in some cases</li>
          </ul>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
          <h4 className="font-medium text-primary">Additional Resources</h4>
          <p className="text-slate-700">
            Remember to download the Etsy Setup Checklist in the resources section to ensure 
            you don't miss any important steps during setup.
          </p>
        </div>
      </div>,
    'lesson-branding': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Store Branding Essentials</h2>
        
        <div className="space-y-4">
          <p>
            Strong branding sets your POD store apart from thousands of others on Etsy. Let's create 
            a cohesive brand identity that will make your shop more memorable and professional.
          </p>
          
          <h3 className="text-lg font-medium">Step 1: Define Your Brand Identity</h3>
          <p>
            In this course, we'll be focusing on creating and selling t-shirts through your POD store, 
            though the same principles and processes can be applied to other clothing items like hoodies, 
            tank tops, or even non-clothing products later on.
          </p>
          <p>
            Before creating visual elements, you'll need to decide on your design approach:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Text-based designs:</strong> Simple phrases, quotes, or messages that resonate with your target audience</li>
            <li><strong>Graphic designs:</strong> Illustrations, patterns, or visual elements that attract attention</li>
            <li><strong>Mixed approach:</strong> Combining both text and graphics for more dynamic designs</li>
          </ul>
          <p>
            Don't worry if you're not sure yet—this course will teach you how to create both text and graphic designs, and you can always pivot or expand your offerings as you gain experience. For now, consider:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What makes your products unique?</li>
            <li>Who is your ideal customer?</li>
            <li>What tone do you want to convey? (Funny, serious, luxurious, casual, etc.)</li>
            <li>What values does your brand represent?</li>
          </ul>
          <p>
            A key part of our strategy will be researching successful Etsy stores to see what's already working 
            in the market. Remember, we're not looking to copy, but to understand patterns of success that we can 
            adapt and improve upon.
          </p>
          
          <h3 className="text-lg font-medium">Step 2: Create Your Logo & Color Palette</h3>
          <p>
            Your logo will appear in your shop icon, banner, and can be used on packaging inserts. 
            For POD shops, keep it simple but distinctive. A well-designed logo paired with a cohesive color palette
            reinforces your brand identity across all touchpoints.
          </p>
          
          <p>Here are some ways to create your logo and color scheme:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>ChatGPT:</strong> You can use ChatGPT to generate logo ideas and color palette suggestions with a simple prompt like: 
              "Create a logo concept for my t-shirt shop called [YOUR SHOP NAME] that focuses on [YOUR NICHE]. Also suggest a cohesive color palette of 2-3 primary colors and 2-3 complementary colors that would work well for my brand." This is a fast, free way to get professional concepts.</li>
            <li><strong>Canva:</strong> (free or premium) - Has templates and easy-to-use design tools</li>
            <li><strong>Looka:</strong> (paid) - AI-powered logo generator</li>
            <li><strong>Fiverr:</strong> Hire a designer for custom work</li>
          </ol>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-medium text-slate-800">Pro Tip:</p>
            <p className="text-slate-700">
              Your logo should work well in both color and black & white, and should be recognizable 
              even when small (like in the Etsy search results). For color palettes, try to include 
              at least one high-contrast color that can be used for call-to-action elements.
            </p>
          </div>
          
          <p>Resources for additional color palette inspiration:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Coolors.co</li>
            <li>Adobe Color</li>
            <li>Colormind.io</li>
          </ul>
          
          <h3 className="text-lg font-medium">Step 3: Design Your Shop Banner</h3>
          <p>
            Your Etsy shop banner is prime real estate. Use this space to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Showcase your best products</li>
            <li>Communicate your unique selling proposition</li>
            <li>Reinforce your brand colors and style</li>
          </ul>
          <p>
            Etsy banner dimensions: 1600px x 400px (cover photo) and 500px x 500px (shop icon)
          </p>
          
          <h3 className="text-lg font-medium">Step 4: Craft Your About Section</h3>
          <p>
            The About section builds customer trust. Include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your story and why you started your shop</li>
            <li>Your design process (without mentioning POD specifically)</li>
            <li>A professional photo of yourself (if you're comfortable)</li>
            <li>Your commitment to quality and customer satisfaction</li>
          </ul>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
            <p className="font-medium text-slate-800">Need help writing your About section?</p>
            <p className="text-slate-700">
              ChatGPT is excellent for creating personalized About sections. Try this prompt: "Write an engaging About section for my Etsy t-shirt shop called [SHOP NAME]. I focus on [NICHE/STYLE] designs for [TARGET AUDIENCE]. Include my passion for [YOUR INTEREST], my commitment to quality, and a warm, approachable tone. Keep it under 200 words and make it feel authentic."
            </p>
            <p className="text-slate-700 mt-2">
              After generating the text, customize it with personal details to make it truly yours. Customers can tell the difference between generic and authentic stories!
            </p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
          <h4 className="font-medium text-primary">Branding Exercise</h4>
          <p className="text-slate-700">
            Create a single-page brand document that includes your logo, color codes, font choices, and 
            3-5 adjectives that describe your brand's personality. This will keep your branding 
            consistent as you grow.
          </p>
        </div>
      </div>,
    'lesson-niche': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Choosing Your Niche</h2>
        <p className="text-slate-600">Find your starting point by identifying what's already working — and putting your own spin on it.</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Open Etsy in Incognito Mode</h3>
                <p className="text-slate-600">
                  Start with a clean slate by using an incognito or private browsing window. 
                  This ensures your results aren't influenced by your browsing history.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-3">
                  <p className="font-medium text-slate-800">Why incognito?</p>
                  <p className="text-slate-700">
                    This avoids showing previously clicked listings and ensures you're seeing fresh results,
                    just like a new potential customer would.
                  </p>
                </div>
                
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Open your browser and start a new incognito/private session</li>
                  <li>Go to <a href="https://www.etsy.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">Etsy.com</a></li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Search Niche Terms That Perform Well</h3>
                <p className="text-slate-600">
                  Search terms that are known to perform well for POD shirts. Pay attention to 
                  the most successful listings that appear.
                </p>
                
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-slate-100 px-4 py-2 font-medium text-slate-800 hover:bg-slate-200">
                    <span>Recommended Search Terms</span>
                    <span className="text-xs text-slate-500">(click to expand)</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-4 rounded-b-md border-x border-b border-slate-200">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Checkbox id="term1" />
                        <label htmlFor="term1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          "funny shirts"
                        </label>
                      </li>
                      <li className="flex items-center gap-2">
                        <Checkbox id="term2" />
                        <label htmlFor="term2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          "graphic tees"
                        </label>
                      </li>
                      <li className="flex items-center gap-2">
                        <Checkbox id="term3" />
                        <label htmlFor="term3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          "comfort colors shirts"
                        </label>
                      </li>
                      <li className="flex items-center gap-2">
                        <Checkbox id="term4" />
                        <label htmlFor="term4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          "viral t-shirts"
                        </label>
                      </li>
                      <li className="flex items-center gap-2">
                        <Checkbox id="term5" />
                        <label htmlFor="term5" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          "vintage aesthetic shirt"
                        </label>
                      </li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                
                <div className="mt-4">
                  <h4 className="font-medium text-slate-800 mb-2">Success Indicators to Look For:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Listings with the "Bestseller" tag</li>
                    <li>Stores with 4.8–5.0 average reviews and 100+ reviews total</li>
                    <li>Repeated themes or messages in different designs (e.g., "Boy Mom," "Be Kind," "Pickle Lover")</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Identify Themes That Keep Showing Up</h3>
                <p className="text-slate-600">
                  Take note of recurring patterns in successful listings. These patterns point to 
                  what customers are consistently buying.
                </p>
                
                <Accordion type="single" collapsible className="mt-2">
                  <AccordionItem value="recurring-topics">
                    <AccordionTrigger className="text-slate-800 hover:no-underline hover:text-primary">
                      Recurring Topics
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <p className="mb-2">Look for common themes like:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Teacher appreciation</li>
                        <li>Mom life (Boy Mom, Girl Mom, Dog Mom)</li>
                        <li>Bachelorette parties</li>
                        <li>Sobriety celebrations</li>
                        <li>Faith-based messaging</li>
                        <li>Dog/pet lovers</li>
                        <li>Specific hobbies or interests (fishing, camping, crafts)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="common-styles">
                    <AccordionTrigger className="text-slate-800 hover:no-underline hover:text-primary">
                      Common Design Styles
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Minimal text designs</li>
                        <li>Bold, statement typography</li>
                        <li>Retro/vintage aesthetics</li>
                        <li>Hand-drawn illustrations</li>
                        <li>Simple icon + text combinations</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="shirt-types">
                    <AccordionTrigger className="text-slate-800 hover:no-underline hover:text-primary">
                      Popular Shirt Types
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700">
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Comfort Colors brand</li>
                        <li>Gildan Heavy Cotton</li>
                        <li>Bella+Canvas soft tees</li>
                        <li>Oversized/boyfriend style shirts</li>
                        <li>Unisex fit options</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Start a Niche Research Sheet</h3>
                <p className="text-slate-600">
                  Organize your research findings in a document that you can reference as you build your store.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-3">
                  <h4 className="font-medium text-slate-800 mb-2">Your Research Sheet Should Track:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Niches that appear repeatedly in bestseller lists</li>
                    <li>Links to 5-10 successful stores you want to model after</li>
                    <li>Common design types that sell well in your chosen niche</li>
                    <li>Price ranges for top-selling items</li>
                    <li>Review counts on popular items (indicates sales volume)</li>
                  </ul>
                </div>
                
                <p className="text-slate-600">
                  You can use Google Sheets, Notion, or even a simple text document to track this information. 
                  The key is to be systematic in your research so you can identify clear patterns.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">5</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Choose a Starter Niche With Room to Grow</h3>
                <p className="text-slate-600">
                  Based on your research, select a niche that meets specific criteria for success.
                </p>
                
                <div className="mt-4">
                  <h4 className="font-medium text-slate-800 mb-2">Your Ideal Starter Niche Should:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-medium">Have proof of sales</span> - Look for bestseller tags and active reviews</li>
                    <li><span className="font-medium">Feel familiar or interesting to you</span> - You'll be designing a lot in this area</li>
                    <li><span className="font-medium">Not be overly saturated</span> - There should be room for your unique take</li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-4">
                  <p className="text-primary font-medium">Remember:</p>
                  <p className="text-slate-700">
                    "You don't need to invent a new trend — just add your own flavor to an existing one."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <Checkbox id="niche-complete" />
                <label htmlFor="niche-complete" className="text-lg font-medium text-green-800 cursor-pointer">
                  I've chosen my niche and added 3 stores to model in my research sheet.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>,
    'lesson-policies': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Setting Up Your Etsy Store Policies</h2>
        <p className="text-slate-600">Make sure your shop policies are clear, consistent, and seller-friendly — this helps protect you and sets proper expectations for customers.</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Navigate to Your Policy Settings</h3>
                <p className="text-slate-600">
                  Access your policy settings through your Etsy dashboard to configure your store's default rules.
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Go to your Etsy Seller Dashboard</li>
                  <li>Click on Settings (left-hand menu)</li>
                  <li>Select Policy Settings</li>
                </ol>
                
                <p className="text-slate-600 mt-2">
                  This is where you'll create your store's default policies — things like returns, 
                  cancellations, and shipping expectations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Set Up Returns & Exchanges</h3>
                <p className="text-slate-600">
                  Configure your returns and exchanges policy to protect yourself as a POD seller.
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Click "Create +" to add a new policy</li>
                  <li>Under Returns & Exchanges, select:
                    <div className="bg-slate-50 p-3 rounded-md mt-2">
                      <p className="font-medium">"I don't accept returns or exchanges"</p>
                    </div>
                  </li>
                </ol>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-3">
                  <p className="font-medium text-slate-800">Why?</p>
                  <p className="text-slate-700">
                    As a print-on-demand seller, every product is made to order and cannot be resold. 
                    Allowing returns or exchanges would result in losses since Printify doesn't accept 
                    them either.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 my-3">
                  <p className="text-primary font-medium">💡 Tip:</p>
                  <p className="text-slate-700">
                    You can still offer great customer service by handling issues with reprints if 
                    something arrives damaged or incorrect, but don't list returns as part of your 
                    official policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Set Up Cancellation Policy</h3>
                <p className="text-slate-600">
                  Create a time-limited cancellation window that works with your production timeline.
                </p>
                
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>In the Cancellation section, select:
                    <div className="bg-slate-50 p-3 rounded-md mt-2">
                      <p className="font-medium">"I accept cancellations within 6 hours"</p>
                    </div>
                  </li>
                </ol>
                
                <p className="text-slate-600 mt-2">
                  <span className="font-medium">Explanation:</span> Let customers cancel only within 6 hours of placing their order. 
                  After that, you'll be submitting the order to production via Printify, and once it's in 
                  production, it can't be canceled or refunded.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-3">
                  <p className="font-medium text-slate-800">✍️ Suggested cancellation message:</p>
                  <div className="bg-white p-3 rounded-md mt-2 border border-slate-200 italic">
                    "Cancellations are only accepted within 6 hours of ordering. After that, your item is sent 
                    to production and cannot be canceled due to the print-on-demand process."
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <Checkbox id="policies-complete" />
                <label htmlFor="policies-complete" className="text-lg font-medium text-green-800 cursor-pointer">
                  I've completed my Returns, Exchanges, and Cancellation policies and saved my default policy template.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>,
    'lesson-payment': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Setting Up Payment Methods</h2>
        <p>This lesson content is coming soon...</p>
      </div>,
    'lesson-target-audience': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Understanding Your Target Audience</h2>
        <p className="text-slate-600">Know who you're designing for — because shirts don't sell unless they connect with the right people.</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Look at What's Already Working</h3>
                <p className="text-slate-600">
                  Go back to the successful Etsy shops you found during your market research (stores with 100+ reviews 
                  and a strong 4.8+ rating). Look closely at:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>The tone and style of their designs</li>
                  <li>The types of shirts that are selling the most</li>
                  <li>The customer reviews — what are buyers saying?</li>
                </ul>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
                  <p className="font-medium text-slate-800">Ask yourself:</p>
                  <p className="text-slate-600 italic mt-1">
                    "Who is this shop speaking to? Moms? Teachers? Dog lovers? Millennials? Christians? Sarcastic introverts?"
                  </p>
                </div>
                
                <p className="text-slate-600">
                  Understanding who the successful shops are targeting will help you identify profitable audience segments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Decide on Your Design Style</h3>
                <p className="text-slate-600">
                  Now decide how you want to create your products. There are two common approaches:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800">Option A: Graphic Designs</h4>
                    <p className="text-slate-700 mt-2">
                      If you're using Canva, hiring designers, or buying graphics, you can make more artistic or illustrated shirts.
                    </p>
                    <div className="mt-3">
                      <p className="font-medium">Example Shop:</p>
                      <p className="text-primary font-medium flex items-center mt-1">
                        <span className="mr-1">👉</span> IkersonLTD on Etsy
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        This shop uses colorful, themed designs with custom graphics to target specific subcultures or hobbies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-medium text-slate-800">Option B: Simple Text-Based Designs</h4>
                    <p className="text-slate-700 mt-2">
                      If you're not confident with graphics, don't worry — text-based designs still dominate Etsy.
                    </p>
                    <div className="mt-3">
                      <p className="font-medium">Example Shop:</p>
                      <p className="text-primary font-medium flex items-center mt-1">
                        <span className="mr-1">👉</span> TheTinyThreadsCo
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        A perfect example of using clean fonts, smart messages, and color combos to create bestsellers.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
                  <p className="font-medium text-slate-800">Ask yourself:</p>
                  <p className="text-slate-600 italic mt-1">
                    "Do I want to focus on meaningful messages and aesthetics, or illustrated visuals?"
                  </p>
                  <p className="text-slate-600 mt-3">
                    Either route works — just match your style to the audience you're targeting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-medium">Define Your Ideal Customer (Optional)</h3>
                <p className="text-slate-600">
                  We recommend defining your ideal customer on paper or in a Google Doc rather than on this site. This keeps your notes accessible while you work on your shop.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
                  <h4 className="font-medium text-slate-800 mb-2">Customer Profile Suggestion:</h4>
                  <p className="text-slate-700">
                    Jot down the following information about your ideal customer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Age range</li>
                    <li>Gender (if relevant to your niche)</li>
                    <li>Interests and hobbies</li>
                    <li>Why they would wear your shirt (to express identity, humor, beliefs, etc.)</li>
                    <li>3 common phrases or trends they follow</li>
                  </ul>
                </div>
                
                <p className="text-slate-600 mt-4">
                  This step will guide your future design choices, fonts, colors, and even your SEO keywords. Keep your customer profile somewhere you can easily reference it when creating new designs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-3">Final Checklist:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="audience-review" />
                  <label htmlFor="audience-review" className="text-green-800 cursor-pointer">
                    I've reviewed 3 successful stores
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="design-style" />
                  <label htmlFor="design-style" className="text-green-800 cursor-pointer">
                    I've chosen my design style (graphics or text-based)
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="customer-profile" />
                  <label htmlFor="customer-profile" className="text-green-800 cursor-pointer">
                    I've created my Ideal Customer Profile (on paper or in a document)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    'lesson-design-principles': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Design Principles for POD</h2>
        <p className="text-slate-600">Create high-converting designs quickly — without being a graphic designer.</p>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-medium">Simple Sells Best</h3>
                <p className="text-slate-600">
                  One of the biggest beginner mistakes is trying to create "cool" designs that look 
                  like full-blown art projects. But in reality, simple text-based designs consistently 
                  outsell busy or over-designed shirts on Etsy.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="font-medium text-slate-800 mb-2">Why?</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>They're easier to read</li>
                    <li>They load faster in thumbnails</li>
                    <li>Customers relate to messages, not complexity</li>
                    <li>They're easier to scale with variations (mom → dog mom → auntie → mimi, etc.)</li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="font-medium text-primary mb-1">Key takeaway:</p>
                  <p className="text-slate-700">
                    Less is more. A clean font, centered text, and a funny or emotional message is 
                    often all you need to make a bestseller.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <LayoutGrid className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-medium">Create Designs That Scale</h3>
                <p className="text-slate-600">
                  To succeed in print-on-demand, you need to create lots of listings. That means 
                  your design strategy should be built for scale. Here's how:
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="font-medium text-slate-800 mb-2">Focus on design categories you can repeat with variations, such as:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">👩‍⚕️</span> 
                      <span>Professions: Teacher, Nurse, Esthetician, Realtor, SLP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">💍</span> 
                      <span>Weddings: Bride, Bridesmaid, Maid of Honor, Bachelorette Party</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">🧠</span> 
                      <span>Themes: Mental health, Faith-based, Mom life, Sports parents, Sobriety</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-slate-600">
                  You can design one phrase — like "Cool Mom Club" — and then easily turn it into:
                </p>
                
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  <li>Cool Dog Mom Club</li>
                  <li>Cool Aunt Club</li>
                  <li>Cool Teacher Club</li>
                  <li>Cool Bride Club</li>
                </ul>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-primary font-medium flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    This is how you build a store with 100+ listings without burning out.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Book className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-medium">Using ChatGPT to Create Shirt Graphics</h3>
                <p className="text-slate-600">
                  If you're not a designer — no problem. Here's how to use ChatGPT to help you generate 
                  custom designs or replicate a certain style.
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="font-medium text-slate-800 mb-2">👇 Step-by-Step for Graphic-Style Designs:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Screenshot a design from Etsy that's performing well</li>
                    <li>Upload the screenshot into ChatGPT (Vision Model)</li>
                    <li>Ask:
                      <div className="bg-white p-3 rounded-md mt-1 text-sm italic border border-slate-200">"Create a graphic similar to this picture that will be used on a shirt, make the background white, and make the graphic original."</div>
                    </li>
                    <li>Use ChatGPT's output as your base</li>
                    <li>Paste the result into Canva, Kittl, Figma, etc to build it out (Taught in next lesson)</li>
                    <li>Export the file and upload it to Printify (More on this in future steps, ignore for now)</li>
                  </ol>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">
                    ✅ You're not copying — you're studying what's working and putting your own spin on it.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-4">
                  <p className="font-medium text-primary mb-2">Pro Tip:</p>
                  <p className="text-slate-700">
                    Ask ChatGPT to give you 5–10 variations based on your niche. Example:
                  </p>
                  <div className="bg-white p-3 rounded-md mt-2 text-sm italic border border-slate-200">"Give me 10 different graphic designs for a Christian wedding niche in a vintage style."</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-3">Final Checklist:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="simple-designs" />
                  <label htmlFor="simple-designs" className="text-green-800 cursor-pointer">
                    I understand why simple designs convert better
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="niches" />
                  <label htmlFor="niches" className="text-green-800 cursor-pointer">
                    I picked 2–3 niches or categories I want to design for
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="chatgpt" />
                  <label htmlFor="chatgpt" className="text-green-800 cursor-pointer">
                    I've tried using ChatGPT to create at least one design based on a screenshot
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    // Add placeholder content for other lessons
    'default': <div className="space-y-6">
        <h2 className="text-xl font-semibold">Lesson Content</h2>
        <p>This lesson content is currently being developed and will be available soon.</p>
        <p>Check back in a few days to see the complete tutorial.</p>
      </div>
  };

  // Return the lesson content if it exists, otherwise return default content
  return lessonContent[lessonKey] || lessonContent.default;
};
export default LessonContent;