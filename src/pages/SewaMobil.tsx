import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Users, Settings } from "lucide-react";

const SewaMobil = () => {
  const whatsappNumber = "6285640644321";

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
  }

  const CarCard = ({ car }: { car: Car }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{car.name}</h3>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            {car.description}
          </p>
          <p className="text-3xl font-bold text-red-600">Rp. {car.price}</p>
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
          className="w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all"
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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/600x400/transparent/F00"
            alt="Car Rental"
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
              Paket Tour Jogja 1 Hari Terbaik
            </h1>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Armada Sewa Mobil Yogyakarta
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih mobil yang sesuai dengan kebutuhan Anda
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SewaMobil;
