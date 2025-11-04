import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarList from "@/components/CarList";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CarList />
      <Advantages />
      <FAQ />
      <Terms />
      <Footer />
    </div>
  );
};

export default Index;
