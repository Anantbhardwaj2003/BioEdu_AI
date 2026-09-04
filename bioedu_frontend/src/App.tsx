import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Workshops from "./pages/Workshops";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
