import React, { useState } from 'react';

// ============================================================================
// 1. FULL CARD BACKGROUND: NGS DATA ANALYSIS
// Features a high-resolution laboratory sequencing image as the base,
// combined with an interactive scanning laser line, FastQ read matrix,
// and 4-color capillary electropherogram peak waves that react to user interaction.
// ============================================================================
export function NgsCardBackground() {
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [activeBase, setActiveBase] = useState<{ base: string; color: string; pos: number; q: number }>({
    base: 'G',
    color: '#fbbf24',
    pos: 1842,
    q: 41
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const percent = x / rect.width;
    setHoverX(x);
    
    // Determine base call based on position
    const bases = [
      { base: 'A', color: '#34d399', q: 42 },
      { base: 'C', color: '#38bdf8', q: 40 },
      { base: 'G', color: '#fbbf24', q: 43 },
      { base: 'T', color: '#f43f5e', q: 39 },
    ];
    const index = Math.floor(percent * 24) % bases.length;
    setActiveBase({
      ...bases[index],
      pos: Math.floor(1000 + percent * 18000),
    });
  };

  return (
    <div 
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHoverX(null)}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto"
    >
      {/* Real High-Resolution Photorealistic Laboratory Image as Card Background */}
      <img
        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80"
        alt="NGS DNA Sequencing Flow Cell & Laboratory"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out filter contrast-125 brightness-90"
      />

      {/* Bioluminescent Deep Ambience */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.2),transparent_70%)] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Right: High-tech FastQ Sequencing Matrix */}
      <div className="absolute top-5 right-5 pointer-events-none opacity-45 sm:opacity-55 font-mono text-[9px] sm:text-[10px] leading-relaxed tracking-widest text-right">
        <div className="text-cyan-300 font-bold">C C C C C C C C T #R1</div>
        <div className="text-emerald-400 font-medium">G G C C C G G C C G #R2</div>
        <div className="text-amber-400 font-medium">T G C C C G G C C G #R3</div>
        <div className="text-cyan-400 font-bold">C C C C G C C C G T #R4</div>
        <div className="text-rose-400 font-medium">A T G C T G A C T A #R5</div>
        <div className="text-sky-300/80 text-[8px] mt-1">ILLUMINA NOVASEQ • Q40+</div>
      </div>

      {/* Interactive Scan Tracker Line that follows mouse */}
      {hoverX !== null && (
        <div 
          className="absolute inset-y-0 w-px bg-sky-400/80 shadow-[0_0_12px_#38bdf8] pointer-events-none z-10 transition-transform duration-75"
          style={{ transform: `translateX(${hoverX}px)` }}
        >
          <div className="absolute top-16 -left-12 px-2 py-0.5 rounded bg-zinc-950/90 border border-sky-400/50 backdrop-blur-md shadow-lg text-[9px] font-mono text-sky-300 whitespace-nowrap">
            <span className="font-bold" style={{ color: activeBase.color }}>[{activeBase.base}]</span> {activeBase.pos} bp • Q{activeBase.q}
          </div>
        </div>
      )}

      {/* Center Dynamic Scanning Laser */}
      <div className="absolute inset-x-0 top-2/5 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent animate-pulse pointer-events-none" />

      {/* Bottom Capillary Electropherogram Waveform covering lower 50% */}
      <div className="absolute -bottom-2 inset-x-0 h-44 sm:h-52 opacity-60 sm:opacity-75 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 120" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cyanPeakGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="amberPeakGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="emeraldPeakGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="rosePeakGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Cytosine trace (Cyan) */}
          <path 
            d="M 0,110 Q 20,110 35,30 Q 50,110 80,110 Q 100,110 120,20 Q 140,110 180,110 Q 205,110 220,25 Q 235,110 280,110 Q 305,110 320,15 Q 335,110 400,110" 
            fill="url(#cyanPeakGrad)" 
          />
          <path 
            d="M 0,110 Q 20,110 35,30 Q 50,110 80,110 Q 100,110 120,20 Q 140,110 180,110 Q 205,110 220,25 Q 235,110 280,110 Q 305,110 320,15 Q 335,110 400,110" 
            stroke="#38bdf8" 
            strokeWidth="2" 
            fill="none" 
          />

          {/* Guanine trace (Yellow / Amber) */}
          <path 
            d="M 0,110 Q 45,110 60,35 Q 75,110 140,110 Q 155,30 Q 170,110 240,110 Q 260,25 Q 280,110 350,110 Q 365,40 Q 380,110 400,110" 
            fill="url(#amberPeakGrad)" 
          />
          <path 
            d="M 0,110 Q 45,110 60,35 Q 75,110 140,110 Q 155,30 Q 170,110 240,110 Q 260,25 Q 280,110 350,110 Q 365,40 Q 380,110 400,110" 
            stroke="#fbbf24" 
            strokeWidth="1.8" 
            fill="none" 
            opacity="0.9" 
          />

          {/* Thymine trace (Rose / Red) */}
          <path 
            d="M 0,110 Q 75,110 90,25 Q 105,110 190,110 Q 200,45 Q 210,110 290,110 Q 300,35 Q 310,110 400,110" 
            fill="url(#rosePeakGrad)" 
          />
          <path 
            d="M 0,110 Q 75,110 90,25 Q 105,110 190,110 Q 200,45 Q 210,110 290,110 Q 300,35 Q 310,110 400,110" 
            stroke="#f43f5e" 
            strokeWidth="1.6" 
            fill="none" 
            opacity="0.85" 
          />

          {/* Adenine trace (Green) */}
          <path 
            d="M 0,110 Q 15,40 25,110 Q 130,110 145,25 Q 160,110 230,110 Q 242,40 Q 254,110 335,110 Q 348,30 Q 360,110 400,110" 
            fill="url(#emeraldPeakGrad)" 
          />
          <path 
            d="M 0,110 Q 15,40 25,110 Q 130,110 145,25 Q 160,110 230,110 Q 242,40 Q 254,110 335,110 Q 348,30 Q 360,110 400,110" 
            stroke="#34d399" 
            strokeWidth="1.6" 
            fill="none" 
            opacity="0.9" 
          />
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// 2. FULL CARD BACKGROUND: RNA SEQ CELL VISUAL
// Features a microscopic fluorescent cellular biology image as the base,
// combined with an illuminated 3D eukaryotic cell structure, interactive organelle
// hotspots (Nucleus, Mitochondria, ER, Vesicles) that glow on hover.
// ============================================================================
export function RnaCellCardBackground() {
  const [activeOrganelle, setActiveOrganelle] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto">
      {/* Real High-Resolution Microscopic Fluorescent Cell Biology Image as Card Background */}
      <img
        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80"
        alt="Fluorescent Cell Microscopy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out filter contrast-125 brightness-90"
      />

      {/* Bioluminescent Deep Ambience */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(168,85,247,0.22),transparent_70%)] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #c084fc 1px, transparent 1px), linear-gradient(to bottom, #c084fc 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Organelle Live Indicator Banner */}
      {activeOrganelle && (
        <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-lg bg-zinc-950/85 border border-purple-400/50 backdrop-blur-md shadow-lg text-[10px] font-mono text-purple-300 animate-fadeIn">
          {activeOrganelle}
        </div>
      )}

      {/* Large 3D Eukaryotic Cell Graphic placed at right/center */}
      <div className="absolute -top-10 -right-12 sm:-right-6 w-80 h-80 sm:w-96 sm:h-96 opacity-70 sm:opacity-85 flex items-center justify-center pointer-events-none">
        {/* Outer Fluorescent Halo */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500/35 via-purple-500/45 to-sky-400/25 blur-xl animate-pulse" />

        {/* Phospholipid Bilayer Membrane */}
        <div className="absolute inset-8 rounded-full border-2 border-purple-400/60 shadow-[0_0_40px_rgba(192,132,252,0.45),inset_0_0_30px_rgba(168,85,247,0.35)] bg-gradient-to-b from-purple-950/40 via-indigo-950/30 to-black/60" />

        {/* Membrane Receptors & Surface Proteins */}
        <svg className="absolute inset-8 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(216, 180, 254, 0.4)" strokeWidth="0.8" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(129, 140, 248, 0.3)" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="12" cy="42" r="2.5" fill="#38bdf8" />
          <circle cx="88" cy="45" r="2.5" fill="#c084fc" />
          <circle cx="48" cy="8" r="2.5" fill="#818cf8" />
          <circle cx="52" cy="92" r="2.5" fill="#34d399" />
          <circle cx="25" cy="18" r="2" fill="#f472b6" />
          <circle cx="75" cy="82" r="2" fill="#38bdf8" />
        </svg>

        {/* Endoplasmic Reticulum (ER) Tubules */}
        <svg 
          className="absolute inset-12 w-64 h-64 pointer-events-auto cursor-pointer" 
          viewBox="0 0 100 100"
          onMouseEnter={() => setActiveOrganelle('ROUGH ER // RIBOSOMES • TRANSLATION')}
          onMouseLeave={() => setActiveOrganelle(null)}
        >
          <path d="M 22,40 Q 32,22 48,22 Q 66,22 76,38" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <path d="M 26,52 Q 38,68 54,68 Q 70,68 78,50" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
          <path d="M 30,60 Q 42,74 58,74 Q 72,74 74,60" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.75" />
        </svg>

        {/* Mitochondria with Internal Folded Cristae */}
        <div 
          onMouseEnter={() => setActiveOrganelle('MITOCHONDRIA // ATP SYNTHESIS')}
          onMouseLeave={() => setActiveOrganelle(null)}
          className="absolute top-16 left-16 w-11 h-5 rounded-full border border-sky-400/90 bg-sky-950/80 shadow-[0_0_15px_rgba(56,189,248,0.7)] rotate-12 flex items-center justify-center overflow-hidden pointer-events-auto cursor-pointer hover:scale-110 transition-transform"
        >
          <div className="w-full h-0.5 bg-sky-300" />
        </div>
        <div 
          onMouseEnter={() => setActiveOrganelle('MITOCHONDRIA // CRISTAE')}
          onMouseLeave={() => setActiveOrganelle(null)}
          className="absolute bottom-16 right-16 w-12 h-6 rounded-full border border-purple-400/90 bg-purple-950/80 shadow-[0_0_15px_rgba(192,132,252,0.7)] -rotate-30 flex items-center justify-center overflow-hidden pointer-events-auto cursor-pointer hover:scale-110 transition-transform"
        >
          <div className="w-full h-0.5 bg-purple-300" />
        </div>

        {/* Central Glowing Nucleus */}
        <div 
          onMouseEnter={() => setActiveOrganelle('NUCLEUS // CHROMATIN: ACTIVE')}
          onMouseLeave={() => setActiveOrganelle(null)}
          className="relative w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-sky-700 p-0.5 shadow-[0_0_40px_rgba(192,132,252,0.85)] flex items-center justify-center border border-purple-200/70 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-indigo-950 to-black flex items-center justify-center relative overflow-hidden">
            {/* Chromatin Threads */}
            <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 40 40">
              <path d="M 8,20 Q 20,10 32,20 Q 20,30 8,20" fill="none" stroke="#e9d5ff" strokeWidth="1.4" />
              <path d="M 12,14 Q 24,26 28,12" fill="none" stroke="#38bdf8" strokeWidth="1.4" />
            </svg>
            {/* Glowing Nucleolus */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white via-purple-200 to-indigo-300 shadow-[0_0_25px_rgba(255,255,255,0.95)]" />
          </div>
        </div>

        {/* Floating Ribosomes and Vesicles */}
        <span className="absolute top-12 right-24 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8]" />
        <span className="absolute top-24 right-12 w-2.5 h-2.5 rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc]" />
        <span className="absolute bottom-12 left-14 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#34d399]" />
        <span className="absolute bottom-24 left-10 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fbbf24]" />
      </div>

      {/* Transcriptome Annotation Tag */}
      <div className="absolute bottom-4 right-5 opacity-40 font-mono text-[9px] text-purple-300 tracking-wider pointer-events-none">
        <div>TRANSCRIPTOME // DEG</div>
        <div>14,892 EXPRESSED GENES</div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. FULL CARD BACKGROUND: UMAP / SINGLE-CELL VISUAL
// Features a deep multi-dimensional data manifold image as the base,
// combined with an interactive 2D UMAP projection manifold, coordinate guides,
// and hoverable single-cell clusters with live cell tooltips.
// ============================================================================
export function UmapCardBackground({ selectedCluster }: { selectedCluster?: string | null }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto">
      {/* Real High-Resolution Multi-omics Data Manifold Image as Card Background */}
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
        alt="Multi-omics Data Space Galaxy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out filter contrast-125 brightness-90"
      />

      {/* Bioluminescent Deep Ambience */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(52,211,153,0.18),transparent_70%)] pointer-events-none" />

      {/* Coordinate Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #34d399 1px, transparent 1px), linear-gradient(to bottom, #34d399 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Active Cluster Hover Tooltip Banner */}
      {hoveredNode && (
        <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-lg bg-zinc-950/85 border border-emerald-400/50 backdrop-blur-md shadow-lg text-[10px] font-mono text-emerald-300 animate-fadeIn">
          {hoveredNode}
        </div>
      )}

      {/* Coordinate Axes & Single-Cell Clusters SVG across card */}
      <div className="absolute inset-0 w-full h-full opacity-65 sm:opacity-80">
        <svg className="w-full h-full" viewBox="0 0 400 480" preserveAspectRatio="none">
          <defs>
            <radialGradient id="tCellFullGlow" cx="28%" cy="30%" r="35%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="monoFullGlow" cx="75%" cy="28%" r="35%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bCellFullGlow" cx="30%" cy="75%" r="35%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nkFullGlow" cx="72%" cy="75%" r="35%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Coordinate Guide Lines */}
          <line x1="40" y1="440" x2="360" y2="440" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="40" y1="40" x2="40" y2="440" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
          <text x="330" y="455" fill="#a1a1aa" fontSize="9" fontFamily="monospace">UMAP_1</text>
          <text x="25" y="35" fill="#a1a1aa" fontSize="9" fontFamily="monospace">UMAP_2</text>

          {/* Cluster Halos */}
          <ellipse cx="110" cy="140" rx="75" ry="50" fill="url(#tCellFullGlow)" />
          <ellipse cx="290" cy="130" rx="70" ry="45" fill="url(#monoFullGlow)" />
          <ellipse cx="120" cy="340" rx="70" ry="45" fill="url(#bCellFullGlow)" />
          <ellipse cx="280" cy="340" rx="65" ry="45" fill="url(#nkFullGlow)" />

          {/* Cluster 1: T cells (Cyan / Blue) */}
          <g 
            className={`cursor-pointer transition-opacity duration-200 ${selectedCluster && selectedCluster !== 'T cells' ? 'opacity-25' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredNode('T CELLS • 1,248 (CD3D+, CD8A+)')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {[
              [90, 110], [105, 95], [120, 120], [100, 135], [115, 145], [130, 105], [140, 130], [85, 125], 
              [125, 155], [95, 160], [130, 90], [145, 140], [110, 125], [135, 115], [80, 145], [110, 170],
              [120, 135], [130, 140], [150, 120], [98, 100], [106, 115], [114, 85], [122, 105], [85, 105],
              [140, 150], [125, 175], [105, 150], [115, 110]
            ].map(([cx, cy], i) => (
              <circle key={`t-${i}`} cx={cx} cy={cy} r="3" fill="#38bdf8" className="hover:scale-150 transition-transform" />
            ))}
          </g>

          {/* Cluster 2: Monocytes (Orange / Amber) */}
          <g 
            className={`cursor-pointer transition-opacity duration-200 ${selectedCluster && selectedCluster !== 'Monocytes' ? 'opacity-25' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredNode('MONOCYTES • 814 (CD14+, LYZ+)')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {[
              [270, 110], [285, 90], [300, 120], [275, 135], [290, 150], [305, 125], [280, 100], 
              [300, 145], [265, 125], [295, 100], [315, 135], [290, 165], [270, 155], [300, 110],
              [310, 115], [280, 140], [260, 140], [295, 130]
            ].map(([cx, cy], i) => (
              <circle key={`m-${i}`} cx={cx} cy={cy} r="3" fill="#fb923c" className="hover:scale-150 transition-transform" />
            ))}
          </g>

          {/* Cluster 3: B cells (Emerald / Green) */}
          <g 
            className={`cursor-pointer transition-opacity duration-200 ${selectedCluster && selectedCluster !== 'B cells' ? 'opacity-25' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredNode('B CELLS • 642 (MS4A1+, CD19+)')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {[
              [100, 310], [115, 330], [105, 360], [130, 320], [120, 365], [95, 345], [135, 355], [145, 325], 
              [110, 375], [120, 300], [140, 365], [105, 330], [128, 335], [112, 350], [132, 375],
              [90, 330], [125, 315], [140, 340]
            ].map(([cx, cy], i) => (
              <circle key={`b-${i}`} cx={cx} cy={cy} r="3" fill="#34d399" className="hover:scale-150 transition-transform" />
            ))}
          </g>

          {/* Cluster 4: NK cells (Purple / Magenta) */}
          <g 
            className={`cursor-pointer transition-opacity duration-200 ${selectedCluster && selectedCluster !== 'NK cells' ? 'opacity-25' : 'opacity-100'}`}
            onMouseEnter={() => setHoveredNode('NK CELLS • 426 (NKG7+, GNLY+)')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {[
              [260, 330], [272, 310], [285, 340], [268, 370], [280, 375], [292, 345], [264, 350], 
              [288, 368], [276, 330], [296, 320], [272, 390], [284, 395], [255, 345], [290, 355]
            ].map(([cx, cy], i) => (
              <circle key={`nk-${i}`} cx={cx} cy={cy} r="3" fill="#c084fc" className="hover:scale-150 transition-transform" />
            ))}
          </g>
        </svg>
      </div>

      {/* Cluster Coordinates Tag */}
      <div className="absolute bottom-4 right-5 opacity-40 font-mono text-[9px] text-emerald-300 tracking-wider pointer-events-none">
        <div>3,130 CELLS • SEURAT V5</div>
        <div>DIM REDUCTION: UMAP</div>
      </div>
    </div>
  );
}

// Backward compatibility exports in case imported as standalone visuals
export const NgsVisual = NgsCardBackground;
export const RnaCellVisual = RnaCellCardBackground;
export const UmapClusterVisual = UmapCardBackground;