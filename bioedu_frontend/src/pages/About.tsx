import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OurMission from '../assets/OurMission.png';

export default function About() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Defer the heavy WebGL iframe initialization until the main React tree has painted
    const timer = setTimeout(() => {
      setShow3D(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { label: "Active Researchers", value: "10K+" },
    { label: "Universities", value: "50+" },
    { label: "Countries Reached", value: "120+" },
    { label: "AI Models Deployed", value: "500+" }
  ];

  const values = [
    { 
      title: "Accessibility", 
      desc: "Making complex scientific architectures easy to grasp and deploy for everyone.", 
      img: "https://libera.com/wp-content/uploads/2024/12/AI_Accessability.webp" 
    },
    { 
      title: "Community", 
      desc: "Fostering cross-border collaborative growth among bioinformaticians and AI devs.", 
      img: "https://tse2.mm.bing.net/th/id/OIP.tFDQkn-cZUgxjySGd9gmmAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
      title: "Innovation", 
      desc: "Staying at the bleeding edge of structural biology and machine learning.", 
      img: "https://tse1.mm.bing.net/th/id/OIP.G93ON_YQgn8WNz3olY0zmwHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
      title: "Precision", 
      desc: "Ensuring high-fidelity data and rigorous peer-reviewed standards.", 
      img: "https://tse4.mm.bing.net/th/id/OIP.0qd9nwnoqUVwOWlIn7r5-AHaEO?r=0&w=672&h=384&rs=1&pid=ImgDetMain&o=7&rm=3" 
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-6 md:pt-10 pb-16 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-200/50 to-transparent pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold mb-6 shadow-sm">
              <Activity className="w-3.5 h-3.5" />
              About GeneBoxAI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-700 to-slate-900">
              Democratizing the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">Code of Life</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              We bridge the critical gap between frontier scientific research and the global talent pool. 
              By turning complex AI and biotech advancements into accessible, practical skills, we are 
              accelerating the next generation of computational biology.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/experts" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors">
                Join Our Faculty <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/community" className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold rounded-xl shadow-sm transition-colors">
                Explore Community
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group flex items-center justify-center">
              {!show3D && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0">
                  <Activity className="w-8 h-8 animate-pulse mb-3 text-blue-500" />
                  <span className="text-sm font-medium">Initializing WebGL Engine...</span>
                </div>
              )}
              {show3D && (
                <iframe 
                  src="https://molstar.org/viewer/?pdb=1bna&hide-controls=1" 
                  className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 animate-in fade-in duration-700"
                  title="Mol* 3D DNA Structure Viewer"
                  style={{ border: 'none' }}
                  loading="lazy"
                ></iframe>
              )}
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div>
                  <p className="text-xs font-bold text-white">DNA Double Helix (1BNA)</p>
                  <p className="text-[10px] text-slate-400">Interactive WebGL Render &bull; Scroll to Zoom</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* METRICS SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:border-slate-300 transition-colors">
              <div className="text-3xl font-bold text-slate-950 mb-1">{metric.value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* MISSION & FUTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-[2rem] border border-slate-200 flex flex-col overflow-hidden shadow-sm group"
          >
            <div className="h-48 sm:h-56 w-full relative overflow-hidden bg-slate-100">
              <img 
                src = {OurMission}
                alt="Research Laboratory" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <div className="p-6 sm:p-8 flex-1">
              <p className="text-sm text-slate-700 leading-relaxed">
                GeneBoxAI was founded on a singular motive: to democratize advanced computational biology. 
                We believe that cutting-edge AI and biotech advancements should not be locked behind closed doors 
                or exclusive institutions. Our mission is to turn these complex technologies into accessible, 
                practical skills for researchers worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-[2rem] border border-slate-800 flex flex-col overflow-hidden shadow-sm group"
          >
            <div className="h-48 sm:h-56 w-full relative overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Future Technology" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Reaching the Future</h2>
            </div>
            <div className="p-6 sm:p-8 flex-1">
              <ul className="space-y-3">
                {[
                  "1M+ researchers are empowered with AI-driven bioinformatics.",
                  "Global networks enable seamless cross-border collaboration.",
                  "Proprietary AI integrates directly into daily laboratory workflows."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 bg-white/10 rounded-full mt-0.5 border border-white/20 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES GRID */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-3">Core Values</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            The principles that guide our platform, our curriculum, and our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-colors shadow-sm group flex flex-col"
            >
              <div className="h-32 w-full overflow-hidden bg-slate-100">
                <img 
                  src={val.img} 
                  alt={val.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-base font-bold text-slate-950 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
