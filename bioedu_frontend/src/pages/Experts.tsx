import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Briefcase, Award, Clock, ArrowRight, Zap, X, CheckCircle } from 'lucide-react';
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
  const opportunities = [
    {
      id: "teach",
      title: "Teach & Mentor",
      icon: BookOpen,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Design and lead high-impact workshops. Share your practical knowledge in bioinformatics, AI, and computational biology with eager researchers ready to learn from top industry practitioners.
        </p>
      )
    },
    {
      id: "consult",
      title: "Consulting Projects",
      icon: Briefcase,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Get matched with university labs and corporate R&D teams. Provide specialized architectural guidance, code reviews, and strategic consulting on complex genomic and AI pipelines.
        </p>
      )
    },
    {
      id: "recognition",
      title: "Global Recognition",
      icon: Award,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Build your technical brand. Publish architectural breakdowns, host technical AMAs, and establish yourself as a thought leader within our verified network of 10,000+ scientists.
        </p>
      )
    },
    {
      id: "flexible",
      title: "Flexible Engagement",
      icon: Clock,
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Contribute entirely on your own schedule. We offer multiple engagement models:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "1-Hour Live AMAs and Q&A sessions.",
              "2-Day intensive weekend workshops.",
              "4-Week technical bootcamps.",
              "On-demand asynchronous code reviews."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="p-0.5 bg-slate-900/10 rounded-full mt-0.5 border border-slate-900/20">
                  <div className="w-1.5 h-1.5 bg-slate-800 rounded-full m-0.5" />
                </div>
                <span className="text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-6 md:pt-8 pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            Expert Network
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-3">
            Join Our Global Faculty
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Empower the next generation of scientists. Share your technical expertise, lead cutting-edge bootcamps, and consult on high-impact research projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex justify-center gap-3"
        >
          <Link to="/apply-expert" className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors">
            Apply to Join <ArrowRight className="w-4 h-4" />
          </Link>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-sm font-semibold rounded-xl shadow-sm transition-colors">
            View Guidelines
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/5 backdrop-blur-3xl rounded-2xl p-6 border border-black/10 hover:border-black/20 hover:bg-black/10 shadow-sm transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-black/10 group-hover:border-black/10 transition-colors duration-300 shadow-sm">
                  <opp.icon className="w-5 h-5 text-slate-600 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
                <h2 className="text-base font-bold text-slate-900">{opp.title}</h2>
              </div>
              <div className="pt-0.5 flex-1">
                {opp.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-950">Faculty Guidelines</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  To maintain the highest quality of technical education for our community, all prospective GeneBoxAI experts must meet the following criteria before joining our global faculty network:
                </p>
                
                <ul className="space-y-4">
                  {guidelines.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 text-emerald-500 flex-shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
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