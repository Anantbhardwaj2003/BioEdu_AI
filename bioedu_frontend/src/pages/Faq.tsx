import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Do I need prior coding experience for the workshops?",
    answer: "Not at all! Our foundational workshops, such as 'Git & GitHub for Researchers', are designed for absolute beginners. We focus on practical application rather than complex programming theory."
  },
  {
    question: "Will I receive a certificate of completion?",
    answer: "Yes. Upon successfully completing any GeneBoxAI workshop or bootcamp, you will receive a verifiable digital certificate that you can add to your LinkedIn profile or academic portfolio."
  },
  {
    question: "Are the workshop sessions recorded?",
    answer: "Absolutely. We understand that researchers have busy schedules. All live sessions are recorded and made available to registered participants for 6 months, along with all workshop materials and slides."
  },
  {
    question: "Do I need to install any heavy software beforehand?",
    answer: "Most of our workshops utilize cloud-based tools (like Overleaf for LaTeX or GitHub Codespaces) to avoid complex local setups. If any specific software is required, we provide detailed, step-by-step installation guides a week prior to the workshop."
  },
  {
    question: "What is the refund policy if I cannot attend?",
    answer: "You can request a full refund up to 48 hours before the workshop's scheduled start time. If you miss the deadline, you will still retain full access to the session recordings and materials."
  },
  {
    question: "Can I request a custom workshop for my university lab?",
    answer: "Yes! We frequently conduct tailored, closed-group bootcamps for university labs, research groups, and corporate R&D teams. Please reach out to our team via the Contact page to discuss custom curriculums."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-950 pt-8 md:pt-12 pb-24 relative overflow-hidden text-slate-200">
      {/* Dark Glassmorphism Background Elements */}
      
      
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <MessageCircleQuestion className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Got Questions?
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about GeneBoxAI workshops, bootcamps, and how we help researchers excel.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_0_30px_rgba(255,255,255,0.03)] border-white/20 bg-white/10' : 'hover:bg-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-white/10 text-white' : 'bg-white/5 text-slate-400'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-white/10 text-white' : 'text-slate-500'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                        <div className="pl-14">
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-xl font-medium transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </div>
    </main>
  );
}