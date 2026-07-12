import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const features = [
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.7z8InOonI4xo0fDuQccy_wHaEL?r=0&pid=Api&P=0&h=180",
    title: "Socratic AI Tutor",
    description: "Our AI doesn't just give answers. It asks guiding questions to help you arrive at the solution yourself, building true intuition.",
    details: "The Socratic AI Tutor uses advanced large language models fine-tuned on biological literature. It engages in a multi-turn dialogue, identifying your misconceptions and prompting you to think critically. Rather than spoon-feeding facts about cellular respiration, it might ask you to consider what would happen if a specific enzyme were inhibited, guiding you to deduce the metabolic consequences."
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*xwTZaT75ybFyMim7FjxZ_A.png",
    title: "Micro-simulations",
    description: "Adjust temperature, pH, and enzyme concentrations in real-time. Watch cellular processes react instantly to your changes.",
    details: "Experience molecular biology in a sandbox environment. Our real-time engine allows you to tweak environmental variables and observe the immediate biochemical responses. See how extreme pH denatures proteins or how varying substrate concentrations affect reaction rates using accurate Michaelis-Menten kinetics, bringing textbook graphs to life."
  },
  {
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    title: "Living Knowledge Graph",
    description: "See how concepts connect. Click on 'ATP' and visually trace its relationship to 'Mitochondria' and 'Cellular Respiration'.",
    details: "Biology is fundamentally interconnected. The Living Knowledge Graph maps millions of biological entities and their relationships. Navigate effortlessly from macroscopic anatomy down to the molecular signaling pathways. This visual, node-based interface helps you build mental models of complex systems, revealing hidden connections across different biological disciplines."
  },
  {
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800",
    title: "Adaptive Curriculum",
    description: "The platform learns your weak spots. Struggling with genetics? The curriculum shifts to provide more foundational exercises.",
    details: "Your learning path is unique. The platform continuously assesses your proficiency across various topics using item response theory. If you consistently miss questions on Mendelian inheritance, the system dynamically injects targeted review modules and foundational concepts into your feed, ensuring mastery before advancing to complex polygenic traits."
  },
  {
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    title: "Semantic Search",
    description: "Search for 'that thing that makes energy' and instantly land on the exact timestamp in a lesson about the Krebs cycle.",
    details: "Forget exact keyword matching. Our semantic search engine understands the intent behind your queries. By leveraging dense vector embeddings, it can interpret natural language descriptions and connect them to precise biological concepts, videos, and simulation states, saving you hours of frustration when you can't remember a specific term."
  },
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    title: "Biometric Feedback",
    description: "Optional integration with wearables to track focus levels, suggesting breaks when cognitive load peaks during complex topics.",
    details: "Learning biochemistry is hard work. By syncing with compatible smartwatches and neuro-bands, the platform monitors your physiological indicators of stress and cognitive fatigue. It intelligently times study breaks and switches up content formats to optimize memory retention, ensuring you study smarter, not just harder."
  }
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-50 mb-6">
            Engineered for <span className="text-gradient">deep understanding.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We discarded traditional textbooks and built a platform that treats biology as the dynamic, interconnected system it is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group overflow-hidden cursor-pointer hover:border-emerald-500/30 transition-colors duration-300 flex flex-col"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="relative h-48 overflow-hidden w-full">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-zinc-50 mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-card max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="h-64 sm:h-80 relative w-full">
                <img 
                  src={selectedFeature.image} 
                  alt={selectedFeature.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-3xl font-display font-bold text-zinc-50">
                  {selectedFeature.title}
                </h3>
              </div>
              
              <div className="p-6 sm:p-8 bg-[#0a0a0a]">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  {selectedFeature.details}
                </p>
                <div className="flex justify-end">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="px-6 py-2 bg-emerald-500/20 text-emerald-400 rounded-full font-medium hover:bg-emerald-500/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
