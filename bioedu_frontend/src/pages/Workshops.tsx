import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Target, CheckCircle2, GitBranch, FileText, Globe, X, ArrowRight } from 'lucide-react';

type MasteryItem = {
  title: string;
  desc: string;
};

type Workshop = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  audience: string;
  icon: any;
  image: string;
  mastery: MasteryItem[];
};

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedWorkshop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedWorkshop]);

  const workshops: Workshop[] = [
    {
      id: 1,
      title: "Workshop 1: Git & GitHub for Researchers",
      subtitle: "Stop saving files as draft_v2_final_ultimate.docx. Learn to version-control your science.",
      description: "Modern research is collaborative and computational. This hands-on, zero-programming-required bootcamp will teach you how to organize your projects, track changes seamlessly, and showcase your work to global collaborators.",
      duration: "75–90 Minutes",
      audience: "Students, researchers, PhD scholars, and computational research beginners.",
      icon: GitBranch,
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      mastery: [
        { title: "The Git Engine", desc: "Demystifying version control and tracking research evolution." },
        { title: "GitHub Essentials", desc: "Creating repositories, branching, and handling merge conflicts." },
        { title: "Academic Branding", desc: "Building a professional, public-facing GitHub profile to attract collaborators and recruiters." },
        { title: "Code & Data Management", desc: "Best practices for sharing open-source science securely." }
      ]
    },
    {
      id: 2,
      title: "Workshop 2: Modern Research Writing with LaTeX",
      subtitle: "Write beautiful, journal-ready papers—without the formatting headaches.",
      description: "Tired of Word breaking your layout every time you move an image? This workshop focuses on the precision of LaTeX (via Overleaf) to help you construct flawless, publication-grade manuscripts with greater efficiency and architectural consistency.",
      duration: "2 Hours",
      audience: "UG/PG students, PhD candidates, researchers, and faculty members.",
      icon: FileText,
      image: "https://www.proof-reading-service.com/cdn/shop/articles/LaTeX-Paper_1fb196a3-f9a8-4161-979e-87ac903d1b25.webp?v=1787080776&width=480",
      mastery: [
        { title: "Overleaf Essentials", desc: "Navigating the industry standard for scientific typesetting." },
        { title: "Equations & Data Visuals", desc: "Formatting complex mathematics, tables, and high-resolution figures effortlessly." },
        { title: "Manuscript Architecture", desc: "Structuring documents perfectly to meet strict journal and conference style guidelines." },
        { title: "Collaborative Writing", desc: "Managing multi-author edits and comments smoothly in the cloud." }
      ]
    },
    {
      id: 3,
      title: "Workshop 3: Publishing Like a Researcher: The Complete Workflow",
      subtitle: "From raw references to peer-reviewed publication. Master the end-to-end pipeline.",
      description: "Writing the paper is only half the battle. This advanced workshop covers the practical mechanics of academic publishing—managing hundreds of citations, proving reproducibility, and confidently navigating the peer-review process.",
      duration: "2 Hours",
      audience: "Early-career faculty, postgraduates, and researchers preparing active manuscripts.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      mastery: [
        { title: "Smart Referencing with Zotero", desc: "Building a self-organizing personal library and citing on the fly." },
        { title: "The Reproducible Bundle", desc: "Linking your Overleaf manuscript to GitHub data to satisfy journal replication requirements." },
        { title: "Strategic Journal Selection", desc: "Avoiding predatory publishers and choosing the right home for your research." },
        { title: "Surviving Peer Review", desc: "Deciphering reviewer comments and drafting professional response letters." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-10 md:pt-12 pb-20 relative">
      {/* Main Grid View */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-3"
          >
            Workshops
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Equip yourself with the computational and structural tools required to conduct, write, and publish modern science.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
              onClick={() => setSelectedWorkshop(workshop)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={workshop.image} 
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 flex-shrink-0">
                    <workshop.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-950 line-clamp-2">{workshop.title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed line-clamp-3 mb-5 flex-1">
                  {workshop.description}
                </p>
                <button className="text-sm font-semibold text-blue-600 flex items-center gap-1.5 transition-colors self-start mt-auto">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup / Modal View */}
      <AnimatePresence>
        {selectedWorkshop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setSelectedWorkshop(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedWorkshop(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-white shadow-sm transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Image */}
              <div className="w-full h-48 sm:h-64 relative flex-shrink-0">
                <img 
                  src={selectedWorkshop.image} 
                  alt={selectedWorkshop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
                  <div className="hidden sm:flex w-14 h-14 bg-white rounded-2xl items-center justify-center shadow-lg flex-shrink-0">
                    <selectedWorkshop.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {selectedWorkshop.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1">
                <p className="text-[17px] font-medium text-blue-600 mb-4">{selectedWorkshop.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{selectedWorkshop.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-10 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Duration</p>
                      <p className="text-sm font-medium text-slate-900">{selectedWorkshop.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Target Audience</p>
                      <p className="text-sm font-medium text-slate-900">{selectedWorkshop.audience}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg font-bold text-slate-950 mb-6 flex items-center gap-2">
                    What You'll Master
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedWorkshop.mastery.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-xl shadow-sm shadow-slate-900/20 transition-all flex items-center justify-center gap-2">
                    Register for Workshop
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
