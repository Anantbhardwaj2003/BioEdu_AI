import { motion } from 'motion/react';
import { Microscope, Brain } from 'lucide-react';
import Anant from "../../public/team1.jpeg";
import Pawan from "../../public/team2.png"

export default function Teams() {
  const teamMembers = [
    {
      name: "Mr. Anant Bhardwaj",
      role: "AI Full Stack Developer",
      bio: "Experience of more than 1.5 years in Full Stack Development with AI expertise. Previously worked on various ML and DL projects.",
      image: Anant,
      icon: <Microscope className="w-5 h-5 text-blue-500" />
    },
    {
      name: "Mr. Pawan Sharma",
      role: "Lead Bio-informatician Expert",
      bio: "With a strong background in bioinformatics, I am passionate about leveraging computational tools to solve biological problems. I am looking forward to contributing to the cutting edge of genomic research.",
      image: Pawan,
      icon: <Brain className="w-5 h-5 text-indigo-500" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-10 md:pt-12 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-6"
          >
            Meet the Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We are a group of passionate scientists, engineers, and researchers dedicated to accelerating biological discovery through artificial intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-slate-950 mb-1">{member.name}</h3>
                <p className="text-xs font-medium text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
