import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, MessageCircle } from "lucide-react";

const innovaImage = "https://placehold.co/600x400/transparent/F00";
const alphardImage = "https://placehold.co/600x400/transparent/F00";
const hiaceImage = "https://placehold.co/600x400/transparent/F00";

const CarList = () => {
  const whatsappNumber = "6281234567890";

  const cars = [
    {
      name: "Innova Venturer",
      price: "Rp. 1.100.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp. 1.100.000 / Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 6 Orang",
      transmission: "Transimisi Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Alphard Hybrid",
      price: "Rp. 3.500.000",
      image: alphardImage,
      description: "Mobil Dengan Supir + Bensin Rp. 3.500.000/ Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 5 Orang",
      transmission: "Transimisi Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Alphard Facelift",
      price: "Rp. 2.800.000",
      image: alphardImage,
      description: "Mobil Dengan Supir + Bensin Rp. 2.800.000/ Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 5 Orang",
      transmission: "Transimisi Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Innova Zenix Q",
      price: "Rp. 1.500.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp. 1.500.000/ Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 5 Orang",
      transmission: "Transimisi Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Bis Bus",
      price: "Rp. 3.000.000",
      image: hiaceImage,
      description: "Mobil Dengan Supir + Bensin Rp. 3.000.000/ Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.00)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 50 Orang",
      transmission: "",
      notes:
        "Harga Sewa Tidak Termasuk Fee Crew, Tol, Parkir, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Hiace Luxury",
      price: "Rp. 2.000.000",
      image: hiaceImage,
      description: "Mobil Dengan Supir + Bensin Rp. 2.000.000/ Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 8 Orang",
      transmission: "Transmisi Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Innova Zenix G",
      price: "Rp. 1.100.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp. 1.100.000 / Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 6 Orang",
      transmission: "Transimisi Matic",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Avanza",
      price: "Rp. 600.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp.600.000 / Day",
      duration: "Durasi Pemakaian 13 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 6 Orang",
      transmission: "Transimisi Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "New Avanza",
      price: "Rp. 700.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp.700.000 / Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 6 Orang.",
      transmission: "Transimisi Matic / Manual.",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
    {
      name: "Innova Reborn",
      price: "Rp. 850.000",
      image: innovaImage,
      description: "Mobil Dengan Supir + Bensin Rp. 850.000 / Day",
      duration: "Durasi Pemakaian 15 Jam (max 22.30)",
      overtime: "Overtime 10% Dari Tarif Per Jam",
      capacity: "Kapasitas 6 Orang",
      transmission: "Transimisi Matic / Manual",
      notes: "Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat Wisata",
    },
  ];

  return (
    <section id="sewa-mobil" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Armada Unggulan Pendopo Trans Nusantara
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mobil terbaru dengan harga kompetitif, driver profesional, dan
            layanan terpercaya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {car.price}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {car.description}
                </div>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <div>{car.duration}</div>
                  <div>{car.overtime}</div>
                  <div>{car.capacity}</div>
                  {car.transmission && <div>{car.transmission}</div>}
                  <div className="text-xs mt-2 text-red-600 font-medium">
                    {car.notes}
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20sewa%20${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pesan Sekarang
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="mt-16 bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            SYARAT & KETENTUAN
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Harga Sewa Sudah Termasuk Sopir dan BBM Sebagai catatan, harga
              sewa mobil juga bisa lebih mahal jika lokasi tujuan yang Anda
              inginkan melebihi dari batas normal. Anda bisa langsung
              menghubungi team Pendopo Trans Nusantara untuk perkiraan harga
              yang lebih tepat.
            </p>
            <p>
              Harga Sewa Belum Termasuk Parkir, Tol dan Tiket Masuk Destinasi
              Wisata
            </p>
            <p>
              Harga Sewa Mobil Tidak Berlaku Pada Periode HIGH SEASON atau PEAK
              SEASON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarList;
