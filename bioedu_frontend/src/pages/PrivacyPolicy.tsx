import { motion } from 'motion/react';
import { Database, Activity, Lock, Share2, UserCheck, RefreshCw, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "collect",
      title: "1. Information We Collect",
      icon: Database,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.
        </p>
      )
    },
    {
      id: "use",
      title: "2. How We Use Your Information",
      icon: Activity,
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>We may use the information we collect about you to:</p>
          <ul className="list-none space-y-2 mt-3">
            {[
              "Provide, maintain, and improve our Services, including to facilitate payments and send receipts;",
              "Perform internal operations, including to prevent fraud and abuse of our Services;",
              "Troubleshoot software bugs and operational problems;",
              "Personalize and improve the Services, including providing tailored content and recommendations."
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
      id: "security",
      title: "3. Data Security",
      icon: Lock,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
        </p>
      )
    },
    {
      id: "sharing",
      title: "4. Data Sharing",
      icon: Share2,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>
      )
    },
    {
      id: "rights",
      title: "5. Your Rights",
      icon: UserCheck,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights. GeneBoxAI aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
        </p>
      )
    },
    {
      id: "changes",
      title: "6. Changes to This Privacy Policy",
      icon: RefreshCw,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      )
    },
    {
      id: "contact",
      title: "7. Contact Us",
      icon: Mail,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:geneboxai@gmail.com" className="text-slate-900 hover:underline font-medium">geneboxai@gmail.com</a>.
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Data Protection
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-3">
            Privacy Policy
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
