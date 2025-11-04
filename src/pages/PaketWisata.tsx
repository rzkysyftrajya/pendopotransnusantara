import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import {
  oneDayPackages,
  twoDayPackages,
  threeDayPackages,
  companyPackages,
} from "@/lib/packages";

const PaketWisata = () => {
  const whatsappNumber = "6281378641157";

  interface Package {
    name: string;
    duration: string;
    location: string;
    destinations: string[];
    price: string;
    image: string;
  }

  const PackageCard = ({ pkg }: { pkg: Package }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-red-600" />
          <span className="text-sm text-muted-foreground">{pkg.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {pkg.duration}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Destinasi:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {pkg.destinations.map((dest: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {dest}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Start From</p>
            <p className="text-2xl font-bold text-red-600">Rp. {pkg.price}</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20info%20paket%20${pkg.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593719592254-69d2357c145e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Yogyakarta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <p className="text-lg md:text-xl text-white/80 mb-2">
                Jelajahi Keindahan Jogja dengan Paket Wisata Terbaik
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Pengalaman tak terlupakan dengan layanan profesional dan harga
                terjangkau.
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Paket Wisata Jogja
            </h1>
          </div>
        </div>
      </section>

      {/* One Day Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 1 Hari
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih paket wisata satu hari yang sesuai dengan preferensi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Two Day Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 2 Hari 1 Malam
            </h2>
            <p className="text-lg text-muted-foreground">
              Nikmati pengalaman wisata yang lebih lengkap dengan paket dua hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twoDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Three Day Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 3 Hari 2 Malam
            </h2>
            <p className="text-lg text-muted-foreground">
              Eksplorasi Yogyakarta secara mendalam dengan paket tiga hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Company Outing
            </h2>
            <p className="text-lg text-muted-foreground">
              Paket khusus untuk kegiatan perusahaan dan team building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-500 to-red-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Masih Bingung Rencana Liburan Anda ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Jangan Khawatir! Tim Ahli Kami siap membantu anda merancang liburan
            impian ke jogja dengan paket tour yang paling sesuai untuk anda.
            dapatkan yang tak terlupakan tanpa repot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 transition-all"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20konsultasi%20paket%20tour`}
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

      <Footer />
    </div>
  );
};

export default PaketWisata;
