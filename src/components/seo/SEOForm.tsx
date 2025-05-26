
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shirt } from "lucide-react";

interface SEOFormProps {
  formData: {
    phrase: string;
    product: string;
    isComfortColors: boolean;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (checked: boolean) => void;
}

const SEOForm = ({ formData, onInputChange, onCheckboxChange }: SEOFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phrase">Phrase or design on the product</Label>
        <Input
          id="phrase"
          name="phrase"
          placeholder="e.g., cat mom, floral design with the word 'mom', etc."
          value={formData.phrase}
          onChange={onInputChange}
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
          onChange={onInputChange}
          className="flex-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="comfortColors" 
          checked={formData.isComfortColors}
          onCheckedChange={onCheckboxChange}
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
    </div>
  );
};

export default SEOForm;
