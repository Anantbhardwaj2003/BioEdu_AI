import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';

export function GeneticsPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden pt-32 pb-24">
      <DNABackground />
      <div className="w-full max-w-4xl relative mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0f16]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Genetics</h1>
          <p className="text-zinc-400 text-lg mb-8">
            Dive deep into molecular genetics, inheritance patterns, and modern gene-editing technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-emerald-400 font-medium mb-3">CRISPR & Gene Editing</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Master the principles of CRISPR-Cas9 systems, off-target effects analysis, and the ethical implications of genetic engineering.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-cyan-400 font-medium mb-3">Population Genetics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Analyze genetic variation across populations, evolutionary biology mechanisms, and genome-wide association studies (GWAS).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}