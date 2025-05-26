
import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface SEOResultsProps {
  title: string;
  tags: string[];
  description: string;
}

const SEOResults = ({ title, tags, description }: SEOResultsProps) => {
  const copyToClipboard = (text: string, type: string) => {
    // For tags, join without spaces between items when copying
    if (type === "Tags") {
      navigator.clipboard.writeText(tags.join(','));
    } else {
      navigator.clipboard.writeText(text);
    }
    toast.success(`${type} copied to clipboard`);
  };

  if (!title) return null;

  return (
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
  );
};

export default SEOResults;
