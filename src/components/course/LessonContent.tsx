
import React from 'react';

interface LessonContentProps {
  lessonKey: string;
}

// This component will render lesson content based on the provided key
const LessonContent: React.FC<LessonContentProps> = ({ lessonKey }) => {
  // Map of lesson content by key
  const lessonContent: Record<string, React.ReactNode> = {
    'lesson-setup-etsy': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Setting Up Your Etsy Account</h2>
        
        <div className="space-y-4">
          <p>
            Setting up your Etsy shop correctly from the start will save you headaches down the road. 
            In this lesson, we'll walk through the entire process of creating a professional Etsy 
            storefront that's optimized for POD products.
          </p>
          
          <h3 className="text-lg font-medium">Step 1: Create Your Account</h3>
          <p>
            Start by signing up for an Etsy account if you don't already have one. Use an email 
            that you check regularly as this will be your primary contact for orders and customer service.
          </p>
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
          
          <p>
            If you're unsure, don't worry too much—you can change your shop name once after opening, 
            and you can always request Etsy to change it again later.
          </p>
          
          <h3 className="text-lg font-medium">Step 4: Stock Your Shop</h3>
          <p>
            For POD sellers, you'll want to prepare at least 5-10 designs before officially launching. 
            We'll cover design creation in later modules, but for now, understand that Etsy requires:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product photos (mockups)</li>
            <li>Product description</li>
            <li>Pricing information</li>
            <li>Shipping details</li>
            <li>Tags and categories</li>
          </ul>
          
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
      </div>
    ),
    'lesson-branding': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Store Branding Essentials</h2>
        
        <div className="space-y-4">
          <p>
            Strong branding sets your POD store apart from thousands of others on Etsy. Let's create 
            a cohesive brand identity that will make your shop more memorable and professional.
          </p>
          
          <h3 className="text-lg font-medium">Step 1: Define Your Brand Identity</h3>
          <p>
            Before creating visual elements, spend time defining what your brand stands for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>What makes your products unique?</li>
            <li>Who is your ideal customer?</li>
            <li>What tone do you want to convey? (Funny, serious, luxurious, casual, etc.)</li>
            <li>What values does your brand represent?</li>
          </ul>
          
          <h3 className="text-lg font-medium">Step 2: Create Your Logo</h3>
          <p>
            Your logo will appear in your shop icon, banner, and can be used on packaging inserts. 
            For POD shops, keep it simple but distinctive.
          </p>
          <p>Tools you can use to create a logo:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Canva (free or premium)</li>
            <li>Looka (paid)</li>
            <li>Fiverr (hire a designer)</li>
          </ol>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-medium text-slate-800">Pro Tip:</p>
            <p className="text-slate-700">
              Your logo should work well in both color and black & white, and should be recognizable 
              even when small (like in the Etsy search results).
            </p>
          </div>
          
          <h3 className="text-lg font-medium">Step 3: Choose Your Color Palette</h3>
          <p>
            Select 2-3 primary colors and 2-3 complementary colors for your brand. Consistency in 
            color use helps with brand recognition.
          </p>
          <p>Resources for color palette creation:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Coolors.co</li>
            <li>Adobe Color</li>
            <li>Colormind.io</li>
          </ul>
          
          <h3 className="text-lg font-medium">Step 4: Design Your Shop Banner</h3>
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
          
          <h3 className="text-lg font-medium">Step 5: Craft Your About Section</h3>
          <p>
            The About section builds customer trust. Include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your story and why you started your shop</li>
            <li>Your design process (without mentioning POD specifically)</li>
            <li>A professional photo of yourself (if you're comfortable)</li>
            <li>Your commitment to quality and customer satisfaction</li>
          </ul>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
          <h4 className="font-medium text-primary">Branding Exercise</h4>
          <p className="text-slate-700">
            Create a single-page brand document that includes your logo, color codes, font choices, and 
            3-5 adjectives that describe your brand's personality. This will keep your branding 
            consistent as you grow.
          </p>
        </div>
      </div>
    ),
    'lesson-niche': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Choosing Your Niche</h2>
        <p>This lesson content is coming soon...</p>
      </div>
    ),
    'lesson-payment': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Setting Up Payment Methods</h2>
        <p>This lesson content is coming soon...</p>
      </div>
    ),
    'lesson-target-audience': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Understanding Your Target Audience</h2>
        <p>This lesson content is coming soon...</p>
      </div>
    ),
    'lesson-design-principles': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Design Principles for POD</h2>
        <p>This lesson content is coming soon...</p>
      </div>
    ),
    // Add placeholder content for other lessons
    'default': (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Lesson Content</h2>
        <p>This lesson content is currently being developed and will be available soon.</p>
        <p>Check back in a few days to see the complete tutorial.</p>
      </div>
    )
  };

  // Return the lesson content if it exists, otherwise return default content
  return lessonContent[lessonKey] || lessonContent.default;
};

export default LessonContent;
