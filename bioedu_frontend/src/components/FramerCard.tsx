import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface FramerCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

export default function FramerCard({
  children,
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.12)',
  borderColor = 'rgba(255, 255, 255, 0.15)',
  onClick
}: FramerCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -4;
    const tiltY = ((x - centerX) / centerX) * 4;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(255, 255, 255, 0.08)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.6)'
      }}
      className={`relative rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* Framer Spotlight Background Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 65%)`,
        }}
      />

      {/* Framer Spotlight Border Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${borderColor}, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Card Content Container */}
      <div className="relative h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}