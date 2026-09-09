import { motion } from 'motion/react';
import { Users, MessageSquare, Calendar, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

export default function Community() {
  const perks = [
    {
      id: "network",
      title: "Global Network",
      icon: Users,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Connect with a worldwide community of over 10,000+ researchers, bioinformaticians, and AI specialists. Share your insights, find collaborators for your next big paper, and build relationships that transcend borders.
        </p>
      )
    },
    {
      id: "discussions",
      title: "Active Forums",
      icon: MessageSquare,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Dive into technical discussions. From debugging complex genomic pipelines to exploring the latest AI models in drug discovery, our forums are actively moderated and filled with expert advice.
        </p>
      )
    },
    {
      id: "mentorship",
      title: "Expert Mentorship",
      icon: GraduationCap,
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Get paired with industry veterans. Whether you are transitioning from wet lab to computational biology or looking to master a new AI framework, our mentorship program accelerates your growth.
        </p>
      )
    },
    {
      id: "events",
      title: "Live Events & AMAs",
      icon: Calendar,
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Join weekly virtual events designed to keep you at the cutting edge:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Monthly AMAs with leading biotech founders.",
              "Weekly paper reading and discussion groups.",
              "Live coding and pipeline architecture sessions."
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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            GeneBoxAI Community
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-2">
            Join the Conversation
          </h1>
          <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
            The epicenter of AI and biotech collaboration. Connect, learn, and build the future of science together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex justify-center gap-3"
        >
          <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors">
            Join Discord <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-sm font-semibold rounded-xl shadow-sm transition-colors">
            Browse Forums
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/5 backdrop-blur-3xl rounded-2xl p-5 border border-black/10 hover:border-black/20 hover:bg-black/10 shadow-sm transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-black/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-black/5 group-hover:bg-black/10 group-hover:border-black/10 transition-colors duration-300 shadow-sm">
                  <perk.icon className="w-5 h-5 text-slate-600 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
                <h2 className="text-base font-bold text-slate-900">{perk.title}</h2>
              </div>
              <div className="pt-0.5 flex-1">
                {perk.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
