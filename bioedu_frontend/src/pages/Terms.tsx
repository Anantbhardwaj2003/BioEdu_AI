import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCircle, Scale, ShieldAlert, RefreshCw, Mail, ArrowRight } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: CheckCircle2,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          By accessing and using the GeneBoxAI platform, workshops, bootcamps, and related services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      )
    },
    {
      id: "license",
      title: "2. Use License",
      icon: FileText,
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on GeneBoxAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Modify or copy the materials;",
              "Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);",
              "Attempt to decompile or reverse engineer any software contained on GeneBoxAI's website;",
              "Remove any copyright or other proprietary notations from the materials."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="p-0.5 bg-slate-900/10 rounded-full mt-0.5 border border-slate-900/20">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
                </div>
                <span className="text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      icon: UserCircle,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
      )
    },
    {
      id: "ip",
      title: "4. Intellectual Property",
      icon: Scale,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of GeneBoxAI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
      )
    },
    {
      id: "liability",
      title: "5. Limitation of Liability",
      icon: ShieldAlert,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          In no event shall GeneBoxAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      )
    },
    {
      id: "changes",
      title: "6. Changes to Terms",
      icon: RefreshCw,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      )
    },
    {
      id: "contact",
      title: "7. Contact Us",
      icon: Mail,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          If you have any questions about these Terms, please contact us at <a href="mailto:geneboxai@gmail.com" className="text-slate-900 hover:underline font-medium">geneboxai@gmail.com</a>.
        </p>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-6 md:pt-8 pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold mb-6 shadow-sm">
            <Scale className="w-3.5 h-3.5" />
            Legal Documents
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-5 relative z-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/5 backdrop-blur-3xl rounded-2xl p-6 sm:p-8 border border-black/10 hover:border-black/20 hover:bg-black/10 shadow-sm transition-all group relative overflow-hidden flex flex-col sm:flex-row gap-5"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-black/10 group-hover:border-black/10 transition-colors duration-300 shadow-sm">
                  <section.icon className="w-6 h-6 text-slate-600 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h2 className="text-lg font-bold text-slate-900 mb-2">{section.title}</h2>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}