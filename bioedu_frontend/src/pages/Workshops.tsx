import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Heart, 
  Clock, 
  Users, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  Dna, 
  BarChart3, 
  GitMerge, 
  Cpu, 
  Code2, 
  FlaskConical, 
  CheckCircle2, 
  X, 
  Sparkles,
  Bookmark,
  Check
} from 'lucide-react';
import Workshop1 from "../assets/Workshop_1.png";

type Workshop = {
  id: number;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  date: string;
  type: 'Live Workshop' | 'Upcoming' | 'On-Demand';
  duration: string;
  enrolled: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  topics: string[];
  ctaLabel: string;
  mastery: { title: string; desc: string }[];
};

export default function Workshops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Upcoming' | 'On-Demand' | 'Free' | 'Calendar'>('All');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState<number | null>(null);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (selectedWorkshop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedWorkshop]);

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const allWorkshops: Workshop[] = [
    {
      id: 1,
      title: "NGS Data Analysis: From Raw Reads to Biological Insights",
      category: "Bioinformatics",
      level: "Intermediate",
      date: "Sep 28, 2025",
      type: "Live Workshop",
      duration: "6 hours • Live Online",
      enrolled: "120+ Enrolled",
      description: "Learn how to process and analyze NGS data using industry-standard tools like FastQC, BWA, GATK and more.",
      instructor: {
        name: "Dr. Priya Sharma",
        role: "Bioinformatics Expert",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
      },
      image: Workshop1,
      topics: ["FastQC Quality Metrics", "BWA-MEM Read Mapping", "GATK Variant Calling", "VCF Annotation"],
      ctaLabel: "Enroll Now",
      mastery: [
        { title: "Raw Read Processing", desc: "Trimming adapters, low-quality base filtering, and quality score diagnostics." },
        { title: "Genome Alignment", desc: "Index preparation, alignment to GRCh38 reference, and SAM/BAM file manipulation." },
        { title: "Variant Discovery", desc: "Calling SNPs and InDels using GATK best practice pipelines." },
        { title: "Functional Annotation", desc: "Evaluating clinical and functional pathogenicity using ANNOVAR and SnpEff." }
      ]
    },
    {
      id: 2,
      title: "Single-Cell RNA-seq Analysis: From Clusters to Cell Types",
      category: "Single Cell",
      level: "Advanced",
      date: "Oct 05, 2025",
      type: "Upcoming",
      duration: "8 hours • Live Online",
      enrolled: "85+ Enrolled",
      description: "Explore single-cell data analysis workflows, visualization techniques, and biological interpretation using Seurat and Scanpy.",
      instructor: {
        name: "Dr. Arjun Mehta",
        role: "Research Scientist",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
      },
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      topics: ["Scanpy & Seurat Workflows", "Doublet Detection", "UMAP / t-SNE Projections", "Cell Type Annotation"],
      ctaLabel: "Enroll Now",
      mastery: [
        { title: "Count Matrix Preprocessing", desc: "Filtering high-mitochondrial cells, normalization, and log1p transformation." },
        { title: "Dimensionality Reduction", desc: "PCA calculation, neighbor graph construction, and non-linear UMAP projections." },
        { title: "Unsupervised Clustering", desc: "Leiden and Louvain algorithm tuning for cell population demarcation." },
        { title: "Marker Gene Validation", desc: "Differential expression testing and canonical cell atlas matching." }
      ]
    },
    {
      id: 3,
      title: "Python for Bioinformatics: Essential Tools & Workflows",
      category: "Python",
      level: "Beginner",
      date: "Self-paced",
      type: "On-Demand",
      duration: "4 hours • On-Demand",
      enrolled: "210+ Enrolled",
      description: "Get comfortable with Python and learn how to analyze biological data using Biopython, Pandas, and Jupyter Notebooks.",
      instructor: {
        name: "Neha Kapoor",
        role: "Data Scientist",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      topics: ["Biopython Fundamentals", "FASTA/GenBank Parsing", "Pandas Dataframes", "Seaborn Visualizations"],
      ctaLabel: "Start Learning",
      mastery: [
        { title: "Bioinformatics Data Structures", desc: "Handling sequences, reverse complements, and GC content calculations." },
        { title: "Tabular Genomics with Pandas", desc: "Filtering BED and GFF3 files with vectorized operations." },
        { title: "NCBI Entrez Querying", desc: "Programmatically fetching PubMed literature and GenBank accessions." },
        { title: "Scientific Visualization", desc: "Plotting expression heatmaps, volcano plots, and distribution charts." }
      ]
    }
  ];

  const upcomingSchedule = [
    {
      month: "SEP",
      day: "28",
      title: "NGS Data Analysis Workshop",
      meta: "Live • 6 hours",
      workshopId: 1
    },
    {
      month: "OCT",
      day: "05",
      title: "Single-Cell RNA-seq Analysis",
      meta: "Live • 8 hours",
      workshopId: 2
    },
    {
      month: "OCT",
      day: "12",
      title: "Python for Bioinformatics",
      meta: "On-Demand • 4 hours",
      workshopId: 3
    },
    {
      month: "OCT",
      day: "18",
      title: "Structural Bioinformatics & AlphaFold",
      meta: "Live • 5 hours",
      workshopId: 1
    }
  ];

  const categories = [
    { name: "Bioinformatics", count: "12 workshops", icon: Dna },
    { name: "Data Science", count: "8 workshops", icon: BarChart3 },
    { name: "Genomics", count: "6 workshops", icon: GitMerge },
    { name: "AI & ML", count: "7 workshops", icon: Cpu },
    { name: "Programming", count: "10 workshops", icon: Code2 },
    { name: "Research Tools", count: "5 workshops", icon: FlaskConical }
  ];

  // Filter Logic
  const filteredWorkshops = allWorkshops.filter(ws => {
    const matchesSearch = ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || ws.category.toLowerCase() === selectedCategory.toLowerCase();

    if (activeFilter === 'Upcoming') {
      return matchesSearch && matchesCategory && ws.type === 'Upcoming';
    }
    if (activeFilter === 'On-Demand') {
      return matchesSearch && matchesCategory && ws.type === 'On-Demand';
    }
    if (activeFilter === 'Free') {
      return matchesSearch && matchesCategory && ws.level === 'Beginner';
    }
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-8 pb-24 relative overflow-hidden font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Background ambient lighting - strictly black & grey tones */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-zinc-900/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-zinc-900/30 rounded-full blur-[160px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* HERO SECTION: Learn. Build. Grow. with Background Scene  */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-zinc-800/90 bg-zinc-950 shadow-2xl p-6 sm:p-10 lg:p-12 mb-12"
        >
          {/* Background Image: Research Workspace & Laptop with Code */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none overflow-hidden z-0">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1400"
              alt="Bioinformatics Research Laptop & Workspace"
              className="w-full h-full object-cover object-center lg:object-right filter contrast-125 brightness-[0.7] lg:brightness-[0.8] opacity-30 sm:opacity-40 lg:opacity-55 scale-100 lg:scale-105 transition-transform duration-700"
            />
            {/* Seamless gradients blending smoothly into the pure black/grey canvas */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 sm:via-zinc-950/75 lg:via-zinc-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 sm:from-transparent to-zinc-950" />
          </div>

          {/* Foreground Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headlines & Search/Filter Controls */}
            <div className="lg:col-span-7">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-semibold uppercase tracking-wider mb-5 shadow-sm">
                <span className="text-zinc-400">✦</span>
                WORKSHOPS
              </div>

              {/* Main Headline - Crisp Monochromatic Silver/White Tone */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Learn. Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">Grow.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-300 sm:text-zinc-400 leading-relaxed max-w-xl mb-6 sm:mb-8">
                Join expert-led workshops and gain hands-on experience in bioinformatics, data science, and modern research tools. Build your skills, work on real-world datasets, and connect with a global community of learners and professionals.
              </p>

              {/* Search & Filter Bar */}
              <div className="space-y-3.5 max-w-lg">
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search workshops, topics, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {(['All', 'Upcoming', 'On-Demand', 'Free', 'Calendar'] as const).map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          isActive
                            ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                            : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                        }`}
                      >
                        {filter === 'Calendar' && <Calendar className="w-3.5 h-3.5" />}
                        {filter}
                      </button>
                    );
                  })}

                  {selectedCategory && (
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700"
                    >
                      <span>{selectedCategory}</span>
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Better Skills Bigger Impact & Code Terminal Accent */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-4 lg:pt-0">
              
              {/* Responsive container for the cursive art and terminal tag */}
              <div className="relative w-full max-w-sm flex flex-col items-center lg:items-end">
                {/* Better Skills Bigger Impact - Enhanced Organic Handwritten Art */}
                <div className="relative p-5 sm:p-6 rounded-2xl bg-zinc-900/50 lg:bg-transparent border border-zinc-800/80 lg:border-none backdrop-blur-sm lg:backdrop-blur-none shadow-xl lg:shadow-none select-none transform lg:-rotate-3 transition-transform hover:rotate-0 duration-300 w-full sm:w-auto">
                  <div className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-zinc-100 tracking-wide text-center lg:text-right leading-[1.1] drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                    Better<br />
                    Skills<br />
                    Bigger<br />
                    Impact
                  </div>

                  {/* Flowing handwritten flourish underline swoosh */}
                  <svg 
                    className="w-28 sm:w-36 h-6 text-zinc-400 mt-2 mx-auto lg:ml-auto lg:mr-0 drop-shadow-sm" 
                    viewBox="0 0 120 25" 
                    fill="none"
                  >
                    <path d="M5 18 C 40 26, 85 4, 115 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M106 7 L 116 12 L 109 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* MAIN CONTENT AREA: 2 Columns (Workshops Grid + Sidebar)  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Featured Workshops (8 Columns)             */}
          {/* ======================================================== */}
          <div className="lg:col-span-8">
            
            {/* Header with View All */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Featured Workshops
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Most popular and highly rated workshops from our expert community.
                </p>
              </div>
              <button 
                onClick={() => {
                  setActiveFilter('All');
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                View all <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Workshops Cards Grid (3 Columns on medium/large) */}
            {filteredWorkshops.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <FlaskConical className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-zinc-200 mb-1">No workshops found</h3>
                <p className="text-xs text-zinc-500 mb-4">Try adjusting your search query or active filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('All');
                    setSelectedCategory(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs text-white font-medium transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWorkshops.map((workshop) => {
                  const isFav = favorites.includes(workshop.id);
                  const isEnrolled = enrolledSuccess === workshop.id;

                  return (
                    <motion.div
                      key={workshop.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedWorkshop(workshop)}
                      className="group bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
                    >
                      {/* Top Card Image & Badges */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 brightness-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                        {/* Top-Left Workshop Type Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium backdrop-blur-md border ${
                            workshop.type === 'Live Workshop'
                              ? 'bg-zinc-950/80 border-emerald-500/40 text-emerald-300'
                              : workshop.type === 'Upcoming'
                              ? 'bg-zinc-950/80 border-zinc-600 text-zinc-300'
                              : 'bg-zinc-950/80 border-zinc-700 text-zinc-400'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              workshop.type === 'Live Workshop' ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'
                            }`} />
                            {workshop.type}
                          </span>
                        </div>

                        {/* Top-Right Favorite Button */}
                        <button
                          onClick={(e) => toggleFavorite(workshop.id, e)}
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                            isFav
                              ? 'bg-zinc-900 border-zinc-600 text-rose-400'
                              : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                        </button>
                      </div>

                      {/* Card Body Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Tags Row */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-3">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                              {workshop.category}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/60">
                              {workshop.level}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/60">
                              {workshop.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-zinc-200 transition-colors line-clamp-2">
                            {workshop.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                            {workshop.description}
                          </p>
                        </div>

                        <div>
                          {/* Instructor & Enrolled Row */}
                          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/70 mb-4">
                            <div className="flex items-center gap-2">
                              <img
                                src={workshop.instructor.avatar}
                                alt={workshop.instructor.name}
                                className="w-7 h-7 rounded-full object-cover border border-zinc-700"
                              />
                              <div>
                                <h4 className="text-[11px] font-semibold text-zinc-200 leading-tight">
                                  {workshop.instructor.name}
                                </h4>
                                <p className="text-[10px] text-zinc-500">
                                  {workshop.instructor.role}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                              <Users className="w-3.5 h-3.5 text-zinc-500" />
                              <span>{workshop.enrolled}</span>
                            </div>
                          </div>

                          {/* Card Footer: Clock & CTA Button */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                              <Clock className="w-3.5 h-3.5 text-zinc-500" />
                              <span>{workshop.duration}</span>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setEnrolledSuccess(workshop.id);
                                setTimeout(() => setEnrolledSuccess(null), 2500);
                              }}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                                isEnrolled
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-zinc-100 hover:bg-white text-zinc-950 shadow-sm'
                              }`}
                            >
                              {isEnrolled ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  Enrolled
                                </>
                              ) : (
                                <>
                                  {workshop.ctaLabel}
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Sidebar Widgets (4 Columns)                */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* WIDGET 1: Upcoming Workshops Calendar List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Upcoming Workshops</h3>
                </div>
                <button 
                  onClick={() => setActiveFilter('Upcoming')}
                  className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  View all <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {upcomingSchedule.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      const found = allWorkshops.find(w => w.id === item.workshopId);
                      if (found) setSelectedWorkshop(found);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Date Badge */}
                      <div className="w-10 h-11 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center text-center shrink-0">
                        <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase leading-none">
                          {item.month}
                        </span>
                        <span className="text-xs font-bold text-white leading-none mt-1">
                          {item.day}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          {item.meta}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-transform group-hover:translate-x-0.5" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WIDGET 2: Popular Categories Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Popular Categories</h3>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  View all <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* 2-Column Categories Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {categories.map((cat, index) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.name;

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-800 border-zinc-500 shadow-sm'
                          : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-semibold text-zinc-200 truncate leading-tight">
                          {cat.name}
                        </h4>
                        <p className="text-[9px] text-zinc-500 mt-0.5">
                          {cat.count}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM FULL-WIDTH CTA BANNER: Want to host a workshop?   */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Subtle ambient graphic */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

          <div className="flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200 shrink-0 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Want to host a workshop?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Share your expertise and help the community learn and grow.
              </p>
            </div>
          </div>

          <div className="z-10 shrink-0">
            <Link
              to="/apply-expert"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              Become an Instructor
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>

      {/* ======================================================== */}
      {/* WORKSHOP DETAILS DIALOG MODAL                            */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedWorkshop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col text-zinc-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedWorkshop(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-zinc-950/80 border border-zinc-700 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Banner Header Image */}
              <div className="w-full h-48 sm:h-56 relative shrink-0 bg-zinc-950">
                <img
                  src={selectedWorkshop.image}
                  alt={selectedWorkshop.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 font-semibold uppercase">
                        {selectedWorkshop.category}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {selectedWorkshop.level}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {selectedWorkshop.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedWorkshop.description}
                </p>

                {/* Metadata Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Duration</span>
                      <p className="text-xs font-semibold text-zinc-200">{selectedWorkshop.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-zinc-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Date</span>
                      <p className="text-xs font-semibold text-zinc-200">{selectedWorkshop.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-zinc-400" />
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-mono">Learners</span>
                      <p className="text-xs font-semibold text-zinc-200">{selectedWorkshop.enrolled}</p>
                    </div>
                  </div>
                </div>

                {/* What You'll Master */}
                <div>
                  <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-zinc-400" />
                    Curriculum & Key Competencies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedWorkshop.mastery.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-semibold text-zinc-200">{item.title}</h4>
                            <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor Spotlight */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedWorkshop.instructor.avatar}
                      alt={selectedWorkshop.instructor.name}
                      className="w-11 h-11 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{selectedWorkshop.instructor.name}</h4>
                      <p className="text-[11px] text-zinc-400">{selectedWorkshop.instructor.role}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">Verified GeneBoxAI Academic Mentor</p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedWorkshop(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setEnrolledSuccess(selectedWorkshop.id);
                      setSelectedWorkshop(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Register for Workshop
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}