
import React from 'react';

const SEOTips = () => {
  return (
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
  );
};

export default SEOTips;
