import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DNABackground } from '../components/DNABackground';
import { useState, useEffect } from 'react';
import { Microscope, Dna, Brain, Shield, Target } from 'lucide-react';

const fields = [
  { name: 'Cancer Research', path: '/advanced-courses/cancer', icon: Target, color: 'text-emerald-300', bg: 'bg-gradient-to-br from-emerald-500/20 to-[#0a0f16]/90', border: 'border-emerald-500/50', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3),inset_0_1px_15px_rgba(16,185,129,0.4)]' },
  { name: 'Genetics', path: '/advanced-courses/genetics', icon: Dna, color: 'text-cyan-300', bg: 'bg-gradient-to-br from-cyan-500/20 to-[#0a0f16]/90', border: 'border-cyan-500/50', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3),inset_0_1px_15px_rgba(6,182,212,0.4)]' },
  { name: 'Nervous System', path: '/advanced-courses/nervous-system', icon: Brain, color: 'text-purple-300', bg: 'bg-gradient-to-br from-purple-500/20 to-[#0a0f16]/90', border: 'border-purple-500/50', glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3),inset_0_1px_15px_rgba(168,85,247,0.4)]' },
  { name: 'Immunology', path: '/advanced-courses/immunology', icon: Shield, color: 'text-rose-300', bg: 'bg-gradient-to-br from-rose-500/20 to-[#0a0f16]/90', border: 'border-rose-500/50', glow: 'shadow-[0_0_30px_rgba(244,63,94,0.3),inset_0_1px_15px_rgba(244,63,94,0.4)]' },
  { name: 'Immuno-oncology', path: '/advanced-courses/immuno-oncology', icon: Microscope, color: 'text-amber-300', bg: 'bg-gradient-to-br from-amber-500/20 to-[#0a0f16]/90', border: 'border-amber-500/50', glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3),inset_0_1px_15px_rgba(245,158,11,0.4)]' }
];

export function AdvancedCourses() {
  const [radius, setRadius] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 160 : 320);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] relative z-10 overflow-hidden pt-32 pb-24">
      <DNABackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Advanced Research Programs
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Explore our specialized research domains powered by Genebox AI. 
            Choose a field to dive into advanced methodologies and scientific discoveries.
          </p>
        </div>

        <div className="relative w-full max-w-225 mx-auto h-125 md:h-187.5 flex items-center justify-center">
          
          {/* Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {fields.map((_, i) => {
              const angle = (i * 360) / fields.length - 90;
              return (
                <motion.div
                  key={`line-${i}`}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: radius, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="absolute left-1/2 top-1/2 h-px bg-linear-to-r from-emerald-500/50 to-transparent origin-left"
                  style={{
                    transform: `rotate(${angle}deg)`,
                  }}
                />
              );
            })}
          </div>

          {/* Central 3D Cube */}
          <div className="absolute z-20" style={{ perspective: '1000px' }}>
            <motion.div
              animate={{ rotateY: [0, 360], rotateX: [15, 25, 15] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-30 h-30 md:w-40 md:h-40 relative"
            >
              {/* Front */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'translateZ(60px)' : 'translateZ(80px)' }}
              >
                <span className="font-display font-bold text-emerald-300 text-sm md:text-lg text-center leading-tight tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">GENEBOX<br/>AI</span>
              </div>
              {/* Back */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'rotateY(180deg) translateZ(60px)' : 'rotateY(180deg) translateZ(80px)' }}
              >
                <span className="font-display font-bold text-emerald-300 text-sm md:text-lg text-center leading-tight tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">GENEBOX<br/>AI</span>
              </div>
              {/* Right */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'rotateY(90deg) translateZ(60px)' : 'rotateY(90deg) translateZ(80px)' }}
              >
                <span className="font-display font-bold text-emerald-300 text-sm md:text-lg text-center leading-tight tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">GENEBOX<br/>AI</span>
              </div>
              {/* Left */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'rotateY(-90deg) translateZ(60px)' : 'rotateY(-90deg) translateZ(80px)' }}
              >
                <span className="font-display font-bold text-emerald-300 text-sm md:text-lg text-center leading-tight tracking-wider drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">GENEBOX<br/>AI</span>
              </div>
              {/* Top */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'rotateX(90deg) translateZ(60px)' : 'rotateX(90deg) translateZ(80px)' }}
              ></div>
              {/* Bottom */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-[#0a0f16]/90 backdrop-blur-md border border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.4)]"
                style={{ transform: radius === 160 ? 'rotateX(-90deg) translateZ(60px)' : 'rotateX(-90deg) translateZ(80px)' }}
              ></div>
            </motion.div>
          </div>

          {/* Spherical Nodes */}
          {fields.map((field, i) => {
            const angle = (i * 360) / fields.length - 90;
            const radian = angle * (Math.PI / 180);
            
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            const Icon = field.icon;

            return (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                transition={{ 
                  delay: 0.2 + i * 0.1, 
                  type: 'spring', 
                  stiffness: 100, 
                  damping: 15 
                }}
                className="absolute z-30"
              >
                <Link to={field.path}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`w-28 h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center gap-2 backdrop-blur-2xl border ${field.bg} ${field.border} ${field.glow} hover:border-white/30 transition-all cursor-pointer relative group overflow-hidden`}
                  >
                    {/* Glass Highlight */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 to-transparent pointer-events-none opacity-50"></div>
                    
                    <Icon className={`w-8 h-8 md:w-12 md:h-12 ${field.color} relative z-10 drop-shadow-[0_0_8px_currentColor]`} />
                    <span className="text-white text-[11px] md:text-[14px] font-semibold text-center px-2 md:px-3 leading-tight relative z-10 drop-shadow-md">{field.name}</span>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
