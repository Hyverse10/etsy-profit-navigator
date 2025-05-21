
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, RefreshCw, Shirt } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";

const SEOTool = () => {
  const [formData, setFormData] = useState({
    phrase: '',
    product: '',
    isComfortColors: false
  });
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      isComfortColors: checked
    });
  };

  // Function to call the OpenAI API with your trained model
  const generateSEOWithOpenAI = async () => {
    try {
      setIsLoading(true);
      setApiError(null);
      
      // Prepare the prompt based on the form data
      const promptContent = `Generate SEO for a ${formData.product} with phrase/design: "${formData.phrase}"${formData.isComfortColors ? ' (This is a Comfort Colors® shirt)' : ''}`;
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "gpt-4o",
          temperature: 0.7,
          messages: [
            {
              role: "system",
              content: formData.isComfortColors 
                ? "You are an Etsy SEO expert. When given a shirt phrase, return 3 things:\n\n1. A 130–140 character Etsy title that starts with 'Comfort Colors®' and includes search terms like 'motivational shirt', 'funny tee', 'gift for her', etc. Do NOT include vague words like 'essential', 'statement piece', or 'fan favorite'.\n\n2. A list of 13 Etsy SEO tags, each under 20 characters, focused on real buyer search behavior.\n\n3. A 2–3 sentence Etsy listing description using strong keywords, targeting ideal buyers and use cases (gift, women, moms, self-love, etc.)."
                : `You are an Etsy SEO expert. When given a product type and design/phrase, return 3 things:\n\n1. A 130–140 character Etsy title that describes the ${formData.product} and includes relevant search terms appropriate for this product type. Do NOT include vague words like 'essential', 'statement piece', or 'fan favorite'.\n\n2. A list of 13 Etsy SEO tags, each under 20 characters, focused on real buyer search behavior for this product.\n\n3. A 2–3 sentence Etsy listing description using strong keywords, targeting ideal buyers and use cases for this product.`
            },
            {
              role: "user",
              content: promptContent
            }
          ]
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error details:", errorData);
        
        // Handle quota exceeded error specifically
        if (errorData.error && errorData.error.code === "insufficient_quota") {
          setApiError("OpenAI API quota exceeded. Please check your billing details or try again later.");
          throw new Error("OpenAI API quota exceeded");
        }
        
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      const content = data.choices[0].message.content;
      
      // Parse the response content
      parseGPTResponse(content);
      
      toast.success("SEO content generated successfully!");
    } catch (error) {
      console.error("Error generating SEO content:", error);
      if (!apiError) {
        setApiError("Failed to generate SEO content. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Parse the GPT response into title, tags, and description
  const parseGPTResponse = (content: string) => {
    try {
      // Split the content by sections (1., 2., 3.)
      const sections = content.split(/\d\./).filter(section => section.trim().length > 0);
      
      if (sections.length >= 3) {
        // Extract title (first section)
        const extractedTitle = sections[0].trim();
        
        // Extract tags (second section)
        const tagsSection = sections[1].trim();
        const extractedTags = tagsSection
          .split(/[\n,]/) // Split by newline or comma
          .map(tag => tag.trim())
          .filter(tag => tag.length > 0 && tag.length < 20)
          .slice(0, 13); // Ensure max 13 tags
          
        // Extract description (third section)
        const extractedDescription = sections[2].trim();
        
        // Update state with extracted content
        setTitle(extractedTitle);
        setTags(extractedTags);
        setDescription(extractedDescription);
      } else {
        throw new Error("Couldn't parse the AI response correctly");
      }
    } catch (error) {
      console.error("Error parsing GPT response:", error);
      toast.error("Error parsing the generated content");
    }
  };
  
  // Main function to generate SEO content
  const generateSEO = () => {
    if (!formData.phrase.trim()) {
      toast.error("Please enter a phrase or design");
      return;
    }
    
    if (!formData.product.trim()) {
      toast.error("Please enter a product type");
      return;
    }
    
    generateSEOWithOpenAI();
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

  // Function to generate fake SEO data for demo purposes when API quota is exceeded
  const generateDemoSEO = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const phrase = keyword.trim() || "shirt phrase";
      
      // Generate demo title
      setTitle(`Comfort Colors® ${phrase} Motivational Shirt | Inspiring Tee | Gift for Her | Empowerment Quote T-Shirt | Positive Vibes Top | Birthday Present`);
      
      // Generate demo tags
      setTags([
        "motivational shirt", 
        "gift for her", 
        "inspiring tee", 
        "comfort colors", 
        `${phrase} shirt`, 
        "quote tshirt", 
        "birthday gift", 
        "empowerment", 
        "positive vibes", 
        "women's tee", 
        "mom gift", 
        "graphic tshirt", 
        "custom tee"
      ]);
      
      // Generate demo description
      setDescription(`This premium Comfort Colors® ${phrase} shirt is perfect for anyone who needs a daily reminder of their strength and resilience. Made with soft, pre-shrunk cotton and featuring vibrant, long-lasting print, this inspirational tee makes an excellent gift for birthdays, Mother's Day, or just because.`);
      
      setIsLoading(false);
      toast.success("Demo SEO content generated!");
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      {apiError && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>API Error</AlertTitle>
          <AlertDescription className="flex flex-col gap-3">
            <p>{apiError}</p>
            <Button onClick={generateDemoSEO} variant="outline" size="sm">
              Generate Demo SEO Content Instead
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phrase">Phrase or design on the product</Label>
          <Input
            id="phrase"
            name="phrase"
            placeholder="e.g., boy mom club, cat lover, etc."
            value={formData.phrase}
            onChange={handleInputChange}
            className="flex-1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="product">Product type</Label>
          <Input
            id="product"
            name="product"
            placeholder="e.g., t-shirt, mug, sticker, etc."
            value={formData.product}
            onChange={handleInputChange}
            className="flex-1"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="comfortColors" 
            checked={formData.isComfortColors}
            onCheckedChange={handleCheckboxChange}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="comfortColors"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
            >
              <Shirt className="h-4 w-4" /> This is a Comfort Colors® shirt
            </label>
          </div>
        </div>

        <Button 
          onClick={generateSEO} 
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Generating..." : "Generate SEO"}
        </Button>
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
