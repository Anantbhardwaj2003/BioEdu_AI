import { motion } from 'motion/react';
import { DNABackground } from '../components/DNABackground';
import { Dna, Scissors, Users, Fingerprint, Database, FlaskConical, Activity } from 'lucide-react';

export function GeneticsPage() {
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
            <Dna className="w-4 h-4" />
            <span>Advanced Research Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Advanced Genetics <br className="hidden md:block"/> & Genomic Sciences
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Exploring the fundamental code of life through molecular genetics, 
            precision gene editing, and comprehensive population studies.
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
            src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80" 
            alt="DNA Structure and Research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 max-w-xl">
            <h3 className="text-2xl font-medium text-white mb-2">Molecular Genetics Core</h3>
            <p className="text-zinc-300 text-sm">Decoding genomic variations and their functional consequences using next-generation sequencing.</p>
          </div>
        </motion.div>

        {/* Core Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Core Research Pillars</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our genetics curriculum spans from single base-pair edits to global population dynamics.</p>
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
                <Fingerprint className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Molecular Genetics</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Gene expression regulation and epigenetics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>RNA processing and post-transcriptional modifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                  <span>Structural variants and genome architecture.</span>
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
                <Scissors className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">CRISPR & Gene Editing</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Guide RNA design and off-target prediction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Base editing and prime editing technologies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <span>Therapeutic applications of engineered nucleases.</span>
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
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Population Genetics</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Genome-wide association studies (GWAS) analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Evolutionary dynamics and allele frequency mapping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <span>Polygenic risk scores for complex traits.</span>
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
              <FlaskConical className="w-4 h-4" />
              <span>Precision Editing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Engineering the Genome
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We leverage the latest CRISPR-Cas systems to create precise, targeted alterations in the DNA. This allows researchers to model diseases, study gene function, and develop potential cures for monogenic disorders.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Targeted Knockouts</h4>
                  <p className="text-sm text-zinc-400">Silencing specific genes to observe phenotypic changes and map functional pathways.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Homology-Directed Repair</h4>
                  <p className="text-sm text-zinc-400">Inserting specific sequences or correcting mutations with precise DNA templates.</p>
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
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" 
              alt="DNA and Gene Editing" 
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Data visualization and analysis" 
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
              <Database className="w-4 h-4" />
              <span>Big Data Genomics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Analyzing Populations at Scale
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Understanding the genetic basis of complex traits requires vast amounts of data. We utilize large-scale biobanks and advanced statistical methods to find patterns hidden within millions of genomes.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Variant Calling & Annotation</h4>
                <p className="text-sm text-zinc-400">Identifying SNPs, indels, and structural variants from whole-genome sequencing datasets.</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Ancestry & Demographics</h4>
                <p className="text-sm text-zinc-400">Tracing human migrations and understanding population stratification using admixture models.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h4 className="text-white font-medium mb-2">Clinical Genomics</h4>
                <p className="text-sm text-zinc-400">Translating population insights into polygenic risk scores to predict disease susceptibility.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}