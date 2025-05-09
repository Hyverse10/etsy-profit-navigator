
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
    
    // Example SEO data generation based on keywords
    setTimeout(() => {
      // Generate title based on user examples
      const capitalizedKeyword = capitalizeEveryWord(keyword);
      
      // Create a title with keywords focused on the input text
      // Structure: Main Keyword + Related Variations + Use Cases + Gift Context
      let generatedTitle = `Comfort Colors® ${capitalizedKeyword} Shirt`;
      
      // Add relevant variations based on the keyword
      const keywordLower = keyword.toLowerCase();
      
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        generatedTitle += `, Mom Life Shirt, Motherhood Gift, Mama Graphic Tee, Mother's Day Present`;
      } else if (keywordLower.includes('dad') || keywordLower.includes('father')) {
        generatedTitle += `, Dad Life Shirt, Fatherhood Gift, Father's Day Present, Papa Graphic Tee`;
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        generatedTitle += `, Bridal Party Gift, Wedding Celebration Tee, Bachelorette Party Shirt`;
      } else if (keywordLower.includes('jesus') || keywordLower.includes('christ') || keywordLower.includes('faith')) {
        generatedTitle += `, Christian Faith Tee, Religious Gift, Inspirational Graphic Shirt`;
      } else {
        // Generic variations for other keywords
        generatedTitle += `, Trendy Graphic Tee, Birthday Gift Shirt, Unisex Statement TShirt, Gift Idea`;
      }
      
      // Ensure title doesn't exceed 140 characters
      if (generatedTitle.length > 140) {
        generatedTitle = generatedTitle.substring(0, 137) + '...';
      }
      
      setTitle(generatedTitle);
      
      // Generate 13 tags (max 20 characters each)
      const generatedTags = [
        keyword.toLowerCase(),
        "gift for her",
        "tees for women",
        "mom shirt",
        "graphic tee",
        "comfort colors",
        "trendy shirt",
        "vintage shirt",
        "birthday gift",
        "womens tshirt",
        "garment dyed",
        "gift idea",
        "holiday present"
      ];
      
      // Customize tags based on keyword if possible
      if (keywordLower.includes('mom') || keywordLower.includes('mother')) {
        generatedTags[1] = "mom gift";
        generatedTags[3] = "mom life";
        generatedTags[11] = "mothers day gift";
      } else if (keywordLower.includes('bride') || keywordLower.includes('wedding')) {
        generatedTags[1] = "bride gift";
        generatedTags[3] = "wedding shirt";
        generatedTags[11] = "bridal party gift";
      }
      
      setTags(generatedTags);
      
      // Generate description based on user examples
      setDescription(`This Comfort Colors® ${capitalizedKeyword} shirt is the perfect birthday gift or Christmas gift for all women! All of our shirts are made with the highest quality materials and are super soft and cozy!`);
      
      setIsLoading(false);
      toast.success("SEO elements generated successfully!");
    }, 1000);
  };
  
  const copyToClipboard = (text: string, type: string) => {
    // For tags, remove spaces between items when copying
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
