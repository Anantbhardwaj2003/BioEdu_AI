import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "Our expertise",
    questions: [
      {
        question: "Why is Bioinformatics as a Service a better option than hiring a bioinformatician?",
        answer: (
          <div className="space-y-4">
            <p>There are several benefits, the main ones being:</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>You only spend money when you actually need a bioinformatician, as opposed to paying for recruitment, salary, holidays, overhead, office space, computational infrastructure and software licenses every day, to name but a few expenses.</li>
              <li>A service can be easily adapted to your changing needs, from periods of high-intensity analysis to the slower periods in between.</li>
              <li>You can access the combined experience and expertise of a full bioinformatics team.</li>
              <li>You do not have to deal with the daily project management of bioinformatics work, which requires a lot of time and expertise in bioinformatics. This is also a reason to (re)consider whether you should really be hiring a junior bioinformatician.</li>
              <li>Hired personnel will sometimes leave for other opportunities; contracting an external team, however, always ensures a seamless service.</li>
            </ul>
          </div>
        )
      },
      {
        question: "Do you have experience of working with researchers in my specific field?",
        answer: "Yes, our team consists of experts across various biological disciplines including genomics, transcriptomics, proteomics, and systems biology. We match your project with analysts who have relevant domain expertise."
      },
      {
        question: "I did not see any mention of the type of analysis I need. Does it mean that you do not provide it?",
        answer: "Not necessarily. The field of bioinformatics is vast and constantly evolving. We routinely develop custom analysis pipelines and implement newly published methods. Please contact us to discuss your specific requirements."
      },
      {
        question: "How can I be sure that the results provided will be up to my standards?",
        answer: "We adhere to strict quality control standards, use validated pipelines, and provide comprehensive documentation of all methods and parameters used. Our team includes experienced peer-reviewers and we ensure all outputs meet publication-quality standards."
      }
    ]
  },
  {
    category: "Benefits of bioinformatics as a service",
    questions: [
      {
        question: "Why is a service generally a better option than hiring a bioinformatician?",
        answer: "Beyond cost-effectiveness, a service provides access to a diverse team of specialists rather than a single generalist. This ensures that every aspect of your pipeline, from data engineering to statistical modeling, is handled by an expert in that specific area."
      },
      {
        question: "If you analyze the data, will I learn anything in the process?",
        answer: "Absolutely. We view our service as a collaborative partnership. We provide transparent, well-documented code and comprehensive reports explaining our methodologies, empowering you to understand and interpret the analysis process."
      }
    ]
  },
  {
    category: "Starting the project",
    questions: [
      {
        question: "How can I get a bioinformatics plan, and how much does it cost?",
        answer: "You can request an initial consultation through our contact form. The initial discussion and the creation of a preliminary project proposal and cost estimate are provided free of charge."
      },
      {
        question: "Do I have to be able to define the analysis in detail?",
        answer: "No. Our experts will work with you to translate your biological questions into a concrete bioinformatics analysis plan."
      },
      {
        question: "Can you help me in writing a grant application?",
        answer: "Yes, we frequently collaborate with researchers to draft the data analysis, data management, and bioinformatics sections of grant proposals."
      },
      {
        question: "Do I have to be able to specify all the required work in detail beforehand?",
        answer: "No, biological research is iterative. We offer flexible engagement models that accommodate evolving project needs and preliminary findings."
      },
      {
        question: "How do I deliver the data to you?",
        answer: "We provide secure, encrypted data transfer protocols and can accommodate various cloud storage platforms or direct institutional server transfers in compliance with data privacy regulations."
      },
      {
        question: "How many months of service will I need?",
        answer: "Project durations vary significantly depending on scope, data volume, and complexity. After our initial consultation, we will provide a realistic timeline for your specific project."
      },
      {
        question: "What if my data has quality issues?",
        answer: "We always begin with rigorous Quality Control (QC). If issues are detected, we provide a detailed QC report and discuss mitigation strategies or potential limitations before proceeding with deeper analysis."
      },
      {
        question: "Can I change the scope or the contents of the project after you have begun the analysis?",
        answer: "Yes, we maintain agile workflows. Any changes in scope will be discussed, and the project timeline and budget will be adjusted transparently."
      }
    ]
  },
  {
    category: "About the project",
    questions: [
      {
        question: "Can I change the project contents after you have begun the analysis?",
        answer: "Yes, as discoveries are made, it's natural for directions to shift. We accommodate these changes through a clear change-request process."
      },
      {
        question: "How much does all this cost?",
        answer: "Costs are determined by the specific requirements of your project, such as computational resources needed and personnel hours required. We provide a detailed quote before any work begins."
      },
      {
        question: "How long does it take to complete my project?",
        answer: "Timelines depend on project complexity and our current queue. Standard analyses might take a few weeks, while complex, multi-omics integrations may span several months."
      }
    ]
  },
  {
    category: "After the project",
    questions: [
      {
        question: "What exactly do I get at the end of the project?",
        answer: "You will receive a comprehensive final report, all processed data files, high-quality figures suitable for publication, and all source code/scripts used in the analysis to ensure full reproducibility."
      },
      {
        question: "What happens after we conclude a project — what if I am left with a report that I do not understand?",
        answer: "Our final deliverables include an interactive review session. We ensure you fully understand the results and are comfortable presenting and discussing them."
      },
      {
        question: "If you do all the data analysis, will I have an opportunity to learn anything in the process?",
        answer: "Yes! We encourage collaborative review sessions and provide heavily annotated code, allowing you to learn the underlying bioinformatics principles."
      },
      {
        question: "Will I maintain ownership of all the intellectual output from my project?",
        answer: "Absolutely. You retain full intellectual property rights to all biological discoveries and data. We simply provide the computational service to uncover them."
      },
      {
        question: "Do you require authorship in resulting publications?",
        answer: "While we appreciate acknowledgment for standard analyses, we typically do not require authorship. For projects requiring significant novel methodological development or deep intellectual contribution, co-authorship may be discussed upfront."
      }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-zinc-50 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our Bioinformatics as a Service offering.
          </p>
        </motion.div>

        <div className="space-y-16">
          {faqs.map((categoryData, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-display font-medium text-emerald-400 mb-6">
                {categoryData.category}
              </h2>
              <div className="space-y-4">
                {categoryData.questions.map((q, qIndex) => {
                  const index = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={qIndex}
                      className="border border-white/10 bg-[#1b212b]/50 rounded-xl overflow-hidden transition-colors hover:border-white/20"
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <span className="font-medium text-zinc-200">{q.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                              {q.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}