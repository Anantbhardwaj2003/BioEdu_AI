import { motion } from 'motion/react';
import { Scale, BookOpen, AlertCircle, FileText } from 'lucide-react';

export function TermsService() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 relative z-10">
            <Scale className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 mb-6 relative z-10 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
            Please read these terms carefully. Last updated: <span className="text-zinc-300 font-medium">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-cyan max-w-none space-y-12"
        >
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-medium text-white m-0">Acceptance of Terms</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              By accessing or using the BioAssist platform, including our website, courses, and related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-medium text-white m-0">User Conduct and Course Access</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              When using our platform, you agree to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 leading-relaxed space-y-2">
              <li>Provide accurate and complete information when creating an account.</li>
              <li>Maintain the security of your account credentials.</li>
              <li>Use the course materials for personal, non-commercial educational purposes only.</li>
              <li>Not distribute, modify, or create derivative works from our course content without explicit permission.</li>
              <li>Interact respectfully with instructors and other students in community forums.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-medium text-white m-0">Limitation of Liability</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              BioAssist provides educational content "as is" and without warranties of any kind. We do not guarantee that our courses will meet your specific requirements or that the service will be uninterrupted or error-free.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              To the fullest extent permitted by law, BioAssist shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.
            </p>
          </section>
          
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              If you have any questions about these Terms of Service, please contact us at geneboxai@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}