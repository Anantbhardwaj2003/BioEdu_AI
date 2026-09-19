import React, { useRef, useEffect, useState } from 'react';

interface InteractiveDnaHelixProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function InteractiveDnaHelix({
  className = '',
  width = 520,
  height = 240
}: InteractiveDnaHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [_, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationOffsetRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.008, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // DNA Base pairs definition
    const baseTypes = [
      { name1: 'Adenine (A)', name2: 'Thymine (T)', color1: '#38bdf8', color2: '#a855f7', hBonds: 2 },
      { name1: 'Guanine (G)', name2: 'Cytosine (C)', color1: '#34d399', color2: '#fb923c', hBonds: 3 },
      { name1: 'Thymine (T)', name2: 'Adenine (A)', color1: '#a855f7', color2: '#38bdf8', hBonds: 2 },
      { name1: 'Cytosine (C)', name2: 'Guanine (G)', color1: '#fb923c', color2: '#34d399', hBonds: 3 },
      { name1: 'Adenine (A)', name2: 'Thymine (T)', color1: '#38bdf8', color2: '#a855f7', hBonds: 2 },
      { name1: 'Cytosine (C)', name2: 'Guanine (G)', color1: '#fb923c', color2: '#34d399', hBonds: 3 },
      { name1: 'Guanine (G)', name2: 'Cytosine (C)', color1: '#34d399', color2: '#fb923c', hBonds: 3 },
      { name1: 'Thymine (T)', name2: 'Adenine (A)', color1: '#a855f7', color2: '#38bdf8', hBonds: 2 },
    ];

    const numBasePairs = 28;
    const helixRadius = 42;
    const strandSpacing = 16;
    const pitch = 0.32; // radians per step

    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Advance rotation unless dragging
      if (!isDragging) {
        angle += velocityRef.current.x;
        // Damping towards standard velocity
        velocityRef.current.x += (0.012 - velocityRef.current.x) * 0.05;
      }

      const currentAngle = angle + rotationOffsetRef.current.x;
      const tiltAngle = rotationOffsetRef.current.y * 0.005;

      const centerX = width / 2;
      const centerY = height / 2;

      // 3D Points collection for depth sorting
      interface RenderElement {
        type: 'rung' | 'backboneNode';
        z: number;
        draw: () => void;
      }

      const renderQueue: RenderElement[] = [];

      // Generate points for DNA structure
      for (let i = 0; i < numBasePairs; i++) {
        const xPos = (i - numBasePairs / 2) * strandSpacing + centerX;
        const currentPhase = currentAngle + i * pitch;
        const base = baseTypes[i % baseTypes.length];

        // 3D positions for Strand 1 & Strand 2
        // Major/Minor groove offset ~ 140 deg vs 220 deg
        const grooveOffset = 2.4; 
        const y1 = centerY + Math.sin(currentPhase) * helixRadius;
        const z1 = Math.cos(currentPhase) * helixRadius;

        const y2 = centerY + Math.sin(currentPhase + grooveOffset) * helixRadius;
        const z2 = Math.cos(currentPhase + grooveOffset) * helixRadius;

        // Apply slight tilt
        const tiltedY1 = y1 + z1 * tiltAngle;
        const tiltedY2 = y2 + z2 * tiltAngle;

        const avgZ = (z1 + z2) / 2;

        // Depth perspective scale
        const scale1 = (z1 + 100) / 100;
        const scale2 = (z2 + 100) / 100;
        const alpha1 = Math.max(0.2, Math.min(1, (z1 + helixRadius) / (helixRadius * 2)));
        const alpha2 = Math.max(0.2, Math.min(1, (z2 + helixRadius) / (helixRadius * 2)));

        // 1. Rung element (Base pair bond)
        renderQueue.push({
          type: 'rung',
          z: avgZ,
          draw: () => {
            const midX = (xPos + xPos) / 2;
            const midY = (tiltedY1 + tiltedY2) / 2;

            // Half-strand 1 to center
            ctx.beginPath();
            ctx.moveTo(xPos, tiltedY1);
            ctx.lineTo(midX, midY);
            ctx.strokeStyle = base.color1;
            ctx.globalAlpha = Math.max(0.15, (avgZ + helixRadius) / (helixRadius * 2.2));
            ctx.lineWidth = Math.max(1, 2.2 * ((avgZ + 60) / 100));
            ctx.stroke();

            // Half-strand 2 to center
            ctx.beginPath();
            ctx.moveTo(midX, midY);
            ctx.lineTo(xPos, tiltedY2);
            ctx.strokeStyle = base.color2;
            ctx.stroke();

            // Hydrogen bond markers at the center
            ctx.beginPath();
            ctx.arc(midX, midY, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.globalAlpha = Math.max(0.3, alpha1 * alpha2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        });

        // 2. Backbone node 1 (Strand 1)
        renderQueue.push({
          type: 'backboneNode',
          z: z1,
          draw: () => {
            const radius = Math.max(2, 4.5 * scale1);
            // Outer glow
            const glowGradient = ctx.createRadialGradient(xPos, tiltedY1, 0, xPos, tiltedY1, radius * 2.5);
            glowGradient.addColorStop(0, `${base.color1}99`);
            glowGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(xPos, tiltedY1, radius * 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Core bead
            const beadGrad = ctx.createRadialGradient(xPos - radius * 0.3, tiltedY1 - radius * 0.3, 0, xPos, tiltedY1, radius);
            beadGrad.addColorStop(0, '#ffffff');
            beadGrad.addColorStop(0.4, base.color1);
            beadGrad.addColorStop(1, '#090d16');
            ctx.fillStyle = beadGrad;
            ctx.beginPath();
            ctx.arc(xPos, tiltedY1, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // 3. Backbone node 2 (Strand 2)
        renderQueue.push({
          type: 'backboneNode',
          z: z2,
          draw: () => {
            const radius = Math.max(2, 4.5 * scale2);
            // Outer glow
            const glowGradient = ctx.createRadialGradient(xPos, tiltedY2, 0, xPos, tiltedY2, radius * 2.5);
            glowGradient.addColorStop(0, `${base.color2}99`);
            glowGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(xPos, tiltedY2, radius * 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Core bead
            const beadGrad = ctx.createRadialGradient(xPos - radius * 0.3, tiltedY2 - radius * 0.3, 0, xPos, tiltedY2, radius);
            beadGrad.addColorStop(0, '#ffffff');
            beadGrad.addColorStop(0.4, base.color2);
            beadGrad.addColorStop(1, '#090d16');
            ctx.fillStyle = beadGrad;
            ctx.beginPath();
            ctx.arc(xPos, tiltedY2, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Sort all elements back-to-front (Painter's algorithm)
      renderQueue.sort((a, b) => a.z - b.z);

      // Draw all elements in 3D depth order
      renderQueue.forEach(item => item.draw());

      // Floating luminous particles around the DNA
      const time = Date.now() * 0.001;
      for (let p = 0; p < 12; p++) {
        const px = centerX + Math.sin(time * 0.5 + p) * 180;
        const py = centerY + Math.cos(time * 0.7 + p * 1.5) * 45;
        const pSize = Math.sin(time + p) * 1.2 + 1.8;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.5, pSize), 0, Math.PI * 2);
        ctx.fillStyle = p % 2 === 0 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(168, 85, 247, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, isDragging]);

  // Mouse drag handlers for interactive 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      rotationOffsetRef.current.x += deltaX * 0.01;
      rotationOffsetRef.current.y += deltaY;
      velocityRef.current.x = deltaX * 0.002;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    } else {
      // Subtle interactive parallax on hover
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        velocityRef.current.x = 0.01 + relX * 0.02;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`relative select-none cursor-grab active:cursor-grabbing group ${className}`}
      title="Interactive 3D DNA Double Helix • Drag to rotate"
    >
      <canvas 
        ref={canvasRef}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="w-full h-full block"
      />
    </div>
  );
}