import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';

export function ImmunoOncologyPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden pt-32 pb-24">
      <DNABackground />
      <div className="w-full max-w-4xl relative mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0f16]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Immuno-oncology</h1>
          <p className="text-zinc-400 text-lg mb-8">
            The intersection of immunology and cancer research, focusing on therapies that leverage the immune system to fight tumors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-emerald-400 font-medium mb-3">Checkpoint Inhibitors</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Study the mechanisms of immune checkpoints (like PD-1/PD-L1) and analyze patient data to predict responses to immunotherapy.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl text-cyan-400 font-medium mb-3">CAR T-Cell Therapy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Learn about the engineering of chimeric antigen receptors and the bioinformatics tools used to monitor T-cell proliferation and efficacy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}