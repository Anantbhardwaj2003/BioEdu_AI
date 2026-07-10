import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Microscope, Dna, Brain, Shield, FlaskConical, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { CancerModel, GeneticsModel, NervousSystemModel, ImmunologyModel, DrugDevelopmentModel } from './Research3DModels';

const researchData = [
  {
    id: 'cancer',
    title: 'Cancer',
    icon: Microscope,
    Model: CancerModel,
    benefits: [
      'Tumor microenvironment analysis.',
      'Targeted therapy development.',
      'Immunotherapy integration.',
      'Translational clinical trials.'
    ],
    details: 'Our cancer research focuses on the molecular mechanisms of tumor growth, the immune system\'s response to cancer cells, and the development of targeted therapies. We are dedicated to translating basic science discoveries into clinical applications that improve patient outcomes.'
  },
  {
    id: 'genetics',
    title: 'Genetics',
    icon: Dna,
    Model: GeneticsModel,
    benefits: [
      'DNA replication mechanisms.',
      'Complex trait mapping.',
      'Gene editing technologies.',
      'Inheritance patterns.'
    ],
    details: 'The Genetics department studies the role of genes in health and disease. Our work ranges from understanding fundamental mechanisms of DNA replication and repair to mapping the genetic basis of complex traits and developing novel gene editing technologies.'
  },
  {
    id: 'nervous-system',
    title: 'Nervous System',
    icon: Brain,
    Model: NervousSystemModel,
    benefits: [
      'Neural network complexities.',
      'Neurodevelopmental processes.',
      'Neurodegenerative diseases.',
      'Learning and memory circuits.'
    ],
    details: 'Our research on the nervous system aims to unravel the mysteries of brain function, from cellular processes to complex behaviors. We study neurodevelopment, neurodegeneration, and the neural circuits underlying learning, memory, and perception.'
  },
  {
    id: 'immunology',
    title: 'Immunology',
    icon: Shield,
    Model: ImmunologyModel,
    benefits: [
      'Pathogen defense mechanisms.',
      'Innate and adaptive immunity.',
      'Vaccine development.',
      'Autoimmune disease treatments.'
    ],
    details: 'Immunology research at our institute explores how the immune system protects the body against infections and how it can be harnessed to treat cancer and autoimmune diseases. We focus on innate and adaptive immunity, vaccine development, and immunotherapy.'
  },
  {
    id: 'drug-development',
    title: 'Drug Development',
    icon: FlaskConical,
    Model: DrugDevelopmentModel,
    benefits: [
      'High-throughput screening.',
      'Structure-based drug design.',
      'Pharmacological studies.',
      'Optimization of new candidates.'
    ],
    details: 'The Drug Development program bridges the gap between basic research and clinical trials. We employ cutting-edge screening technologies, structure-based drug design, and pharmacological studies to identify and optimize new drug candidates for various diseases.'
  }
];

export function ResearchAreas() {
  const [selectedArea, setSelectedArea] = useState<typeof researchData[0] | null>(null);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-zinc-50 mb-4"
          >
            Research Areas
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {researchData.map((area, index) => {
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Floating 3D-like Icon Breakout */}
                <div className="absolute -top-16 left-4 z-20 w-36 h-36 pointer-events-none">
                  <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0d9488" />
                    <Environment preset="city" />
                    <area.Model />
                  </Canvas>
                </div>

                {/* Card Body */}
                <div className="bg-[#1b212b] border border-white/5 rounded-[2rem] p-8 pt-20 flex-grow shadow-2xl shadow-black/40 flex flex-col relative overflow-hidden group">
                  {/* Subtle inner top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <h3 className="text-3xl font-display font-medium text-zinc-50 mb-8 tracking-wide">
                    {area.title}
                  </h3>
                  
                  <div className="flex-grow">
                    <h4 className="text-[#4ade80] font-medium text-[17px] mb-5 tracking-wide">Benefits</h4>
                    <ul className="space-y-4">
                      {area.benefits.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-2 h-2 rounded-full bg-[#4ade80] mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                          <span className="text-zinc-400 text-[15px] leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-10">
                    <button
                      onClick={() => setSelectedArea(area)}
                      className="text-zinc-500 text-sm font-medium hover:text-zinc-300 transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                    >
                      Read more <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArea(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#1b212b] border border-white/10 rounded-[2rem] p-10 overflow-hidden z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-900 to-emerald-700 flex items-center justify-center shadow-lg border border-white/10">
                  <selectedArea.icon className="w-7 h-7 text-teal-100" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display font-medium text-zinc-50">{selectedArea.title}</h3>
              </div>
              
              <div className="prose prose-invert prose-emerald max-w-none">
                <p className="text-zinc-300 leading-relaxed text-lg">
                  {selectedArea.details}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
