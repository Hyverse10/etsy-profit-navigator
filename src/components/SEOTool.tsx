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
    // Clear product types that tell buyers what they're getting
    const productTypes = [
      "T-Shirt", "Graphic Tee", "Unisex Shirt", "Comfort Tee", 
      "Cotton Shirt", "Vintage Tee", "Soft Tee", "Premium Shirt", 
      "Statement Tee", "Crew Neck", "Short Sleeve Tee", "Casual Shirt",
      "Graphic Design Tee", "Printed Shirt", "Custom Tee", "Designer Shirt",
      "Fashion Tee", "Quality Shirt", "Comfortable Tee"
    ];
    
    // Target audience qualifiers - important for SEO
    const audienceQualifiers = [
      "for Women", "for Men", "Women's", "Men's", "Unisex", "for Her", "for Him"
    ];
    
    // Occasion and gifting terms - very high search volume
    const occasionTerms = [
      "Gift Idea", "Perfect Gift", "Birthday Gift",
      "Christmas Present", "Holiday Gift", "Anniversary Gift",
      "Special Occasion", "Party Outfit", "Celebration",
      "Valentine's Day", "Mother's Day", "Father's Day",
      "Graduation Gift", "Wedding Gift", "Housewarming"
    ];
    
    // Style and descriptor terms - help with SEO and customer appeal
    const styleDescriptors = [
      "Trendy", "Stylish", "Unique", "Vintage", "Modern",
      "Classic", "Retro", "Aesthetic", "Minimalist", "Boho",
      "Casual", "Elegant", "Cute", "Cool", "Aesthetic",
      "Distressed", "Funny", "Inspirational", "Motivational",
      "Uplifting", "Positive", "Empowering", "Bold", "Artistic"
    ];
    
    // Category-specific variations based on keyword
    let categorySpecific: string[] = [];
    
    if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
      categorySpecific = [
        "Mom Life Shirt", "Mother's Day Gift Shirt", "Mama Bear Tee", 
        "Boy Mom Shirt", "Girl Mom T-Shirt", "Mom Squad Tee", 
        "Motherhood Shirt", "Mom Crew Tee", "Super Mom T-Shirt", 
        "Cool Mom Shirt", "Best Mom Tee", "Proud Mom Shirt", 
        "Blessed Mom T-Shirt", "Mom Vibes Tee", "Mother's Gift Shirt"
      ];
    } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
      categorySpecific = [
        "Dad Life Shirt", "Father's Day Gift Tee", "Papa Bear Shirt", 
        "Dad Joke T-Shirt", "Girl Dad Tee", "Boy Dad Shirt", 
        "Fatherhood T-Shirt", "Dad Squad Tee", "Super Dad Shirt", 
        "Best Dad Ever T-Shirt", "Dad of Boys Tee", "Proud Dad Shirt", 
        "Blessed Dad T-Shirt", "Dad Vibes Tee", "Father's Gift Shirt"
      ];
    } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
      categorySpecific = [
        "Bride To Be Shirt", "Wedding Party Tee", "Bachelorette T-Shirt", 
        "Bridal Squad Tee", "Team Bride Shirt", "Future Mrs T-Shirt", 
        "Just Married Tee", "Bridal Shower Gift Shirt", "Wedding Gift T-Shirt", 
        "Bride Tribe Tee", "Wedding Season Shirt", "Engagement Gift T-Shirt", 
        "Bridal Party Tee", "Wedding Celebration Shirt", "Newlywed T-Shirt"
      ];
    } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
      categorySpecific = [
        "Faith Based Shirt", "Christian Faith Tee", "Bible Verse T-Shirt", 
        "Religious Gift Shirt", "Church Group Tee", "Faith Community T-Shirt", 
        "Prayer Shirt", "Worship Tee", "Scripture T-Shirt", 
        "Spiritual Gift Shirt", "Christian Design Tee", "Faith Inspired T-Shirt", 
        "Believer Shirt", "Christian Gift Tee", "Religious Quote T-Shirt"
      ];
    } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
      categorySpecific = [
        "Humorous Graphic Tee", "Sarcastic Saying Shirt", "Witty Quote T-Shirt", 
        "Joke Gift Shirt", "Meme Inspired Tee", "Hilarious Present T-Shirt", 
        "Fun Design Shirt", "Comedic Tee", "Gag Gift T-Shirt", 
        "Novelty Design Shirt", "Conversation Starter Tee", "Funny Saying T-Shirt", 
        "Humor Gift Shirt", "Pun T-Shirt", "Comedy Gift Tee"
      ];
    } else if (keywordLower.includes('dog') || keywordLower.includes('puppy')) {
      categorySpecific = [
        "Dog Lover Shirt", "Puppy Parent Tee", "Pet Owner T-Shirt", 
        "Dog Mom Shirt", "Dog Dad Tee", "Canine Lover T-Shirt", 
        "Rescue Dog Shirt", "Fur Parent Tee", "Dog Breed T-Shirt", 
        "Animal Lover Shirt", "Pet Themed Tee", "Dog Graphic T-Shirt",
        "Doggy Design Shirt", "Puppy Love Tee", "Dog Gift T-Shirt"
      ];
    } else if (keywordLower.includes('cat') || keywordLower.includes('kitten')) {
      categorySpecific = [
        "Cat Lover Shirt", "Kitten Parent Tee", "Cat Mom T-Shirt", 
        "Cat Dad Shirt", "Feline Lover Tee", "Cat Owner T-Shirt", 
        "Rescue Cat Shirt", "Cat Lady Tee", "Cat Breed T-Shirt", 
        "Pet Lover Shirt", "Cat Themed Tee", "Kitty Design T-Shirt", 
        "Meow Shirt", "Cat Gift Tee", "Cat Graphic T-Shirt"
      ];
    } else {
      categorySpecific = [
        "Trending Graphic Tee", "Popular Design Shirt", "Bestselling T-Shirt",
        "Must-Have Shirt", "Essential Tee", "Fan Favorite T-Shirt",
        "Statement Design Shirt", "Conversation Starter Tee", "Expressive T-Shirt", 
        "Unique Design Shirt", "Creative Tee", "Artistic T-Shirt",
        "Everyday Style Shirt", "Wardrobe Essential Tee", "Fashion Forward T-Shirt"
      ];
    }
    
    // Create variations directly related to the keyword (most important)
    let keywordVariations: string[] = [];
    const keywordWords = keywordLower.split(' ');
    
    // If keywords has multiple words (e.g. "boy mom")
    if (keywordWords.length > 1) {
      // Create products that clearly state what they're getting
      keywordVariations.push(
        `${capitalizeEveryWord(keyword)} T-Shirt`,
        `${capitalizeEveryWord(keyword)} Graphic Tee`,
        `${capitalizeEveryWord(keyword)} Shirt`,
        `${capitalizeEveryWord(keyword)} Design Tee`
      );
    }
    
    // Add more variations directly from the keyword
    keywordVariations.push(
      `${capitalizeEveryWord(keyword)} Design Shirt`,
      `${capitalizeEveryWord(keyword)} Themed T-Shirt`,
      `${capitalizeEveryWord(keyword)} Lover Tee`,
      `${capitalizeEveryWord(keyword)} Fan Shirt`,
      `${capitalizeEveryWord(keyword)} Gift T-Shirt`
    );
    
    // Combine all variations
    return [...keywordVariations, ...categorySpecific, ...productTypes, ...audienceQualifiers, ...occasionTerms, ...styleDescriptors];
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
      
      // Build base title components
      let baseComponents = [
        `Comfort Colors® ${capitalizedKeyword}`,
        `${capitalizedKeyword} Graphic Tee`
      ];
      
      // Randomly select one of these base components to start with
      let baseTitle = baseComponents[Math.floor(Math.random() * baseComponents.length)];
      
      // Get variations specific to this keyword
      const variations = generateTitleVariations(keywordLower);
      
      // Build title strategically to hit target length
      let generatedTitle = baseTitle;
      let currentLength = generatedTitle.length;
      const targetLength = 138; // Aim for 138 to stay safely under 140
      
      // Add audience qualifier early (important for SEO)
      const audienceOptions = [
        "for Women", "for Men", "Women's", "Men's", "Unisex", "for Her", "for Him"
      ];
      
      const randomAudience = audienceOptions[Math.floor(Math.random() * audienceOptions.length)];
      if (!generatedTitle.toLowerCase().includes(randomAudience.toLowerCase())) {
        generatedTitle += `, ${randomAudience}`;
        currentLength = generatedTitle.length;
      }
      
      // Selected variations strategically
      let variationIndex = 0;
      let usedVariations = new Set();
      usedVariations.add(baseTitle.toLowerCase());
      
      // Add product type early if not in base title
      if (!generatedTitle.toLowerCase().includes("shirt") && 
          !generatedTitle.toLowerCase().includes("tee") && 
          !generatedTitle.toLowerCase().includes("t-shirt")) {
        const productTypes = ["T-Shirt", "Graphic Tee", "Shirt"];
        const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
        generatedTitle += `, ${productType}`;
        currentLength = generatedTitle.length;
        usedVariations.add(productType.toLowerCase());
      }
      
      // Keep adding variations until we're close to target length
      while (currentLength < targetLength && variationIndex < variations.length) {
        const nextVariation = variations[variationIndex];
        const lowerVariation = nextVariation.toLowerCase();
        
        // Skip if we've already used this variation or if it would create duplicate-sounding content
        let isDuplicate = false;
        for (const used of usedVariations) {
          if (lowerVariation.includes(used) || used.includes(lowerVariation)) {
            isDuplicate = true;
            break;
          }
        }
        
        // Only add if not duplicate and won't exceed length
        if (!isDuplicate && (currentLength + nextVariation.length + 2) <= 140) {
          generatedTitle += `, ${nextVariation}`;
          currentLength = generatedTitle.length;
          usedVariations.add(lowerVariation);
          
          // Add a gift term if we're past halfway and don't have one yet
          const giftTerms = ["Gift", "Present", "Gift Idea"];
          const hasGiftTerm = giftTerms.some(term => generatedTitle.toLowerCase().includes(term.toLowerCase()));
          
          if (currentLength > 70 && !hasGiftTerm && (currentLength + 10) <= 138) {
            const giftAdditions = ["Perfect Gift", "Gift Idea", "Great Present"];
            const randomGift = giftAdditions[Math.floor(Math.random() * giftAdditions.length)];
            generatedTitle += `, ${randomGift}`;
            currentLength = generatedTitle.length;
          }
        }
        
        variationIndex++;
      }
      
      // If we're still under target length, add general high-search terms
      const fillerTerms = [
        "Top Rated", "Best Seller", "Popular Choice", "Trending Design",
        "High Quality", "Premium", "Soft Material", "Comfortable Fit",
        "Perfect Gift", "Gift Idea", "Special Present"
      ];
      
      let fillerIndex = 0;
      while (currentLength < targetLength && fillerIndex < fillerTerms.length) {
        const filler = fillerTerms[fillerIndex];
        if (!generatedTitle.toLowerCase().includes(filler.toLowerCase()) && 
            (currentLength + filler.length + 2) <= 140) {
          generatedTitle += `, ${filler}`;
          currentLength = generatedTitle.length;
        }
        fillerIndex++;
      }
      
      // Ensure title is exactly 140 characters or less
      if (generatedTitle.length > 140) {
        generatedTitle = truncateToCharLimit(generatedTitle, 140);
      }
      
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
      } else if (keywordLower.includes('dog') || keywordLower.includes('puppy')) {
        tagPool = [
          "dog lover gift", "dog mom shirt", "dog dad tee", "puppy lover gift", 
          "dog owner shirt", "pet lover tee", "dog graphic shirt", "dog quote tee",
          "dog themed gift", "fur parent shirt", "dog breed tee", "rescue dog shirt",
          "dog saying tee", "dog lover tshirt", "canine gift", "dog design shirt"
        ];
      } else if (keywordLower.includes('cat') || keywordLower.includes('kitten')) {
        tagPool = [
          "cat lover gift", "cat mom shirt", "cat dad tee", "kitten lover gift",
          "cat owner shirt", "pet lover tee", "cat graphic shirt", "cat quote tee",
          "cat themed gift", "fur parent shirt", "cat breed tee", "rescue cat shirt",
          "cat saying tee", "cat lover tshirt", "feline gift", "cat design shirt"
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
      const audiences = ["men", "women", "everyone", "anyone", "those special people", "your loved ones"];
      const qualifiers = ["super soft", "incredibly comfortable", "high quality", "premium quality"];
      const finishers = ["and cozy!", "and durable!", "you'll love to wear!", "for everyday wear!"];
      
      // Random selection for variability
      const occasion = occasions[Math.floor(Math.random() * occasions.length)];
      const audience = audiences[Math.floor(Math.random() * audiences.length)];
      const qualifier = qualifiers[Math.floor(Math.random() * qualifiers.length)];
      const finisher = finishers[Math.floor(Math.random() * finishers.length)];
      
      setDescription(`This Comfort Colors® ${capitalizedKeyword} shirt is the perfect ${occasion} for ${audience}! Made with ${qualifier} materials ${finisher}`);
      
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
