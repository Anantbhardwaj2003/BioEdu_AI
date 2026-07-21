import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';
import { Target, ShieldAlert, Dna, Database, Activity, ScanLine, Crosshair } from 'lucide-react';

export function ImmunoOncologyPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative z-10 overflow-hidden pt-32 pb-24">
      <DNABackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Advanced Research Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Immuno-Oncology & <br className="hidden md:block"/> Cellular Therapies
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The intersection of immunology and cancer research, focusing on breakthroughs 
            that leverage the body's own immune system to target and destroy tumors.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-24 relative border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80" 
            alt="Advanced cell therapy and oncology research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 max-w-xl">
            <h3 className="text-2xl font-medium text-white mb-2">Tumor Immunology Facility</h3>
            <p className="text-zinc-300 text-sm">Engineering the next generation of adoptive cell transfer therapies.</p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Discover how biological therapies are changing the paradigm of oncology treatment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <ShieldAlert className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Checkpoint Inhibitors</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>PD-1/PD-L1 pathway mechanisms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Identifying predictors of response and resistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Novel combinations and next-gen checkpoints.</span>
                </li>
              </ul>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
                <Dna className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">CAR T-Cell Therapy</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Engineering chimeric antigen receptors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Improving T-cell trafficking and persistence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Overcoming antigen escape in liquid tumors.</span>
                </li>
              </ul>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                <ScanLine className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Tumor Microenvironment</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Mapping immunosuppressive stroma.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Modulating myeloid-derived suppressor cells (MDSCs).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Enhancing immune infiltration in solid tumors.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Detailed Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-6">
              <Crosshair className="w-4 h-4" />
              <span>Cellular Engineering</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Synthetic Immunity
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We focus on the genetic modification of autologous and allogeneic T cells. By equipping them with synthetic receptors, we grant the immune system unprecedented precision in recognizing and eliminating malignant cells.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">TCR Engineering</h4>
                  <p className="text-sm text-zinc-400">Isolating and expressing high-affinity T-cell receptors targeting intracellular tumor neoantigens.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Cell State Programming</h4>
                  <p className="text-sm text-zinc-400">Using logic-gated synthetic circuits to prevent T-cell exhaustion and off-target toxicities.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl opacity-50 rounded-[3rem]" />
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" 
              alt="Medical laboratory research" 
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-125 w-full"
            />
          </motion.div>
        </div>

        {/* Detailed Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-50 rounded-[3rem]" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Data and bioinformatics analysis" 
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-125 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              <span>Biomarker Discovery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Overcoming Immune Evasion
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Not all patients respond to immunotherapies. By leveraging spatial transcriptomics and deep learning, we identify biomarkers that predict response and design rational combination strategies to overcome resistance.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Tumor Mutational Burden (TMB)</h4>
                <p className="text-sm text-zinc-400">Assessing genome-wide mutation rates to estimate neoantigen load and immunogenicity.</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Spatial Profiling</h4>
                <p className="text-sm text-zinc-400">Mapping the physical interaction between cytotoxic T-cells and malignant cells within the tissue architecture.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Microbiome Interactions</h4>
                <p className="text-sm text-zinc-400">Studying how the gut microbiome modulates systemic immunity and influences the efficacy of checkpoint blockades.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}