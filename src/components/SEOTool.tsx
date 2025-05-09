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
  
  const generateSEO = () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword phrase");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      // Generate title based on user examples
      const capitalizedKeyword = capitalizeEveryWord(keyword);
      const keywordLower = keyword.toLowerCase();
      
      // Start with base title
      let baseTitle = `Comfort Colors® ${capitalizedKeyword} Shirt`;
      
      // Create search-friendly variations based on keyword
      let titleExtensions = [];
      
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        titleExtensions = [
          "Mom Life Shirt", 
          "Mother's Day Gift", 
          "Mama Graphic Tee", 
          "Mom Squad Shirt",
          "Motherhood TShirt", 
          "Boy Mom Shirt", 
          "Mom Crew Gift"
        ];
      } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
        titleExtensions = [
          "Dad Life Shirt", 
          "Father's Day Gift", 
          "Papa Tee", 
          "Daddy TShirt",
          "Fathers Day Present", 
          "Girl Dad Shirt", 
          "Dad Crew Gift"
        ];
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        titleExtensions = [
          "Bridal Party Gift", 
          "Wedding Day Tee", 
          "Bachelorette Shirt",
          "Future Mrs Shirt", 
          "Bridal Shower Gift", 
          "Wedding Party Tee",
          "Engagement Present"
        ];
      } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
        titleExtensions = [
          "Christian Faith Tee", 
          "Religious Gift", 
          "Bible Verse Shirt",
          "Church Group Tee", 
          "Christian Apparel", 
          "Faith Based Gift",
          "Inspirational Shirt"
        ];
      } else if (keywordLower.includes('funny') || keywordLower.includes('humor')) {
        titleExtensions = [
          "Funny Shirt", 
          "Humor Gift", 
          "Sarcastic Tee",
          "Joke Shirt", 
          "Meme Inspired", 
          "Funny Gift Idea",
          "Novelty TShirt"
        ];
      } else {
        // Generic but SEO-friendly variations
        titleExtensions = [
          "Trendy Graphic Tee", 
          "Birthday Gift Shirt", 
          "Unisex TShirt",
          "Statement Tee", 
          "Gift Idea", 
          "Custom Graphic Shirt",
          "Holiday Present"
        ];
      }
      
      // Build title to target 138-140 characters by adding extensions
      let generatedTitle = baseTitle;
      let extensionIndex = 0;
      
      // Keep adding extensions until we reach the desired character count
      while (generatedTitle.length < 135 && extensionIndex < titleExtensions.length) {
        generatedTitle += `, ${titleExtensions[extensionIndex]}`;
        extensionIndex++;
      }
      
      // If we're still under target length, add a few more search-friendly terms
      if (generatedTitle.length < 135) {
        const additionalTerms = ["Trending Tee", "Gift For Her", "Gift For Him", "Custom Gift"];
        for (let term of additionalTerms) {
          if (generatedTitle.length < 135) {
            generatedTitle += `, ${term}`;
          } else {
            break;
          }
        }
      }
      
      // Final check to ensure we're within 138-140 characters
      if (generatedTitle.length > 140) {
        generatedTitle = generatedTitle.substring(0, 137) + "...";
      } else if (generatedTitle.length < 138) {
        // Add generic term if needed to reach minimum
        generatedTitle += ", Perfect Gift";
      }
      
      setTitle(generatedTitle);
      
      // Generate 13 tags (max 20 characters each)
      let generatedTags: string[] = [];
      
      // Always include the main keyword as first tag if it's under 20 chars
      if (keywordLower.length <= 20) {
        generatedTags.push(keywordLower);
      } else {
        generatedTags.push(keywordLower.substring(0, 20));
      }
      
      // Add custom tags based on keyword category
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        generatedTags = generatedTags.concat([
          "mom gift",
          "mom shirt",
          "mom life",
          "mother gift",
          "mama shirt",
          "motherhood",
          "mothers day gift",
          "gift for her",
          "mom tshirt",
          "comfort colors",
          "trendy mom shirt",
          "mom squad"
        ]);
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        generatedTags = generatedTags.concat([
          "bride gift",
          "wedding shirt",
          "bridal party gift",
          "bride to be",
          "bachelorette",
          "future mrs",
          "wedding gift",
          "bridal shower",
          "comfort colors",
          "bride tee",
          "wedding party",
          "bride tribe"
        ]);
      } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
        generatedTags = generatedTags.concat([
          "christian gift",
          "jesus shirt",
          "faith tshirt",
          "religious gift",
          "bible verse",
          "christian tee",
          "comfort colors",
          "church shirt",
          "faith gift",
          "religious apparel",
          "christian clothing",
          "inspirational"
        ]);
      } else {
        generatedTags = generatedTags.concat([
          "gift for her",
          "tees for women",
          "graphic tee",
          "comfort colors",
          "trendy shirt",
          "vintage shirt",
          "birthday gift",
          "womens tshirt",
          "garment dyed",
          "gift idea",
          "unisex shirt",
          "statement tee"
        ]);
      }
      
      // Ensure we only have 13 tags and all are 20 chars or less
      generatedTags = generatedTags.slice(0, 13).map(tag => 
        tag.length > 20 ? tag.substring(0, 20) : tag
      );
      
      setTags(generatedTags);
      
      // Generate description based on user examples
      setDescription(`This Comfort Colors® ${capitalizedKeyword} shirt is the perfect birthday gift or Christmas gift for all women! All of our shirts are made with the highest quality materials and are super soft and cozy!`);
      
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
