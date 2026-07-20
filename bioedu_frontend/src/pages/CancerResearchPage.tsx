import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';

export function CancerResearchPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden pt-32 pb-24">
      <DNABackground />
      <div className="w-full max-w-4xl relative mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0f16]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Cancer Research</h1>
          <p className="text-zinc-400 text-lg mb-8">
            Explore advanced methodologies in cancer genomics, tumor microenvironment analysis, and targeted therapeutics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-emerald-400 font-medium mb-3">Oncology Genomics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Learn about mutational signatures, driver genes, and the complex genomic landscape of various cancer types using state-of-the-art sequencing data.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-cyan-400 font-medium mb-3">Precision Medicine</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Discover how bioinformatics enables personalized treatment strategies by matching genomic alterations with targeted therapies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}