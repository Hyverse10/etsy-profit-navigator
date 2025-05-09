import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

const SEOTool = () => {
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Helper function to capitalize every word
  const capitalizeEveryWord = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Helper function to ensure title is exactly within character limits
  const truncateToCharLimit = (title: string, minLimit: number, maxLimit: number): string => {
    if (title.length <= maxLimit && title.length >= minLimit) return title;
    
    if (title.length < minLimit) {
      // Add SEO-friendly generic terms if too short
      const fillers = [
        "Perfect Gift Idea", 
        "Trending Design", 
        "Custom Graphic Apparel",
        "Popular Style", 
        "Best Seller Item"
      ];
      
      let extendedTitle = title;
      let i = 0;
      while (extendedTitle.length < minLimit && i < fillers.length) {
        extendedTitle += `, ${fillers[i]}`;
        i++;
      }
      return extendedTitle;
    }
    
    // If too long, truncate at a comma if possible
    if (title.length > maxLimit) {
      const lastCommaPosition = title.substring(0, maxLimit - 3).lastIndexOf(',');
      if (lastCommaPosition > 100) {
        return title.substring(0, lastCommaPosition) + '...';
      }
      // Otherwise just truncate with ellipsis
      return title.substring(0, maxLimit - 3) + '...';
    }
    
    return title;
  };

  // Function to generate unique search-friendly title variations
  const generateTitleVariations = (keywordLower: string): string[] => {
    // Base variations that can be mixed and matched
    const commonVariations = [
      "Trending", "Custom", "Unique", "Bestselling", "Popular",
      "Aesthetic", "Gift Idea", "Premium", "Special", "Classic"
    ];
    
    // Product types
    const productTypes = [
      "Shirt", "T-Shirt", "Tee", "Graphic Tee", "Apparel", 
      "Top", "Gift", "Present", "TShirt", "Clothing"
    ];
    
    // Audience qualifiers
    const audienceQualifiers = [
      "for Women", "for Men", "for Her", "for Him", "for Adults",
      "Unisex", "Perfect for", "Birthday", "Holiday", "Christmas"
    ];
    
    // Category-specific variations
    let categorySpecific: string[] = [];
    
    if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
      categorySpecific = [
        "Mom Life", "Mother's Gift", "Mama", "Boy Mom", 
        "Girl Mom", "Mom Squad", "Motherhood", "Mom Crew",
        "Super Mom", "Cool Mom", "Best Mom Ever"
      ];
    } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
      categorySpecific = [
        "Dad Life", "Father's Gift", "Papa", "Dad Joke",
        "Girl Dad", "Boy Dad", "Fatherhood", "Dad Crew",
        "Super Dad", "Best Dad Ever", "Dad Squad"
      ];
    } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
      categorySpecific = [
        "Bride To Be", "Wedding Day", "Bachelorette Party",
        "Bridal Squad", "Team Bride", "Future Mrs", "Just Married",
        "Bridal Shower", "Wedding Gift", "Bride Tribe"
      ];
    } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
      categorySpecific = [
        "Faith Based", "Christian Faith", "Bible Verse",
        "Religious Gift", "Church Group", "Faith Community",
        "Prayer", "Worship", "Scripture", "Spiritual"
      ];
    } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
      categorySpecific = [
        "Humorous", "Sarcastic", "Witty", "Joke",
        "Meme Inspired", "Hilarious", "Fun", "Comedic",
        "Gag Gift", "Novelty", "Conversation Starter"
      ];
    } else {
      // Generic but still SEO-friendly
      categorySpecific = [
        "Everyday Wear", "Statement", "Conversation Starter",
        "High Quality", "Must-Have", "Essential", "Fan Favorite",
        "Casual", "Versatile", "Comfort", "Stylish"
      ];
    }
    
    // Create a pool of all possible variations to pick from
    const allVariations = [...commonVariations, ...categorySpecific];
    
    // Shuffle the arrays to ensure random combinations
    const shuffled = [...allVariations].sort(() => 0.5 - Math.random());
    const shuffledProducts = [...productTypes].sort(() => 0.5 - Math.random());
    const shuffledAudience = [...audienceQualifiers].sort(() => 0.5 - Math.random());
    
    // Return a sufficient number of variations to build a title
    return shuffled.slice(0, 6).concat(
      shuffledProducts.slice(0, 3),
      shuffledAudience.slice(0, 3)
    );
  };
  
  const generateSEO = () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword phrase");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      // Extract and process keyword
      const capitalizedKeyword = capitalizeEveryWord(keyword);
      const keywordLower = keyword.toLowerCase();
      
      // Start with base title using the keyword
      let baseTitle = `Comfort Colors® ${capitalizedKeyword}`;
      
      // Get variations specific to this keyword
      const variations = generateTitleVariations(keywordLower);
      
      // Build title by adding variations until close to target length
      let generatedTitle = baseTitle;
      let index = 0;
      
      while (generatedTitle.length < 130 && index < variations.length) {
        generatedTitle += `, ${variations[index]}`;
        index++;
      }
      
      // Ensure title is exactly between 138-140 characters
      generatedTitle = truncateToCharLimit(generatedTitle, 138, 140);
      
      setTitle(generatedTitle);
      
      // Generate 13 tags (max 20 characters each) - ensure variety and relevance
      let generatedTags: string[] = [];
      
      // Always include the main keyword as first tag if it's under 20 chars
      const mainTag = keywordLower.substring(0, 20);
      generatedTags.push(mainTag);
      
      // Create tag pool based on keyword category
      let tagPool: string[] = [];
      
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        tagPool = [
          "mom gift", "mom shirt", "mom life", "mother gift", "mama shirt",
          "motherhood", "mothers day gift", "gift for her", "mom tshirt",
          "comfort colors", "trendy mom shirt", "mom squad", "boy mom",
          "girl mom", "mom humor", "cool mom", "mama bear", "mommy shirt"
        ];
      } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
        tagPool = [
          "dad gift", "dad shirt", "dad life", "father gift", "papa shirt",
          "fatherhood", "fathers day gift", "gift for him", "dad tshirt",
          "comfort colors", "dad joke", "dad squad", "girl dad", "boy dad",
          "cool dad", "papa bear", "daddy shirt", "father's day"
        ];
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        tagPool = [
          "bride gift", "wedding shirt", "bridal party", "bride to be",
          "bachelorette", "future mrs", "wedding gift", "bridal shower",
          "comfort colors", "bride tee", "wedding party", "bride tribe",
          "engagement gift", "just married", "team bride", "bridesmaid gift"
        ];
      } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
        tagPool = [
          "christian gift", "jesus shirt", "faith tshirt", "religious gift",
          "bible verse", "christian tee", "comfort colors", "church shirt",
          "faith gift", "religious", "christian", "inspirational", "scripture",
          "worship", "prayer", "spiritual", "believe", "faith based"
        ];
      } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
        tagPool = [
          "funny gift", "humor shirt", "funny tshirt", "joke gift",
          "sarcastic tee", "funny saying", "comfort colors", "meme shirt",
          "novelty gift", "funny quote", "gag gift", "hilarious", "witty",
          "comedy", "fun shirt", "conversation", "sarcasm", "amusing"
        ];
      } else {
        tagPool = [
          "gift for her", "gift for him", "graphic tee", "comfort colors",
          "trendy shirt", "vintage shirt", "birthday gift", "unisex tshirt",
          "garment dyed", "gift idea", "custom shirt", "statement tee",
          "fashion gift", "retro style", "aesthetic", "casual top", "premium",
          "everyday wear", "essential", "streetwear", "popular", "bestseller"
        ];
      }
      
      // Shuffle tag pool for variety
      const shuffledTags = [...tagPool].sort(() => 0.5 - Math.random());
      
      // Add unique tags until we have 13 total
      for (let tag of shuffledTags) {
        if (generatedTags.length >= 13) break;
        if (!generatedTags.includes(tag) && tag.length <= 20) {
          generatedTags.push(tag);
        }
      }
      
      // Ensure exactly 13 tags
      generatedTags = generatedTags.slice(0, 13);
      
      setTags(generatedTags);
      
      // Generate description - vary the wording slightly
      const occasions = ["birthday gift", "Christmas gift", "holiday present", "special occasion gift"];
      const qualifiers = ["super soft", "incredibly comfortable", "high quality", "premium quality"];
      const finishers = ["and cozy!", "and durable!", "you'll love to wear!", "for everyday use!"];
      
      // Random selection for variability
      const occasion = occasions[Math.floor(Math.random() * occasions.length)];
      const qualifier = qualifiers[Math.floor(Math.random() * qualifiers.length)];
      const finisher = finishers[Math.floor(Math.random() * finishers.length)];
      
      setDescription(`This Comfort Colors® ${capitalizedKeyword} shirt is the perfect ${occasion} for all! All of our shirts are made with ${qualifier} materials ${finisher}`);
      
      setIsLoading(false);
      toast.success("SEO elements generated successfully!");
    }, 1000);
  };
  
  const copyToClipboard = (text: string, type: string) => {
    // For tags, join without spaces between items when copying
    if (type === "Tags") {
      navigator.clipboard.writeText(tags.join(','));
    } else {
      navigator.clipboard.writeText(text);
    }
    toast.success(`${type} copied to clipboard`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      <div className="space-y-2">
        <Label htmlFor="keyword">Enter Keyword or Phrase</Label>
        <div className="flex space-x-2">
          <Input
            id="keyword"
            placeholder="e.g., boy mom club"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1"
          />
          <Button onClick={generateSEO} disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate SEO"}
          </Button>
        </div>
      </div>
      
      {title && (
        <div className="space-y-4 mt-8">
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex justify-between items-center mb-2">
              <Label>Title ({title.length} characters)</Label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => copyToClipboard(title, "Title")}
                className="h-8 w-8 p-0"
              >
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm">{title}</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex justify-between items-center mb-2">
              <Label>Tags (13)</Label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => copyToClipboard(tags.join(','), "Tags")}
                className="h-8 w-8 p-0"
              >
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 text-xs bg-slate-100 text-slate-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex justify-between items-center mb-2">
              <Label>Description</Label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => copyToClipboard(description, "Description")}
                className="h-8 w-8 p-0"
              >
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <Textarea 
              readOnly 
              value={description} 
              className="resize-none bg-slate-50"
            />
          </div>
        </div>
      )}
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h3 className="font-medium text-amber-800 mb-2">SEO Tips:</h3>
        <ul className="text-sm text-amber-700 space-y-1 list-disc pl-4">
          <li>Include your main keywords in the title, with the most important ones at the beginning</li>
          <li>Use all 13 tag slots with relevant keywords buyers might search for (max 20 characters each)</li>
          <li>Avoid apostrophes in tags (use "fathers day" instead of "father's day")</li>
          <li>Mention gift occasions and recipient types in your description</li>
          <li>Make titles descriptive but stay under 140 characters for best visibility</li>
        </ul>
      </div>
    </div>
  );
};

export default SEOTool;
