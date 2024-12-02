import React from 'react';
import { Copy, Play } from 'lucide-react';

interface AnimationPreviewProps {
  cssCode: string;
  onCopy: () => void;
}

export function AnimationPreview({ cssCode, onCopy }: AnimationPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Preview</h2>
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Copy size={16} />
          Copy CSS
        </button>
      </div>
      <div className="relative h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
        <div className="preview-element" style={{ animation: cssCode }}>
          <div className="w-16 h-16 bg-indigo-500 rounded-lg" />
        </div>
      </div>
      <div className="mt-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`.your-element {
  animation: ${cssCode};
}`}</code>
        </pre>
      </div>
    </div>
  );
}