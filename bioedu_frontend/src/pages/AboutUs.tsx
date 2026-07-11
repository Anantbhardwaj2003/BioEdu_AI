import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, Users, UsersRound, Briefcase } from 'lucide-react';

const aboutSections = [
    {
        title: "A standard-setting bioinformatics company",
        icon: Building2,
        description: "We are pioneers in the field of biological data analysis. Our mission is to accelerate scientific discovery by providing robust, scalable, and highly accurate bioinformatics solutions. We set the standard for reproducible research, employing rigorous quality control and state-of-the-art computational methods to unlock the true potential of complex biological datasets.",
        color: "from-emerald-400 to-teal-500"
    },
    {
        title: "Who do we serve?",
        icon: Users,
        description: "Our partners range from academic research laboratories and leading universities to innovative biotechnology startups and global pharmaceutical companies. Whether it's a single investigator needing custom RNA-seq analysis or a large consortium requiring multi-omics integration, we tailor our services to meet the specific goals of each research endeavor.",
        color: "from-cyan-400 to-blue-500"
    },
    {
        title: "Our team",
        icon: UsersRound,
        description: "We are a diverse collective of computational biologists, data scientists, software engineers, and domain-specific biological experts. By bridging the gap between biology and computer science, our team brings a multi-disciplinary approach to every project, ensuring both computational rigor and deep biological relevance.",
        color: "from-purple-400 to-indigo-500"
    },
    {
        title: "Working in a bioinformatics company",
        icon: Briefcase,
        description: "Innovation thrives in an environment that values continuous learning and collaboration. Working with us means tackling some of the most challenging problems in modern biology. We foster a culture of open inquiry, where every team member is encouraged to explore new algorithms, contribute to open-source tools, and push the boundaries of what's computationally possible.",
        color: "from-orange-400 to-pink-500"
    }
];

export function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <div className="pt-32 pb-32 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-50 mb-6 tracking-tight">
                        Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Science</span>,<br />
                        Branching into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Discover the core of our organization, the people we empower, and our commitment to advancing the frontiers of bioinformatics.
                    </p>
                </motion.div>

                <div className="relative" ref={containerRef}>
                    {/* Central Tree Trunk */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/5 hidden md:block rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 origin-top rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                            style={{ scaleY: pathLength }}
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {aboutSections.map((section, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = section.icon;

                            return (
                                <div key={index} className={`relative flex flex-col items-center w-full md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, type: "spring" }}
                                            className="relative w-full max-w-xl group"
                                        >
                                            {/* Branch connecting to trunk */}
                                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r ${isEven ? 'right-0 from-transparent to-emerald-500/50 translate-x-full' : 'left-0 from-emerald-500/50 to-transparent -translate-x-full'}`} />

                                            <div className="bg-[#1b212b]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/10">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} p-[1px] mb-6 shadow-lg inline-block`}>
                                                    <div className="w-full h-full bg-[#1b212b] rounded-2xl flex items-center justify-center">
                                                        <Icon className="w-6 h-6 text-zinc-100" />
                                                    </div>
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-display font-medium text-zinc-50 mb-4">{section.title}</h2>
                                                <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center Node (Leaf/Bud) */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ delay: 0.3, type: "spring" }}
                                            className="w-8 h-8 rounded-full bg-[#050505] border-4 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] relative"
                                        >
                                            <div className="absolute inset-1 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full" />
                                        </motion.div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}