import React from 'react';
import { ChevronRight } from 'lucide-react';

const animationProperties = [
  {
    name: 'animation-duration',
    description: 'Length of time for the animation',
    examples: ['1s', '300ms'],
  },
  {
    name: 'animation-timing-function',
    description: 'How the animation progresses through time',
    examples: ['ease', 'linear', 'ease-in-out', 'cubic-bezier(0.4, 0, 0.2, 1)'],
  },
  {
    name: 'animation-delay',
    description: 'Time before the animation starts',
    examples: ['0s', '2s'],
  },
  {
    name: 'animation-iteration-count',
    description: 'Number of times the animation should repeat',
    examples: ['1', 'infinite'],
  },
  {
    name: 'animation-direction',
    description: 'Direction of the animation',
    examples: ['normal', 'reverse', 'alternate'],
  },
  {
    name: 'animation-fill-mode',
    description: 'Styles applied before/after animation',
    examples: ['none', 'forwards', 'backwards', 'both'],
  },
];

export function PropertyList() {
  return (
    <aside className="bg-white rounded-lg shadow-lg p-6 w-80">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">CSS Properties</h2>
      <div className="space-y-4">
        {animationProperties.map((prop) => (
          <details key={prop.name} className="group">
            <summary className="flex items-center gap-2 cursor-pointer">
              <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              <span className="font-medium text-gray-700">{prop.name}</span>
            </summary>
            <div className="mt-2 pl-6">
              <p className="text-sm text-gray-600 mb-2">{prop.description}</p>
              <div className="flex flex-wrap gap-2">
                {prop.examples.map((example) => (
                  <span
                    key={example}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </aside>
  );
}