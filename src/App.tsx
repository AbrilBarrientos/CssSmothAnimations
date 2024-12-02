import React, { useState } from 'react';
import { Controls } from './components/Controls';
import { PropertyList } from './components/PropertyList';
import { AnimationPreview } from './components/AnimationPreview';
import { Sparkles } from 'lucide-react';

function App() {
  const [values, setValues] = useState({
    duration: 1,
    timing: 'ease',
    iterations: '1',
    direction: 'normal',
  });

  const cssCode = `${values.duration}s ${values.timing} ${values.iterations} ${values.direction} bounce`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`.your-element {
  animation: ${cssCode};
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`);
  };

  return (
    <div className="min-h-screen-200 p-8">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-8 h-8 text-indigo-400" />
          <h1 className="text-3xl font-semibold text-white">CSS Smooth Animation Generator</h1>
        </div>
        <p className="text-white">Abril Barrientos</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_280px] gap-8">
          <Controls onUpdate={setValues} values={values} />
          <AnimationPreview cssCode={cssCode} onCopy={handleCopy} />
          <PropertyList />
        </div>
      </main>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .preview-element {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default App;