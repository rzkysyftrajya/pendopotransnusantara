import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarList from "@/components/CarList";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Car } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Brief About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang Pendopo Trans Nusantara
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pendopo Trans Nusantara adalah penyedia layanan transportasi dan
              paket wisata terpercaya di Yogyakarta. Dengan pengalaman
              bertahun-tahun, kami berkomitmen memberikan pelayanan profesional,
              kenyamanan maksimal, dan kemudahan dalam setiap perjalanan Anda.
              Armada modern, driver berpengalaman, dan harga kompetitif
              menjadikan kami pilihan utama untuk kebutuhan transportasi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tentang">
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <CarList />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-rose-500 to-red-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <h3 className="text-6xl font-bold mb-2">99</h3>
              <p className="text-lg">+</p>
              <p className="text-lg">Satisfaction Client</p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold mb-2">30</h3>
              <p className="text-lg">+</p>
              <p className="text-lg">Destination</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-4">
                {[9, 8, 7, 6, 5, 4].map((num) => (
                  <span key={num} className="text-2xl">
                    {num}
                  </span>
                ))}
              </div>
              <p className="text-lg">Our Partners</p>
            </div>
          </div>
        </div>
      </section>

      <Advantages />

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Masih Bingung Rencana Liburan Kamu ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jangan Khawatir! Tim Ahli Kami siap membantu Kamu merancang liburan
            impianmu dengan paket tour yang paling sesuai untuk Kamu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all"
            >
              <a
                href="https://wa.me/6281378641157?text=Halo,%20saya%20ingin%20konsultasi%20paket%20tour"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Chat CS
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
