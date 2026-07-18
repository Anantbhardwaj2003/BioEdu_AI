import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Share2 } from 'lucide-react';
import certificateImage from '../assets/dummycertificate.png';

export function DummyCertificates() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Industry Recognized",
      description: "Our certificates are valued by top biotech and research institutions globally."
    },
    {
      icon: CheckCircle2,
      title: "Verifiable Credential",
      description: "Each certificate comes with a unique ID for easy verification by employers."
    },
    {
      icon: Share2,
      title: "Easily Shareable",
      description: "Add your certification directly to your LinkedIn profile with one click."
    }
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                Prove Your Expertise with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Certificates</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                Upon successfully completing any of our comprehensive bioinformatics or genetics courses, you'll earn a professional, verified certificate to showcase your new skills to the world.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid gap-6"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{benefit.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Certificate */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-2xl opacity-50 rounded-[3rem]" />
              
              {/* The Certificate */}
              <div className="relative w-full max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={certificateImage} 
                  alt="BioAssist Certificate of Completion" 
                  className="w-full h-auto rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] border border-white/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}