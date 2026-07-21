import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';
import { Microscope, Dna, Target, Database, Activity, FileSearch, Beaker, Network } from 'lucide-react';

export function CancerResearchPage() {
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
            <Microscope className="w-4 h-4" />
            <span>Advanced Research Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Advanced Cancer <br className="hidden md:block"/> Research & Oncology
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Pioneering the next generation of cancer treatment through multi-omics integration, 
            tumor microenvironment mapping, and computational biomarker discovery.
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
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80" 
            alt="Advanced laboratory research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 max-w-xl">
            <h3 className="text-2xl font-medium text-white mb-2">Translational Oncology Lab</h3>
            <p className="text-zinc-300 text-sm">Bridging the gap between molecular discoveries and clinical applications through high-throughput screening.</p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our curriculum and ongoing research programs are structured around three fundamental pillars of modern molecular oncology.</p>
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
                <Dna className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Genomic Instability</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Analysis of mutational signatures and somatic variants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Chromosomal aberrations and copy number variations (CNV).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Epigenetic modifications and chromatin remodeling in tumorigenesis.</span>
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
                <Network className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Tumor Microenvironment</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Single-cell profiling of immune infiltrates and stroma.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Spatial transcriptomics to map cell-to-cell interactions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Hypoxia, angiogenesis, and metabolic reprogramming mechanisms.</span>
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
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Precision Therapeutics</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Computational docking and drug-target interaction modeling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Predictive biomarkers for immunotherapy response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Overcoming acquired resistance through combination therapies.</span>
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
              <Database className="w-4 h-4" />
              <span>Multi-omics Integration</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Decoding Complexity with Data Science
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Cancer is not a single disease, but a complex, rapidly evolving biological system. Our research methodologies heavily emphasize the integration of vast multidimensional datasets to uncover hidden vulnerabilities in cancer cells.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Transcriptomics (RNA-Seq)</h4>
                  <p className="text-sm text-zinc-400">Analyzing differential gene expression and splice variants to identify active pathways driving tumor growth.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <FileSearch className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Proteomics & Metabolomics</h4>
                  <p className="text-sm text-zinc-400">Quantifying protein abundance and metabolic flux to understand the functional state of the cancer cell.</p>
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
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" 
              alt="Data analysis in laboratory" 
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
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" 
              alt="Researcher looking through microscope" 
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
              <Beaker className="w-4 h-4" />
              <span>Clinical Translation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              From Bench to Bedside
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We bridge the gap between computational discovery and clinical application. By validating in-silico predictions through rigorous wet-lab assays, we accelerate the development of life-saving therapeutics.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">1. Target Identification</h4>
                <p className="text-sm text-zinc-400">Utilizing CRISPR-Cas9 screens and deep learning models to identify essential genes for tumor survival.</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">2. Compound Screening</h4>
                <p className="text-sm text-zinc-400">High-throughput evaluation of small molecules and biologics against 3D patient-derived organoids (PDOs).</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">3. Biomarker Validation</h4>
                <p className="text-sm text-zinc-400">Developing companion diagnostics to ensure the right drug is delivered to the right patient at the right time.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}