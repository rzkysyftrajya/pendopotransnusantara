import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PaketWisata from "./pages/PaketWisata";
import SewaMobil from "./pages/SewaMobil";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Fleet from "./pages/Fleet";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import KualitasLayanan from "./pages/KualitasLayanan";
import HargaKompetitif from "./pages/HargaKompetitif";
import Terpercaya from "./pages/Terpercaya";
import Terjamin from "./pages/Terjamin";
import Berpengalaman from "./pages/Berpengalaman";
import ArmadaTerbaik from "./pages/ArmadaTerbaik";
import TestimonialImagesPage from "./pages/TestimonialImages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paket-wisata" element={<PaketWisata />} />
          <Route path="/sewa-mobil" element={<SewaMobil />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimoni" element={<Testimonials />} />
          <Route path="/armada" element={<Fleet />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/kualitas-layanan" element={<KualitasLayanan />} />
          <Route path="/harga-kompetitif" element={<HargaKompetitif />} />
          <Route path="/terpercaya" element={<Terpercaya />} />
          <Route path="/terjamin" element={<Terjamin />} />
          <Route path="/berpengalaman" element={<Berpengalaman />} />
          <Route path="/armada-terbaik" element={<ArmadaTerbaik />} />
          <Route path="/galeri-testimoni" element={<TestimonialImagesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
