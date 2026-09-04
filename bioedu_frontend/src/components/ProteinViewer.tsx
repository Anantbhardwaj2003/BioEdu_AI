import { useEffect, useRef, useState } from "react";
import { RotateCw, ZoomIn, Layers, Box, Search, Loader2, Tag } from "lucide-react";

declare global {
  interface Window {
    $3Dmol: any;
  }
}

export default function ProteinViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const surfaceRef = useRef<number | null>(null);
  const labelsRef = useRef<any[]>([]);

  const [isRotating, setIsRotating] = useState(true);
  const [showSurface, setShowSurface] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  const [repMode, setRepMode] = useState<'cartoon' | 'stick' | 'sphere'>('cartoon');
  
  const [pdbId, setPdbId] = useState('1YCR');
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState({ resolution: '2.60 Å', method: 'X-RAY', chains: 'A, B' });
  const [dynamicChains, setDynamicChains] = useState<string[]>([]);

  const PALETTE = ['#2563eb', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#64748b'];

  // Fetch Metadata from RCSB PDB

  useEffect(() => {
    fetch(`https://data.rcsb.org/rest/v1/core/entry/${pdbId.toLowerCase()}`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        const res = data.rcsb_entry_info.resolution_combined?.[0] || 'N/A';
        const method = data.exptl?.[0]?.method || 'N/A';
        // const polymers = data.rcsb_entry_info.polymer_entity_count_protein || 0;
        const dna = data.rcsb_entry_info.polymer_entity_count_dna || 0;
        let chainsInfo = 'Proteins';
        if (dna > 0) chainsInfo = 'DNA/Protein';
        if (pdbId.toUpperCase() === '1YCR') chainsInfo = 'A, B'; // specific override for default
        setMetadata({ resolution: typeof res === 'number' ? `${res.toFixed(2)} Å` : res, method, chains: chainsInfo });
      })
      .catch(() => {
        setMetadata({ resolution: 'N/A', method: 'N/A', chains: 'Dynamic' });
      });
  }, [pdbId]);

  const applyStyles = (viewer: any, mode: string, currentPdb: string, chains: string[]) => {
    if (currentPdb.toUpperCase() === '1YCR') {
      if (mode === 'cartoon') {
        viewer.setStyle({chain: 'A'}, {cartoon: {color: '#334155', style: 'oval'}});
        viewer.setStyle({chain: 'B'}, {cartoon: {color: '#94a3b8', style: 'oval'}, stick: {radius: 0.1, colorscheme: 'Jmol'}});
      } else if (mode === 'stick') {
        viewer.setStyle({chain: 'A'}, {stick: {colorscheme: 'Jmol'}});
        viewer.setStyle({chain: 'B'}, {stick: {colorscheme: 'Jmol'}});
      } else if (mode === 'sphere') {
        viewer.setStyle({chain: 'A'}, {sphere: {color: '#334155'}});
        viewer.setStyle({chain: 'B'}, {sphere: {color: '#94a3b8'}});
      }
    } else {
      if (mode === 'cartoon') {
        if (chains.length > 0) {
          chains.forEach((chain, i) => {
            viewer.setStyle({chain}, {cartoon: {color: PALETTE[i % PALETTE.length], style: 'oval'}});
          });
        } else {
          viewer.setStyle({}, {cartoon: {colorscheme: 'chain', style: 'oval'}});
        }
      } else if (mode === 'stick') {
        viewer.setStyle({}, {stick: {colorscheme: 'Jmol'}});
      } else if (mode === 'sphere') {
        viewer.setStyle({}, {sphere: {colorscheme: 'Jmol'}});
      }
    }
    viewer.render();
  };

  // Load 3Dmol
  useEffect(() => {
    if (!window.$3Dmol || !containerRef.current) return;

    if (!viewerRef.current) {
      viewerRef.current = window.$3Dmol.createViewer(containerRef.current, {
        backgroundColor: 'white'
      });
    }

    const viewer = viewerRef.current;
    setError(null);
    setIsLoading(true);
    viewer.clear();
    surfaceRef.current = null;
    
    // Auto-disable surface for non-default PDBs initially to avoid performance hits on large proteins
    if (pdbId.toUpperCase() !== '1YCR') {
      setShowSurface(false);
    } else {
      setShowSurface(true);
    }

    fetch(`https://files.rcsb.org/view/${pdbId.toUpperCase()}.pdb`)
      .then(res => {
        if (!res.ok) throw new Error("PDB structure not found");
        return res.text();
      })
      .then(data => {
        const model = viewer.addModel(data, "pdb");
        if (!model) {
          throw new Error("Failed to parse PDB structure");
        }
        
        let chains: string[] = [];
        try {
          const atoms = model.selectedAtoms({});
          const uniqueChains = new Set<string>();
          atoms.forEach((a: any) => {
            if (a.chain) uniqueChains.add(a.chain);
          });
          chains = Array.from(uniqueChains).sort();
          setDynamicChains(chains);
        } catch (e) {
          setDynamicChains([]);
        }
        
        applyStyles(viewer, repMode, pdbId, chains);
        
        if (pdbId.toUpperCase() === '1YCR') {
          surfaceRef.current = viewer.addSurface(window.$3Dmol.SurfaceType.VDW, {opacity: 0.15, color: '#94a3b8'}, {chain: 'A'});
        }
        
        // Clear persistent labels state on new load
        labelsRef.current = [];
        setShowLabels(false);

        // Add Hover functionality for residue labels
        viewer.setHoverable({}, true,
          function(atom: any, viewer: any) {
            if (!atom.label && atom.resn && atom.resi) {
              atom.label = viewer.addLabel(`${atom.resn}-${atom.resi}`, {
                position: {x: atom.x, y: atom.y, z: atom.z},
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                fontColor: 'white',
                fontSize: 12,
                backgroundOpacity: 1,
                borderThickness: 0,
                inFront: true,
                showBackground: true
              });
            }
          },
          function(atom: any, viewer: any) {
            if (atom.label) {
              viewer.removeLabel(atom.label);
              delete atom.label;
            }
          }
        );
        
        viewer.zoomTo();
        viewer.render();
        if (isRotating) viewer.spin("y", 0.5);
        
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message || "Failed to load PDB");
        setIsLoading(false);
      });

  }, [pdbId]); // Only trigger when pdbId changes

  // Handle representation mode changes independently
  useEffect(() => {
    if (viewerRef.current && !isLoading) {
      applyStyles(viewerRef.current, repMode, pdbId, dynamicChains);
    }
  }, [repMode]);

  const toggleRotation = () => {
    if (!viewerRef.current || isLoading) return;
    if (isRotating) {
      viewerRef.current.spin(false);
    } else {
      viewerRef.current.spin("y", 0.5);
    }
    setIsRotating(!isRotating);
  };

  const handleZoom = () => {
    if (!viewerRef.current || isLoading) return;
    viewerRef.current.zoomTo();
  };

  const toggleSurface = () => {
    if (!viewerRef.current || isLoading) return;
    
    if (showSurface) {
      if (surfaceRef.current !== null) {
        viewerRef.current.removeSurface(surfaceRef.current);
        surfaceRef.current = null;
      }
    } else {
      surfaceRef.current = viewerRef.current.addSurface(
        window.$3Dmol.SurfaceType.VDW, 
        {opacity: 0.15, color: '#94a3b8'}, 
        pdbId.toUpperCase() === '1YCR' ? {chain: 'A'} : {}
      );
    }
    setShowSurface(!showSurface);
  };

  const toggleLabels = () => {
    if (!viewerRef.current || isLoading) return;
    
    if (showLabels) {
      // Remove all persistent labels
      labelsRef.current.forEach(label => {
        viewerRef.current.removeLabel(label);
      });
      labelsRef.current = [];
    } else {
      // Add persistent labels to alpha carbons to avoid excessive clutter
      // Only picking a subset (e.g. CA atoms) so the viewer doesn't get completely overwhelmed
      const model = viewerRef.current.getModel();
      if (model) {
        const atoms = model.selectedAtoms({atom: 'CA'});
        // Only label every Nth residue if there are many, to keep it looking somewhat like the reference image
        const skip = Math.max(1, Math.floor(atoms.length / 50)); 
        
        atoms.forEach((atom: any, index: number) => {
          if (index % skip === 0 && atom.resn && atom.resi) {
            const label = viewerRef.current.addLabel(`${atom.resn}-${atom.resi}`, {
              position: {x: atom.x, y: atom.y, z: atom.z},
              backgroundColor: '#ffffff',
              fontColor: '#0f172a',
              fontSize: 10,
              backgroundOpacity: 0.9,
              borderColor: '#cbd5e1',
              borderThickness: 1,
              inFront: false,
              showBackground: true
            });
            labelsRef.current.push(label);
          }
        });
      }
    }
    
    setShowLabels(!showLabels);
    viewerRef.current.render();
  };

  const cycleRepresentation = () => {
    if (isLoading) return;
    const modes: Array<'cartoon' | 'stick' | 'sphere'> = ['cartoon', 'stick', 'sphere'];
    const nextIdx = (modes.indexOf(repMode) + 1) % modes.length;
    setRepMode(modes[nextIdx]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInput.trim().toUpperCase();
    if (query.length >= 3 && query.length <= 4) { // standard PDB IDs are 4 chars, but we allow 3 just in case
      setPdbId(query);
      setSearchInput('');
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <div ref={containerRef} className="w-full h-full relative z-0 cursor-grab active:cursor-grabbing"></div>
      
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="bg-red-50 text-red-600 border border-red-200 px-4 py-3 rounded-lg shadow-sm flex flex-col items-center gap-2 max-w-xs text-center">
            <span className="font-bold text-sm">Failed to Load</span>
            <span className="text-xs">{error}</span>
            <button 
              onClick={() => { setError(null); setPdbId('1YCR'); }}
              className="mt-2 text-xs font-semibold bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded transition-colors"
            >
              Reset Viewer
            </button>
          </div>
        </div>
      )}

      {/* Metadata & Search overlay */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-lg p-3 shadow-sm z-20 flex flex-col gap-3 min-w-[200px]">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 bg-slate-100 rounded-md p-1 border border-slate-200 focus-within:border-slate-400 focus-within:ring-1 focus-within:ring-slate-400 transition-all">
          <Search className="w-4 h-4 text-slate-400 ml-1 flex-shrink-0" />
          <input 
            type="text" 
            className="w-full bg-transparent text-xs font-bold text-slate-700 focus:outline-none uppercase placeholder:font-normal placeholder:normal-case placeholder:text-slate-400" 
            placeholder="Search PDB ID..." 
            maxLength={4} 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button 
            type="submit" 
            disabled={isLoading || searchInput.trim().length < 3}
            className="bg-white hover:bg-slate-50 disabled:opacity-50 text-slate-600 border border-slate-200 rounded px-2 py-0.5 text-[10px] font-bold shadow-sm transition-colors uppercase tracking-wider"
          >
            Load
          </button>
        </form>

        <div className="flex flex-col gap-1.5 pointer-events-none">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLoading ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLoading ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className="text-xs font-bold text-slate-950 tracking-wide">PDB: {pdbId.toUpperCase()}</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono flex flex-col gap-0.5">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">RESOLUTION</span>
              <span className="font-semibold text-slate-700">{metadata.resolution}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">METHOD</span>
              <span className="font-semibold text-slate-700">{metadata.method}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">CHAINS</span>
              <span className="font-semibold text-slate-700">{metadata.chains}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend overlay */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-lg p-3 shadow-sm z-20 pointer-events-none flex flex-col gap-2 min-w-[160px] transition-all">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Color Legend</span>
        
        {pdbId.toUpperCase() === '1YCR' ? (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded bg-[#334155]"></div>
              <span className="text-xs font-semibold text-slate-700">MDM2 (Chain A)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded bg-[#94a3b8]"></div>
              <span className="text-xs font-semibold text-slate-700">p53 (Chain B)</span>
            </div>
          </>
        ) : (
          repMode === 'cartoon' ? (
            dynamicChains.length > 0 ? (
              dynamicChains.slice(0, 5).map((chain, i) => (
                <div key={chain} className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: PALETTE[i % PALETTE.length] }}></div>
                  <span className="text-xs font-semibold text-slate-700">Chain {chain}</span>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded bg-slate-300"></div>
                <span className="text-xs font-semibold text-slate-700">Loading Chains...</span>
              </div>
            )
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded bg-[#c8c8c8]"></div>
              <span className="text-xs font-semibold text-slate-700">Carbon (by Element)</span>
            </div>
          )
        )}

        {showSurface && (
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full border border-slate-300 bg-[#94a3b8] opacity-50"></div>
            <span className="text-xs font-semibold text-slate-700">VDW Surface</span>
          </div>
        )}

        {(repMode === 'stick' || repMode === 'sphere' || (pdbId.toUpperCase() === '1YCR' && repMode === 'cartoon')) && (
          <>
            <div className="w-full h-px bg-slate-200/80 my-0.5"></div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Heteroatoms</span>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff0000]"></div>
              <span className="text-xs font-semibold text-slate-600">Oxygen (O)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0000ff]"></div>
              <span className="text-xs font-semibold text-slate-600">Nitrogen (N)</span>
            </div>
            {repMode !== 'cartoon' && (
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
                <span className="text-xs font-semibold text-slate-600">Sulfur (S)</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Controls overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
        <button 
          onClick={cycleRepresentation}
          disabled={isLoading}
          className="w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center relative group disabled:opacity-50"
          title={`Representation: ${repMode.charAt(0).toUpperCase() + repMode.slice(1)} (Click to change)`}
        >
          <Box className="w-4 h-4" />
          <span className="absolute right-12 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {repMode.charAt(0).toUpperCase() + repMode.slice(1)} Mode
          </span>
        </button>
        <button 
          onClick={toggleRotation}
          disabled={isLoading}
          className={`w-10 h-10 rounded-lg border shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 ${isRotating ? 'bg-slate-100 text-slate-900 border-slate-300' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          title="Toggle Rotation"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button 
          onClick={handleZoom}
          disabled={isLoading}
          className="w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center disabled:opacity-50"
          title="Reset Zoom"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button 
          onClick={toggleLabels}
          disabled={isLoading}
          className={`w-10 h-10 rounded-lg border shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 ${showLabels ? 'bg-slate-100 text-slate-900 border-slate-300' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          title="Toggle Labels"
        >
          <Tag className="w-4 h-4" />
        </button>
        <button 
          onClick={toggleSurface}
          disabled={isLoading}
          className={`w-10 h-10 rounded-lg border shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 ${showSurface ? 'bg-slate-100 text-slate-900 border-slate-300' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          title="Toggle Surface"
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}