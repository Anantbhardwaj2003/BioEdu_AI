import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';
import { Brain, Network, Database, Microscope, Activity, Cpu } from 'lucide-react';

export function NervousSystemPage() {
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
            <Brain className="w-4 h-4" />
            <span>Advanced Research Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Neurobiology & <br className="hidden md:block"/> Computational Neuroscience
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Investigating the complexities of the nervous system through advanced neuroinformatics, 
            neural network modeling, and the molecular pathology of neurodegeneration.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-24 relative border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80" 
            alt="Brain neurons and connections" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 max-w-xl">
            <h3 className="text-2xl font-medium text-white mb-2">Systems Neurobiology</h3>
            <p className="text-zinc-300 text-sm">Mapping neural circuits and decoding synaptic transmission pathways to understand cognition and behavior.</p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our neurobiology curriculum explores the nervous system from single ion channels to whole-brain networks.</p>
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
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Neuroinformatics</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Processing high-dimensional neuroimaging data (fMRI, PET).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Connectomics and brain network graph theory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Machine learning for brain-computer interfaces (BCI).</span>
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
              <h3 className="text-xl font-medium text-white mb-4">Molecular Neuropathology</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Protein misfolding in neurodegenerative diseases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Glial cell biology and neuroinflammation mechanisms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Genetic risk factors for Alzheimer's and Parkinson's.</span>
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
                <Network className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Neural Circuits</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Optogenetics for targeted pathway mapping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Electrophysiology and synaptic plasticity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Computational models of sensory processing.</span>
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
              <span>Computational Modeling</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Simulating the Brain
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              By combining vast neurobiological data with advanced computational frameworks, we construct mathematical models that replicate neural activity and cognitive functions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Spiking Neural Networks</h4>
                  <p className="text-sm text-zinc-400">Developing biophysically realistic models of neurons that capture the complex dynamics of action potentials and learning rules like STDP.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Whole-Brain Dynamics</h4>
                  <p className="text-sm text-zinc-400">Simulating large-scale connectivity matrices to understand how localized disruptions lead to global neurological disorders.</p>
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
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl opacity-50 rounded-[3rem]" />
            <img 
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80" 
              alt="Data visualization of brain networks" 
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[500px] w-full"
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
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-50 rounded-[3rem]" />
            <img 
              src="https://images.unsplash.com/photo-1631557088998-6bb75eb207de?auto=format&fit=crop&w=800&q=80" 
              alt="Microscopic view of neural cells" 
              className="relative rounded-2xl border border-white/10 shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-6">
              <Microscope className="w-4 h-4" />
              <span>Translational Neuroscience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Tackling Neurodegeneration
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Our research focuses on uncovering the molecular pathophysiology underlying debilitating disorders like Alzheimer's, Parkinson's, and ALS to identify novel therapeutic targets.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Protein Aggregation</h4>
                <p className="text-sm text-zinc-400">Studying the mechanisms of amyloid-beta, tau, and alpha-synuclein misfolding and clearance pathways.</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Neuro-Immune Interactions</h4>
                <p className="text-sm text-zinc-400">Investigating the role of microglia and astrocytes in driving neuroinflammation and neuronal death.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Biomarker Discovery</h4>
                <p className="text-sm text-zinc-400">Identifying transcriptomic and proteomic signatures in CSF and blood for early diagnosis.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
