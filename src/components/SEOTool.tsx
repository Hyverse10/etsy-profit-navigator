
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import SEOForm from "./seo/SEOForm";
import APIProviderTabs from "./seo/APIProviderTabs";
import SEOResults from "./seo/SEOResults";
import SEOTips from "./seo/SEOTips";

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
  const [apiKey, setApiKey] = useState('');
  const [apiProvider, setApiProvider] = useState('openai');
  
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

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleProviderChange = (value: string) => {
    setApiProvider(value);
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
          'Authorization': `Bearer ${apiKey || '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'}`,
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

  // Function to call Claude AI API
  const generateSEOWithClaude = async () => {
    try {
      setIsLoading(true);
      setApiError(null);
      
      if (!apiKey) {
        setApiError("Claude API key is required. Please enter your API key.");
        throw new Error("Claude API key is required");
      }
      
      // Prepare the prompt based on the form data
      const promptContent = `Generate SEO for a ${formData.product} with phrase/design: "${formData.phrase}"${formData.isComfortColors ? ' (This is a Comfort Colors® shirt)' : ''}`;
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "claude-3-opus-20240229",
          max_tokens: 1000,
          temperature: 0.7,
          system: formData.isComfortColors 
            ? "You are an Etsy SEO expert. When given a shirt phrase, return 3 things:\n\n1. A 130–140 character Etsy title that starts with 'Comfort Colors®' and includes search terms like 'motivational shirt', 'funny tee', 'gift for her', etc. Do NOT include vague words like 'essential', 'statement piece', or 'fan favorite'.\n\n2. A list of 13 Etsy SEO tags, each under 20 characters, focused on real buyer search behavior.\n\n3. A 2–3 sentence Etsy listing description using strong keywords, targeting ideal buyers and use cases (gift, women, moms, self-love, etc.)."
            : `You are an Etsy SEO expert. When given a product type and design/phrase, return 3 things:\n\n1. A 130–140 character Etsy title that describes the ${formData.product} and includes relevant search terms appropriate for this product type. Do NOT include vague words like 'essential', 'statement piece', or 'fan favorite'.\n\n2. A list of 13 Etsy SEO tags, each under 20 characters, focused on real buyer search behavior for this product.\n\n3. A 2–3 sentence Etsy listing description using strong keywords, targeting ideal buyers and use cases for this product.`,
          messages: [
            {
              role: "user",
              content: promptContent
            }
          ]
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Claude API error details:", errorData);
        throw new Error(`Claude API request failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      const content = data.content[0].text;
      
      // Parse the response content
      parseGPTResponse(content);
      
      toast.success("SEO content generated successfully!");
    } catch (error) {
      console.error("Error generating SEO content with Claude:", error);
      if (!apiError) {
        setApiError("Failed to generate SEO content with Claude. Please check your API key and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Parse the AI response into title, tags, and description
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
      console.error("Error parsing AI response:", error);
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
    
    if (apiProvider === 'openai') {
      generateSEOWithOpenAI();
    } else if (apiProvider === 'claude') {
      generateSEOWithClaude();
    }
  };

  // Function to generate fake SEO data for demo purposes when API quota is exceeded
  const generateDemoSEO = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const phrase = formData.phrase.trim() || "shirt phrase";
      
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
        <APIProviderTabs
          apiProvider={apiProvider}
          apiKey={apiKey}
          onProviderChange={handleProviderChange}
          onApiKeyChange={handleApiKeyChange}
        />

        <SEOForm
          formData={formData}
          onInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
        />

        <Button 
          onClick={generateSEO} 
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Generating..." : "Generate SEO"}
        </Button>
      </div>
      
      <SEOResults
        title={title}
        tags={tags}
        description={description}
      />
      
      <SEOTips />
    </div>
  );
};

export default SEOTool;
