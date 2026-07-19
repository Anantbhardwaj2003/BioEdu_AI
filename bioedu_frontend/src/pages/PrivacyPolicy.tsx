import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 relative z-10">
            <Shield className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 mb-6 relative z-10 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
            Your privacy is critically important to us. Last updated: <span className="text-zinc-300 font-medium">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-emerald max-w-none space-y-12"
        >
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-medium text-white m-0">Information We Collect</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              At BioAssist, we collect information that you provide directly to us when you create an account, enroll in courses, or communicate with us. This may include your name, email address, payment information, and educational background.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We also automatically collect certain information about your device and how you interact with our platform, such as your IP address, browser type, and usage data, to improve our services and user experience.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-medium text-white m-0">How We Use Your Information</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
              <li>Provide, maintain, and improve our educational platform.</li>
              <li>Process your transactions and issue certificates.</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
              <li>Personalize your learning experience and recommend relevant courses.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-medium text-white m-0">Data Security</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              We implement reasonable security measures to protect the security of your personal information both online and offline. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              If you have any questions about this Privacy Policy, please contact us at geneboxai@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}