import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import Anant from '../assets/ab.jpeg';

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const teamMembers = [
  {
    name: 'Mr. Anant Bhardwaj',
    role: 'Lead AI Full Stack Engineer',
    image: Anant,
    bio: 'Anant is a seasoned AI engineer with expertise in full-stack development, specializing in building scalable AI-driven applications for biological research.',
    social: { linkedin: '#', twitter: '#', mail: '#' }
  },
  {
    name: 'Mr. Pawan Sharma',
    role: 'Biologist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Expert in cryo-EM and structure-based drug design, leading our drug development pipeline.',
    social: { linkedin: '#', twitter: '#', mail: '#' }
  }
];

export function Teams() {
  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-display font-medium text-zinc-50 mb-6 tracking-tight">
            Meet Our Experts
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A diverse team of world-class scientists and researchers dedicated to pushing the boundaries of biology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              
              <div className="relative h-full bg-[#1b212b] border border-white/5 group-hover:border-emerald-500/30 rounded-2xl p-6 overflow-hidden transition-all duration-500">
                {/* Image Container with Hover Effect */}
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-medium text-zinc-50 group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-emerald-500/80 font-medium text-sm mt-1">{member.role}</p>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="pt-4 flex items-center gap-4 border-t border-white/5">
                    <a href={member.social.linkedin} className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.mail} className="text-zinc-500 hover:text-emerald-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}