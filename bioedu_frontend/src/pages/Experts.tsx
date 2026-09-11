import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, X, CheckCircle, Globe, Users, Star, Zap, Heart 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guidelines = [
    "Must hold an advanced degree (MSc or Ph.D.) in computational biology, bioinformatics, AI, or a closely related field.",
    "Minimum of 3 years of practical industry or postdoctoral experience deploying models in real-world scenarios.",
    "Demonstrated ability to explain complex technical concepts simply (e.g., through published papers, medium articles, or teaching experience).",
    "Willingness to commit to at least one 2-hour live AMA or workshop per quarter.",
    "Must pass a standard technical peer review conducted by our existing faculty board."
  ];

  const mapNodes = [
    { id: 1, top: '30%', left: '28%', country: 'New York, USA', count: 12, flag: '🇺🇸', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop' },
    { id: 2, top: '65%', left: '33%', country: 'São Paulo, Brazil', count: 8, flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' },
    { id: 3, top: '22%', left: '48%', country: 'London, UK', count: 15, flag: '🇬🇧', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop' },
    { id: 4, top: '45%', left: '70%', country: 'Bengaluru, India', count: 42, flag: '🇮🇳', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
    { id: 5, top: '32%', left: '87%', country: 'Tokyo, Japan', count: 10, flag: '🇯🇵', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { id: 6, top: '75%', left: '88%', country: 'Sydney, Australia', count: 6, flag: '🇦🇺', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop' },
  ];

  const stats = [
    { country: 'India', flag: '🇮🇳', count: 42 },
    { country: 'USA', flag: '🇺🇸', count: 12 },
    { country: 'UK', flag: '🇬🇧', count: 15 },
    { country: 'Japan', flag: '🇯🇵', count: 10 },
    { country: 'Australia', flag: '🇦🇺', count: 6 },
    { country: 'Brazil', flag: '🇧🇷', count: 8 },
  ];

  const features = [
    { icon: Users, title: 'Diverse Talent', desc: 'Experts from different countries, industries and backgrounds.', color: 'text-slate-700' },
    { icon: Star, title: 'Shared Vision', desc: 'All working towards real impact.', color: 'text-slate-700' },
    { icon: Zap, title: 'Collaborative Growth', desc: 'Learn, share and build together.', color: 'text-slate-700' },
    { icon: Heart, title: 'Real People', desc: 'Not just a network, but a community.', color: 'text-slate-700' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-12 relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center w-full max-w-2xl mb-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-2.5">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">Global</span> Community
          </h1>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            We're proud to have experts from around the world who share our vision. Explore the map to see where our community is based and be part of something bigger.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-7"
        >
          <Link to="/apply-expert" className="flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-xl shadow-md transition-colors">
            Apply to Join <ArrowRight className="w-4 h-4" />
          </Link>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl shadow-sm transition-colors">
            <CheckCircle className="w-4 h-4" /> Guidelines
          </button>
        </motion.div>

        {/* Interactive Map & Stats Section (Blackish/Greyish Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full bg-slate-950 rounded-[2rem] border border-slate-800 shadow-2xl flex flex-col md:flex-row overflow-hidden mb-8"
        >
          {/* Map Area */}
          <div className="relative flex-1 min-h-[350px] md:min-h-[450px] p-4 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] overflow-hidden">
            
            {/* Real World Map Vector */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none px-6 py-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="World Map Background" 
                className="w-full h-full object-fill invert grayscale"
              />
            </div>

            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* NY to UK */}
              <path d="M 28 30 Q 38 15 48 22" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.2" strokeDasharray="1 1" />
              {/* NY to Brazil */}
              <path d="M 28 30 Q 25 45 33 65" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.2" strokeDasharray="1 1" />
              {/* UK to India */}
              <path d="M 48 22 Q 60 30 70 45" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.2" strokeDasharray="1 1" />
              {/* India to Japan */}
              <path d="M 70 45 Q 80 30 87 32" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.2" strokeDasharray="1 1" />
              {/* India to Sydney */}
              <path d="M 70 45 Q 85 60 88 75" fill="none" stroke="rgba(148,163,184,0.35)" strokeWidth="0.2" strokeDasharray="1 1" />
            </svg>

            {/* Nodes */}
            {mapNodes.map((node) => (
              <div 
                key={node.id} 
                className="absolute flex flex-col items-center group cursor-pointer z-10 -ml-1.5 -mt-1.5"
                style={{ top: node.top, left: node.left }}
              >
                {/* Node Dot */}
                <div className="w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_12px_rgba(203,213,225,0.8)] relative">
                  <div className="absolute inset-0 rounded-full bg-slate-200 animate-ping opacity-50"></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute top-4 bg-slate-900 border border-slate-700 rounded-xl p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-max flex items-center gap-2.5 z-20 pointer-events-none group-hover:pointer-events-auto">
                  <img src={node.img} alt={node.country} className="w-7 h-7 rounded-full border border-slate-700 object-cover" />
                  <div>
                    <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <span>{node.flag}</span> {node.country}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">{node.count} Experts</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Panel */}
          <div className="w-full md:w-64 bg-slate-900/90 backdrop-blur-md border-t md:border-t-0 md:border-l border-slate-800 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-slate-300 shadow-inner">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none">87</h3>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium uppercase tracking-wider">Total Experts</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/50 last:border-0">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <span>{stat.flag}</span> {stat.country}
                    </div>
                    <div className="text-slate-400 font-mono text-[11px]">{stat.count}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] pt-3 text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3" /> +10 more countries
                </div>
              </div>
            </div>
            
            <div className="mt-5 bg-slate-800/60 border border-slate-700 rounded-xl p-3.5 shadow-sm">
              <h4 className="text-[11px] font-bold text-slate-300 mb-1">A truly global network</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">Different backgrounds.<br/>Same mission.<br/>One community.</p>
            </div>
          </div>
        </motion.div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 px-2 border-t border-slate-200 pt-6"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <div className={`w-9 h-9 rounded-full bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center ${feature.color} mb-2.5`}>
                <feature.icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed max-w-[140px]">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Guidelines Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-base font-bold text-slate-950">Faculty Guidelines</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-5">
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  To maintain the highest quality of technical education for our community, all prospective GeneBoxAI experts must meet the following criteria:
                </p>
                
                <ul className="space-y-3">
                  {guidelines.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 text-emerald-500 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] text-slate-700 leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
