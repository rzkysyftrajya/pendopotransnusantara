import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Briefcase,
  MessageCircle,
  Star,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react";

const innovaImage = "/armada/innova-zenix-g.webp";
const alphardImage = "/armada/alphard-facelift.webp";
const hiaceImage = "/armada/hiace-luxury.webp";

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
      badge: "Popular",
      badgeColor: "from-green-500 to-green-600",
      rating: 4.8,
      features: ["AC Premium", "Audio System", "USB Charging"],
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
      badge: "Premium",
      badgeColor: "from-purple-500 to-purple-600",
      rating: 4.9,
      features: ["Hybrid Engine", "Luxury Interior", "Premium Sound"],
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
      badge: "Luxury",
      badgeColor: "from-blue-500 to-blue-600",
      rating: 4.7,
      features: ["Latest Model", "Premium Leather", "Advanced Safety"],
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
      badge: "New",
      badgeColor: "from-orange-500 to-orange-600",
      rating: 4.6,
      features: ["Latest Tech", "Comfort Seats", "Modern Design"],
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
      badge: "Group",
      badgeColor: "from-indigo-500 to-indigo-600",
      rating: 4.5,
      features: ["Large Capacity", "Group Travel", "Comfortable"],
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
      badge: "Comfort",
      badgeColor: "from-teal-500 to-teal-600",
      rating: 4.7,
      features: ["Spacious", "Luxury Seats", "Entertainment"],
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
      badge: "Standard",
      badgeColor: "from-gray-500 to-gray-600",
      rating: 4.4,
      features: ["Reliable", "Fuel Efficient", "Comfortable"],
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
      badge: "Economy",
      badgeColor: "from-yellow-500 to-yellow-600",
      rating: 4.3,
      features: ["Budget Friendly", "Reliable", "Spacious"],
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
      badge: "Updated",
      badgeColor: "from-cyan-500 to-cyan-600",
      rating: 4.5,
      features: ["Latest Model", "Modern Features", "Efficient"],
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
      badge: "Classic",
      badgeColor: "from-red-500 to-red-600",
      rating: 4.6,
      features: ["Timeless Design", "Reliable", "Comfortable"],
    },
  ];

  return (
    <section
      id="sewa-mobil"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-400/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-60 h-60 bg-red-300/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-morph"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
            <Crown className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-red-600 font-medium text-sm">
              Premium Fleet
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
            Armada Unggulan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mobil terbaru dengan harga kompetitif, driver profesional, dan
            layanan terpercaya untuk perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-700 group cursor-pointer animate-scale-in min-h-[500px] flex flex-col max-w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              <div
                className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${car.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce-in`}
              >
                {car.badge}
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs font-medium text-gray-700">
                  {car.rating}
                </span>
              </div>

              {/* Image Container */}
              <div className="overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative max-h-48 flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
              </div>

              <div className="p-6">
                {/* Title and Price */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {car.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                      {car.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per day</div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs font-medium border border-red-100 hover:bg-red-100 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-500" />
                    <span>{car.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-red-500" />
                    <span>{car.transmission || "Manual/Matic"}</span>
                  </div>
                  <div className="text-xs mt-2 text-red-600 font-medium bg-red-50 p-2 rounded-lg">
                    {car.notes}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-3 rounded-xl shadow-xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 animate-pulse-glow"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20sewa%20${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Now</span>
                  </a>
                </Button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Terms & Conditions */}
        <div
          className="mt-20 glass-card p-8 md:p-12 rounded-3xl animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
              SYARAT & KETENTUAN
            </h3>
            <p className="text-muted-foreground">
              Informasi penting untuk perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Harga Termasuk
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sopir profesional dan bahan bakar
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Crown className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Harga Tidak Termasuk
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Parkir, tol, dan tiket masuk destinasi
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    High Season
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Harga berbeda pada periode peak season
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-700 text-center">
              💡 <strong>Catatan:</strong> Harga sewa bisa berubah jika lokasi
              tujuan melebihi batas normal. Hubungi kami untuk perkiraan harga
              yang lebih tepat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarList;
