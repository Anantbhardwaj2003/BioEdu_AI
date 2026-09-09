import { Microscope } from "lucide-react";
import { motion } from "motion/react";
import ProteinViewer from "./ProteinViewer";
import { Link } from "react-router-dom";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      } 
    }
  };

  return (
    <div className="bg-[#fafafa] relative overflow-hidden">
      {/* Animated Gradient Line Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent z-20 overflow-hidden">
        <motion.div 
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-70"
          animate={{ x: ['-100%', '300%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>

      {/* Glass morphism background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-300/30 mix-blend-multiply blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-zinc-300/30 mix-blend-multiply blur-[120px]"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-gray-300/30 mix-blend-multiply blur-[120px]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/60 text-slate-800 text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
            >
              <Microscope className="w-4 h-4" />
              <span>Advancing applied AI & Bioinformatics</span>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="font-outfit text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600">
                Learn the AI <br className="hidden md:block" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
                transforming biology.
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed mb-10 font-light"
            >
              Learn from researchers working at the frontier of science. Join our global community turning cutting-edge research into credentialed skills.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/workshops" className="inline-flex items-center justify-center bg-slate-900 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-black transition-all shadow-md shadow-slate-900/20 hover:shadow-lg hover:shadow-slate-900/30 hover:-translate-y-0.5">
                Explore Workshops
              </Link>
              <Link to="/experts" className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm text-slate-950 border border-slate-200/60 px-7 py-3.5 rounded-lg text-sm font-semibold hover:border-slate-300 hover:bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Meet Experts
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Protein Graphic Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Background decorative glow/shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-zinc-100 rounded-[2.5rem] transform -rotate-3 -z-10 blur-sm opacity-60"></div>
            
            <div className="relative p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20 bg-white/30 backdrop-blur-md aspect-square md:aspect-[4/3] lg:aspect-square group cursor-grab active:cursor-grabbing">
              {/* Inner frame for the 3D canvas */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/20 shadow-inner">
                <ProteinViewer />
              </div>
              
              {/* Floating technical badges */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 z-10 pointer-events-none transition-transform group-hover:scale-105">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs border border-slate-200 shadow-sm">3D</div>
                <div>
                  <p className="text-xs font-bold text-slate-950">MDM2 - p53 Complex</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Interactive Model (PDB: 1YCR)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
