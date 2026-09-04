import { motion } from "motion/react";

const StatBar = ({ label, percentage, isPrimary, delay = 0 }: { label: string, percentage: number, isPrimary: boolean, delay?: number }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full group">
      <div className="flex justify-between md:block md:w-48 md:text-right shrink-0">
        <span className={`text-sm md:text-base transition-colors ${isPrimary ? 'font-bold text-slate-900' : 'font-medium text-slate-500 group-hover:text-slate-700'}`}>
          {label}
        </span>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className={`md:hidden font-mono text-sm ${isPrimary ? 'font-bold text-slate-900' : 'font-medium text-slate-400'}`}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="flex-1 flex items-center gap-4 w-full">
        <div className="flex-1 h-3 md:h-3.5 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/60 shadow-inner">
          <motion.div 
            className={`absolute top-0 left-0 h-full rounded-full ${isPrimary ? 'bg-slate-900 shadow-md' : 'bg-slate-300'} overflow-hidden`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay, type: "spring", bounce: 0.15 }}
          >
            {isPrimary ? (
              <>
                {/* Fast computational stripes for GeneBoxAI */}
                <motion.div
                  className="absolute inset-0 w-[200%]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 8px, transparent 8px, transparent 16px)',
                    backgroundSize: '22.62px 22.62px'
                  }}
                  animate={{ backgroundPosition: ['0px 0px', '22.62px 0px'] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </>
            ) : (
              <>
                {/* Slow, sluggish stripes for Traditional Approach */}
                <motion.div
                  className="absolute inset-0 w-[200%]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 8px, transparent 8px, transparent 16px)',
                    backgroundSize: '22.62px 22.62px'
                  }}
                  animate={{ backgroundPosition: ['0px 0px', '22.62px 0px'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </>
            )}
          </motion.div>
        </div>
        
        <div className="hidden md:block w-12 shrink-0">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className={`font-mono text-base ${isPrimary ? 'font-bold text-slate-900' : 'font-medium text-slate-400'}`}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#fafafa] pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-24 border-y border-slate-200/60 relative overflow-hidden">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-400 tracking-tight mb-4"
          >
            Biology already knows the problem.
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            We teach you the <br className="hidden md:block" /> computational force multiplier.
          </motion.h2>
        </div>

        {/* Visualizer */}
        <div className="max-w-3xl mx-auto flex flex-col gap-16 md:gap-20">
          
          {/* Traditional Approach */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 text-slate-400">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Traditional Approach</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            
            <div className="flex flex-col gap-6 px-2">
              <StatBar label="Biology" percentage={70} isPrimary={false} delay={0.3} />
              <StatBar label="AI" percentage={30} isPrimary={false} delay={0.4} />
            </div>
          </motion.div>

          {/* GeneBoxAI Approach */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
            className="relative bg-white rounded-3xl border-[1.5px] border-slate-900 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              GeneBoxAI
            </div>

            <div className="flex flex-col gap-8 pt-4">
              <StatBar label="AI / Computational" percentage={70} isPrimary={true} delay={0.6} />
              <StatBar label="Biology" percentage={30} isPrimary={false} delay={0.7} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}