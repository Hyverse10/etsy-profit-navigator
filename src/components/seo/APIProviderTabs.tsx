
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface APIProviderTabsProps {
  apiProvider: string;
  apiKey: string;
  onProviderChange: (value: string) => void;
  onApiKeyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const APIProviderTabs = ({ apiProvider, apiKey, onProviderChange, onApiKeyChange }: APIProviderTabsProps) => {
  return (
    <Tabs defaultValue="openai" onValueChange={onProviderChange}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">AI Provider</h3>
        <TabsList>
          <TabsTrigger value="openai">OpenAI</TabsTrigger>
          <TabsTrigger value="claude">Claude</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="openai">
        <div className="space-y-2">
          <Label htmlFor="openai-api-key">OpenAI API Key (Optional)</Label>
          <Input
            id="openai-api-key"
            name="openai-api-key"
            type="password"
            placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
            value={apiProvider === 'openai' ? apiKey : ''}
            onChange={onApiKeyChange}
            className="flex-1"
          />
          <p className="text-xs text-slate-500">Only needed if the default API key is not working</p>
        </div>
      </TabsContent>
      
      <TabsContent value="claude">
        <div className="space-y-2">
          <Label htmlFor="claude-api-key">Claude API Key (Required)</Label>
          <Input
            id="claude-api-key"
            name="claude-api-key"
            type="password"
            placeholder="sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx"
            value={apiProvider === 'claude' ? apiKey : ''}
            onChange={onApiKeyChange}
            className="flex-1"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default APIProviderTabs;
