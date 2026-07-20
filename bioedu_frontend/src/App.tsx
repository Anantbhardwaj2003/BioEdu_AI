import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Blog } from './pages/Blog';
import { ResearchAreas } from './components/ResearchAreas';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { DNABackground } from './components/DNABackground';
import { Workshops } from './pages/Workshops';
import { WorkshopDetails } from './pages/WorkshopDetails';
import { AdvancedCourses } from './pages/AdvancedCourses';
import { FAQ } from './pages/FAQ';
import { Teams } from './pages/Teams';
import { AboutUs } from './pages/AboutUs';
import { Auth } from './pages/Auth';
import { PaymentInterface } from './pages/PaymentInterface';
import { AIChatWidget } from './components/AIChatWidget';
import { DummyCertificates } from './components/DummyCertificates';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsService } from './pages/TermsService';
import { CancerResearchPage } from './pages/CancerResearchPage';
import { GeneticsPage } from './pages/GeneticsPage';
import { NervousSystemPage } from './pages/NervousSystemPage';
import { ImmunologyPage } from './pages/ImmunologyPage';
import { ImmunoOncologyPage } from './pages/ImmunoOncologyPage';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DummyCertificates />
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<WorkshopDetails />} />
            <Route path="/advanced-courses" element={<AdvancedCourses />} />

            {/* ---------------- Research Areas ---------------- */}
            <Route path="/cancer-research" element={<CancerResearchPage />} />
            <Route path="/genetics" element={<GeneticsPage />} />
            <Route path="/nervous-system" element={<NervousSystemPage />} />
            <Route path="/immunology" element={<ImmunologyPage />} />
            <Route path="/immuno-oncology" element={<ImmunoOncologyPage />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/payment/:id" element={<PaymentInterface />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsService />} />
          </Routes>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </BrowserRouter>
  );
}
