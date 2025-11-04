import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Users,
  Settings,
  Star,
  Shield,
  Zap,
} from "lucide-react";

const SewaMobil = () => {
  const whatsappNumber = "6285640644321";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sewa Mobil Yogyakarta - Pendopo Trans Nusantara",
    description:
      "Sewa mobil dengan supir di Yogyakarta. Armada lengkap mulai dari Avanza, Innova, Alphard, hingga bus. Harga terjangkau dengan layanan profesional.",
    url: "https://pendopotrans.com/sewa-mobil",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
    },
    mainEntity: {
      "@type": "AutoRental",
      name: "Pendopo Trans Nusantara - Sewa Mobil",
      description: "Layanan sewa mobil dengan supir profesional di Yogyakarta",
      provider: {
        "@type": "Organization",
        name: "Pendopo Trans Nusantara",
      },
    },
  };

  const cars = [
    {
      name: "Innova Venturer",
      price: "1.100.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.100.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "AC Dingin",
        "Audio System",
        "Safety Belt",
        "Supir Profesional",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Alphard Hybrid",
      price: "3.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 3.500.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "5 Orang",
      transmission: "Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Hybrid Engine",
        "Premium Interior",
        "Entertainment System",
        "Luxury Seating",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Alphard Facelift",
      price: "2.800.000",
      description: "Mobil Dengan Supir + Bensin Rp. 2.800.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "5 Orang",
      transmission: "Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Modern Design",
        "Advanced Safety",
        "Comfort Seats",
        "Premium Audio",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Innova Zenix Q",
      price: "1.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.500.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "5 Orang",
      transmission: "Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Latest Model",
        "Fuel Efficient",
        "Spacious Cabin",
        "Modern Features",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Bis Bus",
      price: "3.000.000",
      description: "Mobil Dengan Supir + Bensin Rp. 3.000.000/ Day",
      duration: "15 Jam (max 22.00)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "50 Orang",
      transmission: "",
      notes:
        "Harga Sewa Tidak Termasuk Fee Crew, Tol, Parkir, Tiket Masuk Tempat Wisata",
      features: [
        "Large Capacity",
        "AC System",
        "Audio Entertainment",
        "Professional Crew",
      ],
      brandUrl: "https://www.hino.co.id",
    },
    {
      name: "Hiace Luxury",
      price: "2.000.000",
      description: "Mobil Dengan Supir + Bensin Rp. 2.000.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "8 Orang",
      transmission: "Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Luxury Interior",
        "Premium Seating",
        "Entertainment System",
        "Comfort Ride",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Innova Zenix G",
      price: "1.100.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.100.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Reliable Performance",
        "Comfortable Seats",
        "Good Fuel Economy",
        "Easy Handling",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Avanza",
      price: "600.000",
      description: "Mobil Dengan Supir + Bensin Rp.600.000 / Day",
      duration: "13 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: ["Affordable", "Spacious", "Reliable", "Fuel Efficient"],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "New Avanza",
      price: "700.000",
      description: "Mobil Dengan Supir + Bensin Rp.700.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Latest Design",
        "Modern Features",
        "Comfortable",
        "Economical",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Innova Reborn",
      price: "850.000",
      description: "Mobil Dengan Supir + Bensin Rp. 850.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Refreshed Design",
        "Improved Comfort",
        "Better Performance",
        "Modern Tech",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Hiace Premio",
      price: "1.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.500.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "14 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Large Capacity",
        "Comfortable Seating",
        "Good Ventilation",
        "Reliable Engine",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Pajero",
      price: "1.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.500.000/ Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "SUV Performance",
        "Off-road Capability",
        "Spacious Interior",
        "Powerful Engine",
      ],
      brandUrl: "https://www.mitsubishi-motors.co.id",
    },
    {
      name: "Fortuner",
      price: "1.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.500.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "6 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Premium SUV",
        "Advanced Safety",
        "Comfortable Ride",
        "Modern Design",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Alphard Transformers",
      price: "2.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 2.500.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "5 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Luxury MPV",
        "Premium Features",
        "Executive Seating",
        "High-end Interior",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
    {
      name: "Bus 35 Seat",
      price: "2.500.000",
      description: "Mobil Dengan Supir + Bensin Rp. 2.500.000 / Day",
      duration: "15 Jam (max 22.30)",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "35 Orang",
      transmission: "Matic / Manual",
      notes:
        "Harga Sewa Tidak Termasuk Fee Crew, Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Medium Capacity",
        "AC System",
        "Comfortable Seats",
        "Professional Service",
      ],
      brandUrl: "https://www.hino.co.id",
    },
    {
      name: "Hiace Commuter",
      price: "1.200.000",
      description: "Mobil Dengan Supir + Bensin Rp. 1.200.000 / Day",
      duration: "",
      overtime: "10% Dari Tarif Per Jam",
      capacity: "16 Orang",
      transmission: "Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
      features: [
        "Versatile Use",
        "Good Capacity",
        "Reliable Performance",
        "Easy Maintenance",
      ],
      brandUrl: "https://www.toyota.co.id",
    },
  ];

  interface Car {
    name: string;
    price: string;
    description: string;
    duration: string;
    overtime: string;
    capacity: string;
    transmission: string;
    notes: string;
    features: string[];
    brandUrl: string;
  }

  const CarCard = ({ car }: { car: Car }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <a
            href={car.brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Info Brand →
          </a>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            {car.description}
          </p>
          <p className="text-3xl font-bold text-red-600">Rp. {car.price}</p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800"
              >
                <Star className="w-3 h-3 mr-1" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {car.duration && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Durasi Pemakaian {car.duration}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm">Overtime {car.overtime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Kapasitas {car.capacity}</span>
          </div>
          {car.transmission && (
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Transmisi {car.transmission}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-4">{car.notes}</p>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all group-hover:scale-105"
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20sewa%20mobil%20${car.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Sewa Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </Card>
  );

  const relatedContentItems = [
    {
      title: "Paket Wisata Yogyakarta",
      description:
        "Temukan paket wisata lengkap untuk menjelajahi Yogyakarta dengan transportasi dan guide profesional.",
      href: "/paket-wisata",
      type: "internal" as const,
    },
    {
      title: "Tentang Kami",
      description:
        "Pelajari lebih lanjut tentang Pendopo Trans Nusantara dan komitmen kami dalam melayani pelanggan.",
      href: "/about",
      type: "internal" as const,
    },
    {
      title: "Toyota Indonesia",
      description:
        "Informasi resmi tentang produk Toyota di Indonesia, termasuk model Innova dan Alphard.",
      href: "https://www.toyota.co.id",
      type: "external" as const,
    },
    {
      title: "Mitsubishi Motors",
      description:
        "Pelajari tentang Mitsubishi Pajero dan produk otomotif lainnya dari Mitsubishi Motors.",
      href: "https://www.mitsubishi-motors.co.id",
      type: "external" as const,
    },
    {
      title: "HINO Indonesia",
      description:
        "Informasi tentang bus dan kendaraan komersial HINO untuk kebutuhan transportasi massal.",
      href: "https://www.hino.co.id",
      type: "external" as const,
    },
    {
      title: "Info Wisata Yogyakarta",
      description:
        "Baca artikel menarik tentang destinasi wisata dan tips traveling di Yogyakarta.",
      href: "/blog",
      type: "internal" as const,
    },
  ];

  const breadcrumbItems = [{ label: "Sewa Mobil" }];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Car Rental Yogyakarta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <p className="text-lg md:text-xl text-white/80 mb-2">
                Unit Handal Terawat
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Driver Profesional Layanan Respon Cepat dan Tepat
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sewa Mobil Yogyakarta Terbaik
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Armada lengkap dengan supir profesional siap mengantar perjalanan
              Anda
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <a href="#armada" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Lihat Armada
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <a href="/paket-wisata" className="flex items-center gap-2">
                  Paket Wisata
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <a href="/about" className="flex items-center gap-2">
                  Tentang Kami
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih Sewa Mobil Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open("/about", "_self")}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aman & Terpercaya</h3>
              <p className="text-muted-foreground">
                Armada terawat dengan supir berpengalaman
              </p>
            </div>
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Harga Kompetitif</h3>
              <p className="text-muted-foreground">
                Tarif terbaik dengan kualitas terjamin
              </p>
            </div>
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() =>
                window.open("https://wa.me/" + whatsappNumber, "_blank")
              }
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Layanan customer service siap membantu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="armada" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Armada Sewa Mobil Yogyakarta
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Pilih mobil yang sesuai dengan kebutuhan Anda
            </p>
            <p className="text-sm text-muted-foreground">
              Klik pada kartu mobil untuk informasi lebih detail atau
              <a
                href="/paket-wisata"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                {" "}
                gabungkan dengan paket wisata
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <CarCard key={index} car={car} />
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
                href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20konsultasi%20sewa%20mobil`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Chat CS
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              <a href="/contact" className="flex items-center gap-2">
                Hubungi Kami
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Jelajahi Lebih Lanjut"
        items={relatedContentItems}
      />

      <Footer />
    </div>
  );
};

export default SewaMobil;
