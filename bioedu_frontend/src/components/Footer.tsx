import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1c.3-1.5 1.5-2.7 3-3 .9-.2 6.5-.2 6.5-.2s5.6 0 6.5.2c1.5.3 2.7 1.5 3 3 .2 1 .2 3.4.2 4.9s0 3.9-.2 4.9c-.3 1.5-1.5 2.7-3 3-.9.2-6.5.2-6.5.2s-5.6 0-6.5-.2c-1.5-.3-2.7-1.5-3-3-.2-1-.2-3.4-.2-4.9s0-3.9.2-4.9"/>
    <path d="m10 15 5-3-5-3v6z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex-shrink-0 flex items-center gap-3 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 text-slate-950">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                  <path d="M28 12 V4 H4 V28 H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
                <span className="font-mono text-lg font-bold leading-none mt-0.5 ml-0.5">G</span>
              </div>
              <span className="font-mono font-bold tracking-[0.15em] text-xl text-slate-950">GeneBoxAI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The world's most trusted bridge between frontier science and working scientific talent. Turning cutting-edge research into accessible skills.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-semibold text-slate-950 mb-4 text-sm">Platform</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><Link to="/workshops" className="hover:text-blue-600 transition-colors">Workshops</Link></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Bootcamps</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">For Experts</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Research</a></li>
                <li><Link to="/teams" className="hover:text-blue-600 transition-colors">Teams</Link></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-950 mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} GeneBoxAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://www.youtube.com/@GeneboxAI" target="_blank" className="hover:text-blue-600 transition-colors" aria-label="YouTube">
              <YouTubeIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anant-bhardwaj-b34417292/" target="_blank" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a href="mailto:geneboxai@gmail.com" className="hover:text-blue-600 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
