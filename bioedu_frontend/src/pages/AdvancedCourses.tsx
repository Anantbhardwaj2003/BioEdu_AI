import { motion } from 'motion/react';
import { Microscope } from 'lucide-react';

export function AdvancedCourses() {
  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-16 max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center mb-6 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <Microscope className="w-10 h-10 text-emerald-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-zinc-50 mb-4">Advanced Courses</h1>
        <p className="text-zinc-400 text-lg">
          Our advanced curriculum is currently being structured by our lead researchers. 
          Check back soon for courses on Quantum Biology, Advanced Bioinformatics, and more.
        </p>
      </motion.div>
    </div>
  );
}
