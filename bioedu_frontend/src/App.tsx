import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Workshops from "./pages/Workshops";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Community from "./pages/Community";
import Experts from "./pages/Experts";
import ApplyExpert from "./pages/ExpertJoinForm";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/apply-expert" element={<ApplyExpert />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
