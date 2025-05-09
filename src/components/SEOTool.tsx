
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { pipeline } from '@huggingface/transformers';

const SEOTool = () => {
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [model, setModel] = useState<any>(null);
  
  // Helper function to capitalize every word
  const capitalizeEveryWord = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Load the model on component mount
  useEffect(() => {
    async function loadModel() {
      try {
        setModelLoading(true);
        toast.info("Loading AI model...");
        
        // Initialize the text generation pipeline with a small model
        const generator = await pipeline(
          'text-generation',
          'Xenova/distilgpt2',
          { device: 'cpu' }
        );
        
        setModel(generator);
        toast.success("AI model loaded successfully!");
      } catch (error) {
        console.error("Error loading model:", error);
        toast.error("Failed to load AI model. Using fallback generation.");
      } finally {
        setModelLoading(false);
      }
    }
    
    loadModel();
  }, []);
  
  // Function to generate title using the model
  const generateModelTitle = async (keyword: string) => {
    if (!model) return fallbackGenerateTitle(keyword);
    
    try {
      const prompt = `Generate an SEO-optimized product title for an Etsy listing about "${keyword}" that is under 140 characters. Include product type and target audience:`;
      const result = await model(prompt, {
        max_new_tokens: 50,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.2,
      });
      
      let generatedTitle = result[0].generated_text.replace(prompt, '').trim();
      
      // Clean up the generated title
      generatedTitle = generatedTitle
        .split('\n')[0]             // Take only the first line
        .replace(/"|'/g, '')        // Remove quotes
        .substring(0, 140);         // Ensure under 140 chars
      
      return generatedTitle || fallbackGenerateTitle(keyword);
    } catch (error) {
      console.error("Error generating title with model:", error);
      return fallbackGenerateTitle(keyword);
    }
  };
  
  // Fallback title generation if the model fails
  const fallbackGenerateTitle = (keyword: string) => {
    const capitalizedKeyword = capitalizeEveryWord(keyword);
    const productTypes = ["T-Shirt", "Graphic Tee", "Shirt", "Comfort Colors Tee"];
    const audiences = ["Women", "Men", "Unisex"];
    const descriptors = ["Funny", "Cute", "Trendy", "Perfect Gift", "High Quality"];
    
    const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
    const audience = audiences[Math.floor(Math.random() * audiences.length)];
    const descriptor1 = descriptors[Math.floor(Math.random() * descriptors.length)];
    const descriptor2 = descriptors[Math.floor(Math.random() * descriptors.length)];
    
    return `${capitalizedKeyword} ${productType} - ${descriptor1} ${audience} ${productType}, ${descriptor2}, Great Gift Idea for Birthday or Christmas - Comfortable Cotton Blend Tee`.substring(0, 140);
  };
  
  // Function to generate tags using the model
  const generateModelTags = async (keyword: string) => {
    if (!model) return fallbackGenerateTags(keyword);
    
    try {
      const prompt = `Generate 13 SEO-optimized tags for an Etsy listing about "${keyword}". Each tag should be 1-3 words and under 20 characters:`;
      const result = await model(prompt, {
        max_new_tokens: 100,
        temperature: 0.7,
      });
      
      let generatedText = result[0].generated_text.replace(prompt, '').trim();
      
      // Parse the generated tags
      const tagMatches = generatedText.match(/[\w\s]{3,20}/g) || [];
      const uniqueTags = Array.from(new Set(tagMatches
        .map(tag => tag.trim().toLowerCase())
        .filter(tag => tag.length >= 3 && tag.length <= 20 && !tag.includes('\n'))
      ));
      
      // Limit to 13 tags
      const finalTags = uniqueTags.slice(0, 13);
      
      return finalTags.length >= 5 ? finalTags : fallbackGenerateTags(keyword);
    } catch (error) {
      console.error("Error generating tags with model:", error);
      return fallbackGenerateTags(keyword);
    }
  };
  
  // Fallback tag generation if the model fails
  const fallbackGenerateTags = (keyword: string) => {
    const keywordParts = keyword.toLowerCase().split(' ');
    const baseTags = [keyword.toLowerCase()];
    
    if (keywordParts.length > 1) {
      keywordParts.forEach(part => {
        if (part.length > 3) baseTags.push(`${part} shirt`, `${part} gift`);
      });
    }
    
    const commonTags = [
      "gift idea", "custom gift", "birthday gift", "christmas gift", 
      "graphic tee", "trending", "fashion", "comfort colors", "unisex",
      "cute gift", "unique gift", "special gift", "gift for her", "gift for him"
    ];
    
    // Combine and limit to 13 tags
    const allTags = [...new Set([...baseTags, ...commonTags])];
    return allTags.slice(0, 13);
  };
  
  // Function to generate description using the model
  const generateModelDescription = async (keyword: string) => {
    if (!model) return fallbackGenerateDescription(keyword);
    
    try {
      const prompt = `Write a short product description for an Etsy T-shirt listing about "${keyword}". Mention quality, comfort, and that it's a great gift:`;
      const result = await model(prompt, {
        max_new_tokens: 100,
        temperature: 0.7,
      });
      
      let generatedDesc = result[0].generated_text.replace(prompt, '').trim();
      
      // Clean up the description
      generatedDesc = generatedDesc
        .split('\n\n')[0]          // Take only the first paragraph
        .replace(/"|'/g, '')        // Remove quotes
        .substring(0, 250);         // Limit length
      
      return generatedDesc || fallbackGenerateDescription(keyword);
    } catch (error) {
      console.error("Error generating description with model:", error);
      return fallbackGenerateDescription(keyword);
    }
  };
  
  // Fallback description generation if the model fails
  const fallbackGenerateDescription = (keyword: string) => {
    const capitalizedKeyword = capitalizeEveryWord(keyword);
    
    const occasions = ["birthday", "Christmas", "special occasion", "holiday"];
    const qualifiers = ["super soft", "high quality", "comfortable", "premium"];
    
    const occasion = occasions[Math.floor(Math.random() * occasions.length)];
    const qualifier = qualifiers[Math.floor(Math.random() * qualifiers.length)];
    
    return `This ${capitalizedKeyword} t-shirt is the perfect ${occasion} gift! Made with ${qualifier} materials that are comfortable for everyday wear. Great for yourself or as a gift for someone special.`;
  };
  
  // Main function to generate all SEO elements
  const generateSEO = async () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword phrase");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Generate title, tags, and description in parallel
      const [generatedTitle, generatedTags, generatedDescription] = await Promise.all([
        generateModelTitle(keyword),
        generateModelTags(keyword),
        generateModelDescription(keyword)
      ]);
      
      setTitle(generatedTitle);
      setTags(generatedTags);
      setDescription(generatedDescription);
      
      toast.success("SEO elements generated successfully!");
    } catch (error) {
      console.error("Error generating SEO elements:", error);
      toast.error("Error generating SEO elements");
    } finally {
      setIsLoading(false);
    }
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
            placeholder="e.g., boy mom club, cat lover"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={generateSEO} 
            disabled={isLoading || modelLoading}
          >
            {(isLoading || modelLoading) && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
            {modelLoading ? "Loading Model..." : (isLoading ? "Generating..." : "Generate SEO")}
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
              <Label>Tags ({tags.length}/13)</Label>
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
