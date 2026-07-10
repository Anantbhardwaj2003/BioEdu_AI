import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-emerald-500/30 text-emerald-300 text-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Bioinformatics as a Service</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-zinc-50 leading-tight"
            >
              What is <br />
              <span className="text-gradient">bioinformatics</span> <br />
              as a service?
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-zinc-400 max-w-xl"
            >
              Our service is designed for scientists who want easy access to just the right kind of bioinformatics expertise. Watch the video to learn how it works.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button className="px-8 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="glass-card p-2 relative overflow-hidden aspect-video rounded-3xl border border-zinc-50/10 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
              <iframe 
                className="w-full h-full rounded-2xl bg-[#0a0a0a]"
                src="https://www.youtube.com/embed/CDw4WPng2iE?autoplay=0&controls=1&rel=0" 
                title="What is Bioinformatics"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
