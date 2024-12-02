import React from 'react';
import { Sliders } from 'lucide-react';

interface ControlsProps {
  onUpdate: (values: any) => void;
  values: any;
}

export function Controls({ onUpdate, values }: ControlsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">Animation Controls</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={values.duration}
            onChange={(e) => onUpdate({ ...values, duration: e.target.value })}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{values.duration}s</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Timing Function
          </label>
          <select
            value={values.timing}
            onChange={(e) => onUpdate({ ...values, timing: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="ease">ease</option>
            <option value="linear">linear</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Iteration Count
          </label>
          <select
            value={values.iterations}
            onChange={(e) => onUpdate({ ...values, iterations: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="infinite">infinite</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Direction
          </label>
          <select
            value={values.direction}
            onChange={(e) => onUpdate({ ...values, direction: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="normal">normal</option>
            <option value="reverse">reverse</option>
            <option value="alternate">alternate</option>
          </select>
        </div>
      </div>
    </div>
  );
}