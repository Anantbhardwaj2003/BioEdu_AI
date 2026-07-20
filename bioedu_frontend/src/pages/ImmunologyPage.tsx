import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';

export function ImmunologyPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden pt-32 pb-24">
      <DNABackground />
      <div className="w-full max-w-4xl relative mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0f16]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Immunology</h1>
          <p className="text-zinc-400 text-lg mb-8">
            Understand the immune system's mechanisms, infectious diseases, and vaccine development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-emerald-400 font-medium mb-3">Systems Immunology</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Apply multi-omics approaches to study the dynamic responses of the immune system to pathogens and environmental challenges.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-cyan-400 font-medium mb-3">Vaccinomics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Explore the role of host genetics in immune response variation and the computational design of novel vaccine candidates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}