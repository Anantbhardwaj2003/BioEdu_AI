import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Blog } from './components/Blog';
import { ResearchAreas } from './components/ResearchAreas';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DNABackground } from './components/DNABackground';
import { Workshops } from './pages/Workshops';
import { WorkshopDetails } from './pages/WorkshopDetails';
import { AdvancedCourses } from './pages/AdvancedCourses';
import { FAQ } from './pages/FAQ';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Blog />
      <ResearchAreas />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200">
        <DNABackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<WorkshopDetails />} />
            <Route path="/advanced-courses" element={<AdvancedCourses />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
