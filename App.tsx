
import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import CanvasPreview from './components/CanvasPreview';
import { PatternState, Motif } from './types';
import { ScanLine, ZoomIn, ZoomOut, Grid } from 'lucide-react';
import { runPatternGenerator } from './constants';

const App: React.FC = () => {
  // Load initial state from a specific generator
  const { state: initialState, motifs: initialMotifs } = runPatternGenerator('Abstract Shape Generator');
  
  const [pattern, setPattern] = useState<PatternState>(initialState);
  const [motifs, setMotifs] = useState<Motif[]>(initialMotifs);
  const [showSeamlines, setShowSeamlines] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [seamValid, setSeamValid] = useState<boolean>(true);
  const [loadingAI, setLoadingAI] = useState(false);

  const handleExport = (format: 'png' | 'svg') => {
    const json = JSON.stringify({ pattern, motifs }, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pattern.projectName.replace(/\s+/g, '_')}_${Date.now()}.json`;
    
    if (format === 'png') {
        alert(`Exporting ${pattern.tileSize}x${pattern.tileSize} PNG... (Mock Download)`);
    } else {
        alert(`Exporting SVG... (Mock Download)`);
        a.click();
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden font-sans text-gray-800">
      
      {/* Left Control Panel */}
      <LeftPanel 
        pattern={pattern} 
        setPattern={setPattern}
        motifs={motifs}
        setMotifs={setMotifs}
        onExport={handleExport}
        seamValid={seamValid}
        loadingAI={loadingAI}
        setLoadingAI={setLoadingAI}
      />

      {/* Right Canvas Area */}
      <div className="flex-1 relative flex flex-col bg-gray-200/50">
        
        {/* Toolbar Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur shadow-md rounded-lg flex items-center gap-1 p-1.5 border border-gray-200/60">
           <button 
             onClick={() => setZoom(z => Math.max(0.2, z - 0.1))} 
             className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom Out"
           >
             <ZoomOut size={18} />
           </button>
           <span className="text-[10px] font-medium w-10 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
           <button 
             onClick={() => setZoom(z => Math.min(3, z + 0.1))} 
             className="p-2 hover:bg-gray-100 rounded text-gray-600" title="Zoom In"
           >
             <ZoomIn size={18} />
           </button>
           <div className="w-px h-4 bg-gray-300 mx-1"></div>
           <button 
             onClick={() => setShowSeamlines(!showSeamlines)}
             className={`p-2 rounded transition-colors ${showSeamlines ? 'bg-brand-50 text-brand-600' : 'hover:bg-gray-100 text-gray-600'}`}
             title="Toggle Seamlines"
           >
             <ScanLine size={18} />
           </button>
           <button 
             onClick={() => setShowGrid(!showGrid)}
             className={`p-2 rounded transition-colors ${showGrid ? 'bg-brand-50 text-brand-600' : 'hover:bg-gray-100 text-gray-600'}`}
             title="Toggle Grid"
           >
             <Grid size={18} />
           </button>
        </div>

        {/* Canvas Wrapper */}
        <CanvasPreview 
          pattern={pattern}
          motifs={motifs}
          showSeamlines={showSeamlines}
          showGrid={showGrid}
          zoom={zoom}
          onValidateSeam={setSeamValid}
        />

        {/* Loader Overlay */}
        {loadingAI && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center border border-gray-100">
              <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-medium text-brand-900 text-sm">Generating Motif with Gemini...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
