import { motion } from 'motion/react';
import { Target, Rocket, Microscope, Users, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const sections = [
    {
      id: "mission",
      title: "Our Motive & Mission",
      icon: Target,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          GeneBoxAI was founded on a singular motive: to bridge the critical gap between frontier scientific research and the working scientific talent pool. We believe that cutting-edge AI and biotech advancements should not be locked behind closed doors. Our mission is to democratize these complex technologies by turning them into accessible, practical skills for researchers worldwide.
        </p>
      )
    },
    {
      id: "future",
      title: "Reaching the Future",
      icon: Rocket,
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>As we look ahead, our goals are ambitious and focused on scaling our impact across the global scientific community. We are building toward a future where:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "1M+ researchers are empowered with advanced, AI-driven bioinformatics skills.",
              "A unified global network enables seamless cross-border scientific collaboration.",
              "Proprietary AI tools integrate directly into daily laboratory workflows.",
              "Top-tier universities partner with us to modernize legacy science curriculums."
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
    },
    {
      id: "values",
      title: "Our Core Values",
      icon: Lightbulb,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {[
            { title: "Accessibility", desc: "Making complex science easy to grasp.", icon: Globe },
            { title: "Community", desc: "Fostering collaborative growth.", icon: Users },
            { title: "Innovation", desc: "Staying at the bleeding edge.", icon: Microscope }
          ].map((val, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-black/5 rounded-xl border border-black/5 hover:bg-black/10 transition-colors">
              <val.icon className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{val.title}</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-tight">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-6 md:pt-8 pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold mb-4 shadow-sm">
            <Globe className="w-3.5 h-3.5" />
            About Us
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-2">
            Empowering Researchers
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            Discover the motive behind GeneBoxAI and where we are heading next.
          </p>
        </motion.div>

        <div className="space-y-4 relative z-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/5 backdrop-blur-3xl rounded-2xl p-5 sm:p-6 border border-black/10 hover:border-black/20 hover:bg-black/10 shadow-sm transition-all group relative overflow-hidden flex flex-col sm:flex-row gap-4"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-black/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-black/10 group-hover:border-black/10 transition-colors duration-300 shadow-sm">
                  <section.icon className="w-5 h-5 text-slate-600 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <h2 className="text-base font-bold text-slate-900 mb-1.5">{section.title}</h2>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
