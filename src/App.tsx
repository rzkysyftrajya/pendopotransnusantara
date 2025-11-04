import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaketWisata from "./pages/PaketWisata";
import SewaMobil from "./pages/SewaMobil";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Fleet from "./pages/Fleet";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
