import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';
import { Shield, Microscope, Database, Activity, Network, FlaskConical } from 'lucide-react';

export function ImmunologyPage() {
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
            <Shield className="w-4 h-4" />
            <span>Advanced Research Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Systems Immunology & <br className="hidden md:block"/> Infectious Diseases
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Understanding the immune system's mechanisms, host-pathogen interactions, 
            and accelerating computational vaccine development.
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
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80" 
            alt="Laboratory analysis of samples" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 max-w-xl">
            <h3 className="text-2xl font-medium text-white mb-2">Molecular Immunology Core</h3>
            <p className="text-zinc-300 text-sm">Mapping the adaptive and innate immune responses at a single-cell resolution.</p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our immunology curriculum bridges the gap between traditional cellular biology and modern systems-level analysis.</p>
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
                <Network className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Systems Immunology</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Mapping complex cytokine regulatory networks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Single-cell transcriptomics of immune infiltrates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Predictive modeling of autoimmune responses.</span>
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
                <Microscope className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Infectious Diseases</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Pathogen-host interaction dynamics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Mechanisms of viral entry and replication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Antimicrobial resistance (AMR) genomics.</span>
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
                <FlaskConical className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Vaccinomics</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Computational antigen discovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Host genetics and varied immune responses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Adjuvant engineering and delivery systems.</span>
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
              <span>Immunoinformatics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Decoding Immune Repertoires
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              By analyzing the highly variable regions of B-cell and T-cell receptors, we can trace the clonal expansion of specific immune cells in response to vaccines or infections, providing unprecedented insight into adaptive immunity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">TCR/BCR Sequencing</h4>
                  <p className="text-sm text-zinc-400">High-throughput sequencing of immune repertoires to measure diversity and track antigen-specific clones.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Epitope Prediction Models</h4>
                  <p className="text-sm text-zinc-400">Utilizing machine learning algorithms to predict MHC binding affinities and identify potential vaccine targets.</p>
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
              alt="Data analysis for immunology" 
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
              src="https://tse4.mm.bing.net/th/id/OIP.4EUUsvpI_oqVPitB5wNTmQHaE2?r=0&pid=Api&P=0&h=180" 
              alt="Next generation vaccine development" 
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
              <FlaskConical className="w-4 h-4" />
              <span>Next-Gen Prophylactics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Accelerating Vaccine Design
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Moving beyond empirical vaccine development, we employ rational, structure-based design and mRNA platform optimization to rapidly respond to emerging global health threats.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Structural Biology</h4>
                <p className="text-sm text-zinc-400">Cryo-EM and computational modeling of viral fusion proteins to design stabilized immunogens.</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">mRNA Therapeutics</h4>
                <p className="text-sm text-zinc-400">Optimizing lipid nanoparticle (LNP) delivery systems and synthetic mRNA constructs for enhanced stability.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Immune Correlates</h4>
                <p className="text-sm text-zinc-400">Defining the precise biomarkers of protection to streamline clinical trial efficacy evaluations.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}