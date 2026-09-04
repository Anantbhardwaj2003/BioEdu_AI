export default function ForExperts() {
  return (
    <div id="experts" className="bg-white py-24 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-2xl p-8 md:p-16 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Monetize your academic expertise ethically.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
              We handle marketing, enrollment, payments, and platform logistics. You focus on teaching the methodologies and pipelines that define your research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-blue-600 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                Apply to Become an Instructor
              </a>
              <a href="#" className="bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
                Learn How it Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}