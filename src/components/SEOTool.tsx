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
  
  // Helper function to ensure title is exactly within character limit
  const truncateToCharLimit = (title: string, maxLimit: number): string => {
    if (title.length <= maxLimit) return title;
    
    // If too long, truncate at a comma or space if possible
    const lastCommaPosition = title.substring(0, maxLimit - 3).lastIndexOf(',');
    if (lastCommaPosition > 100) {
      return title.substring(0, lastCommaPosition) + '...';
    }
    
    // Otherwise truncate at a space
    const lastSpacePosition = title.substring(0, maxLimit - 3).lastIndexOf(' ');
    if (lastSpacePosition > 0) {
      return title.substring(0, lastSpacePosition) + '...';
    }
    
    // Last resort: just truncate
    return title.substring(0, maxLimit - 3) + '...';
  };

  // Function to generate search-friendly title variations based on keyword
  const generateTitleVariations = (keywordLower: string): string[] => {
    // Product descriptors that pair with product types (not standalone)
    const productDescriptors = [
      "Trendy", "Custom", "Unique", "Bestselling", "Popular",
      "Aesthetic", "Premium", "Special", "Classic", "Vintage",
      "Retro", "Soft", "Comfortable", "Stylish", "Quality",
      "Heather", "Graphic", "Statement", "Distressed", "Cotton",
      "Dyed", "Limited Edition", "Exclusive", "Handmade", "Custom"
    ];
    
    // Product types (always paired with descriptors)
    const productTypes = [
      "Graphic Tee", "T-Shirt", "Tshirt", "Apparel", 
      "Clothing", "Outfit", "Fashion", "Wardrobe", 
      "Garment", "Gift Idea", "Novelty Item", "Design"
    ];
    
    // Audience qualifiers
    const audienceQualifiers = [
      "for Women", "for Men", "for Her", "for Him", "for Adults",
      "Unisex", "Perfect for", "Birthday", "Holiday", "Christmas",
      "Gift Ideas", "Present", "for Girls", "for Boys", "for Kids",
      "for Teens", "for Family", "for Friends", "Group", "Party"
    ];
    
    // Category-specific variations based on keyword
    let categorySpecific: string[] = [];
    
    if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
      categorySpecific = [
        "Mom Life", "Mother's Day Gift", "Mama Bear", "Boy Mom", 
        "Girl Mom", "Mom Squad", "Motherhood", "Mom Crew",
        "Super Mom", "Cool Mom", "Best Mom Ever", "Mom of Boys",
        "Mom of Girls", "Proud Mom", "Blessed Mom", "Mama Tee",
        "Mother's Present", "Mom Vibes", "Mother's Design", "Mom Tribe"
      ];
    } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
      categorySpecific = [
        "Dad Life", "Father's Day Gift", "Papa Bear", "Dad Joke",
        "Girl Dad", "Boy Dad", "Fatherhood", "Dad Crew",
        "Super Dad", "Best Dad Ever", "Dad Squad", "Father's Present",
        "Dad of Boys", "Dad of Girls", "Proud Dad", "Blessed Dad",
        "Papa Gift", "Dad Vibes", "Father's Design", "Dad Tribe"
      ];
    } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
      categorySpecific = [
        "Bride To Be", "Wedding Day", "Bachelorette Party",
        "Bridal Squad", "Team Bride", "Future Mrs", "Just Married",
        "Bridal Shower", "Wedding Gift", "Bride Tribe", "Wedding Party",
        "Bridal Party", "Wedding Season", "Engagement", "Bridesmaids",
        "Wedding Planning", "Newlywed", "Wedding Celebration", "Bachelor"
      ];
    } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
      categorySpecific = [
        "Faith Based", "Christian Faith", "Bible Verse",
        "Religious Gift", "Church Group", "Faith Community",
        "Prayer", "Worship", "Scripture", "Spiritual", "Religious Design",
        "Christian Apparel", "Faith Inspired", "Believer", "Christian Gift",
        "Religious Quote", "Scripture Design", "Bible", "Faith Journey"
      ];
    } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
      categorySpecific = [
        "Humorous Design", "Sarcastic Saying", "Witty Quote", "Joke Gift",
        "Meme Inspired", "Hilarious Present", "Fun Design", "Comedic Tee",
        "Gag Gift", "Novelty Design", "Conversation Starter", "Funny Saying",
        "Humor Gift", "Pun Intended", "Laugh Out Loud", "Funny Quote",
        "Comedy Gift", "Ironic Design", "Amusing Graphic", "Joke Lover"
      ];
    } else {
      // Generic but still SEO-friendly and keyword-specific
      categorySpecific = [
        "Everyday Wear", "Statement Design", "Conversation Starter",
        "Must-Have", "Essential", "Fan Favorite", "Casual Wear", 
        "Versatile Design", "Comfort Fit", "Stylish Design", "Fashion Forward",
        "Trending Design", "Popular Choice", "Best Seller", "Top Rated",
        "Customer Favorite", "Season's Must-Have", "Perfect Choice"
      ];
    }
    
    // Create variations directly related to the keyword (most important)
    let keywordVariations: string[] = [];
    const keywordWords = keywordLower.split(' ');
    
    // If keywords has multiple words (e.g. "boy mom")
    if (keywordWords.length > 1) {
      // Create variations like "Mom of Boys" from "Boy Mom"
      if (keywordWords.includes('mom') || keywordWords.includes('mother')) {
        if (keywordWords.includes('boy') || keywordWords.includes('boys')) {
          keywordVariations.push("Mom of Boys", "Boy Mom Gift", "Boy Mom Present");
        }
        if (keywordWords.includes('girl') || keywordWords.includes('girls')) {
          keywordVariations.push("Mom of Girls", "Girl Mom Gift", "Girl Mom Present");
        }
      }
      
      // Create variations like "Dad of Boys" from "Boy Dad"
      if (keywordWords.includes('dad') || keywordWords.includes('father')) {
        if (keywordWords.includes('boy') || keywordWords.includes('boys')) {
          keywordVariations.push("Dad of Boys", "Boy Dad Gift", "Boy Dad Present");
        }
        if (keywordWords.includes('girl') || keywordWords.includes('girls')) {
          keywordVariations.push("Dad of Girls", "Girl Dad Gift", "Girl Dad Present");
        }
      }
    }
    
    // Add more variations directly from the keyword
    keywordVariations.push(
      `${capitalizeEveryWord(keyword)} Design`,
      `${capitalizeEveryWord(keyword)} Lover`,
      `${capitalizeEveryWord(keyword)} Fan`,
      `${capitalizeEveryWord(keyword)} Gift`,
      `${capitalizeEveryWord(keyword)} Themed`
    );
    
    // Combine all variations, prioritizing keyword-specific ones first
    const allVariations = [...keywordVariations, ...categorySpecific, ...productDescriptors];
    
    // Shuffle arrays for variety but keep keyword variations at the top
    const shuffledProductTypes = [...productTypes].sort(() => 0.5 - Math.random());
    const shuffledAudience = [...audienceQualifiers].sort(() => 0.5 - Math.random());
    
    // Return variations prioritizing keyword-specific ones
    return [...keywordVariations, ...allVariations, ...shuffledProductTypes, ...shuffledAudience];
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
      
      // Add variations strategically until we approach but don't exceed 140 chars
      while (generatedTitle.length < 130 && index < variations.length) {
        // Only add variation if it doesn't create duplicate-sounding content
        const nextVariation = variations[index];
        const lowerTitle = generatedTitle.toLowerCase();
        const lowerVariation = nextVariation.toLowerCase();
        
        // Check if variation would be redundant
        if (!lowerTitle.includes(lowerVariation) && !lowerVariation.includes(keywordLower)) {
          generatedTitle += `, ${nextVariation}`;
        }
        index++;
      }
      
      // Ensure title is exactly 140 characters or less
      generatedTitle = truncateToCharLimit(generatedTitle, 140);
      
      setTitle(generatedTitle);
      
      // Generate 13 tags (max 20 characters each) - ensure variety and relevance
      let generatedTags: string[] = [];
      
      // Always include the main keyword as first tag if it's under 20 chars
      const mainTag = keywordLower.substring(0, 20);
      generatedTags.push(mainTag);
      
      // Create tag pool based on keyword category
      let tagPool: string[] = [];
      
      // Build tag pool based on keyword relevance
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        tagPool = [
          "mom gift", "mom life shirt", "mother gift", "mama shirt",
          "motherhood tee", "mothers day gift", "gift for mom", "mom tshirt",
          "comfort colors mom", "trendy mom shirt", "mom squad tee", "boy mom shirt",
          "girl mom shirt", "mom humor tee", "cool mom shirt", "mama bear tee"
        ];
      } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
        tagPool = [
          "dad gift", "dad life shirt", "father gift", "papa shirt",
          "fatherhood tee", "fathers day gift", "gift for dad", "dad tshirt",
          "comfort colors dad", "dad joke shirt", "dad squad tee", "girl dad shirt",
          "boy dad shirt", "cool dad shirt", "papa bear tee", "daddy shirt"
        ];
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        tagPool = [
          "bride gift", "wedding shirt", "bridal party tee", "bride to be shirt",
          "bachelorette tee", "future mrs shirt", "wedding gift", "bridal shower gift",
          "comfort colors bride", "bride tee", "wedding party shirt", "bride tribe tee",
          "engagement gift", "just married shirt", "team bride tee", "bridesmaid gift"
        ];
      } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
        tagPool = [
          "christian gift", "jesus shirt", "faith tshirt", "religious gift",
          "bible verse shirt", "christian tee", "comfort colors faith", "church shirt",
          "faith gift", "religious tee", "christian shirt", "inspirational tee", 
          "scripture shirt", "worship tee", "prayer shirt", "spiritual gift"
        ];
      } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
        tagPool = [
          "funny gift", "humor shirt", "funny tshirt", "joke gift",
          "sarcastic tee", "funny saying shirt", "comfort colors funny", "meme shirt",
          "novelty gift", "funny quote shirt", "gag gift tee", "hilarious shirt",
          "witty tee", "comedy shirt", "fun tshirt", "conversation starter"
        ];
      } else {
        tagPool = [
          "gift idea", "graphic tee", "comfort colors tee", "custom shirt",
          "trendy tshirt", "vintage style tee", "birthday gift shirt", "unisex tshirt",
          "garment dyed tee", "custom gift idea", "statement tshirt", "fashion gift",
          "retro style shirt", "aesthetic tee", "casual shirt", "premium quality tee"
        ];
      }
      
      // Add keyword-specific tags
      const keywordWords = keywordLower.split(' ');
      keywordWords.forEach(word => {
        if (word.length >= 3) { // Only add meaningful words
          tagPool.push(`${word} shirt`, `${word} tee`, `${word} gift`);
        }
      });
      
      // For multi-word keywords, add combinations
      if (keywordWords.length > 1) {
        for (let i = 0; i < keywordWords.length - 1; i++) {
          if (keywordWords[i].length >= 2 && keywordWords[i+1].length >= 2) {
            const twoWordCombo = `${keywordWords[i]} ${keywordWords[i+1]}`;
            tagPool.push(`${twoWordCombo} shirt`, `${twoWordCombo} tee`);
          }
        }
      }
      
      // Shuffle tag pool for variety
      const shuffledTags = [...new Set(tagPool)].sort(() => 0.5 - Math.random());
      
      // Add unique tags until we have 13 total
      for (let tag of shuffledTags) {
        if (generatedTags.length >= 13) break;
        
        // Check for tag validity (length and uniqueness)
        const tagLower = tag.toLowerCase();
        if (!generatedTags.includes(tagLower) && tagLower.length <= 20 && tagLower.length >= 3) {
          // Avoid single generic words like "shirt" or "tee" alone
          if (
            (tagLower !== "shirt" && tagLower !== "tee" && tagLower !== "top") &&
            (!tagLower.includes("shirt") || tagLower.split(" ").length > 1) &&
            (!tagLower.includes("tee") || tagLower.split(" ").length > 1) &&
            (!tagLower.includes("top") || tagLower.split(" ").length > 1)
          ) {
            generatedTags.push(tagLower);
          }
        }
      }
      
      // Ensure exactly 13 tags - add keyword variations if needed
      while (generatedTags.length < 13) {
        const randomWord = keywordWords[Math.floor(Math.random() * keywordWords.length)];
        const suffixes = ["lover", "fan", "design", "style", "themed"];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const newTag = `${randomWord} ${suffix}`;
        
        if (!generatedTags.includes(newTag) && newTag.length <= 20) {
          generatedTags.push(newTag);
        } else {
          // Last resort - just use keyword with a number
          const backupTag = `${mainTag} ${generatedTags.length + 1}`;
          if (!generatedTags.includes(backupTag) && backupTag.length <= 20) {
            generatedTags.push(backupTag);
          }
        }
      }
      
      // Ensure exactly 13 tags
      generatedTags = generatedTags.slice(0, 13);
      
      setTags(generatedTags);
      
      // Generate description - vary the wording based on keyword
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
