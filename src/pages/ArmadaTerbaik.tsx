import {
  Car,
  Wrench,
  Shield,
  Star,
  Award,
  CheckCircle,
  Crown,
  Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const ArmadaTerbaik = () => {
  const fleetStats = [
    {
      number: "50+",
      label: "Unit Kendaraan",
      description: "Armada lengkap dari city car hingga bus besar",
    },
    {
      number: "100%",
      label: "Kondisi Prima",
      description: "Semua kendaraan selalu dalam kondisi terbaik",
    },
    {
      number: "24/7",
      label: "Maintenance",
      description: "Perawatan rutin dan emergency support",
    },
    {
      number: "5★",
      label: "Kenyamanan",
      description: "AC dingin, audio system, dan interior premium",
    },
  ];

  const vehicleCategories = [
    {
      category: "City Car & MPV",
      icon: "🚗",
      vehicles: [
        {
          name: "Toyota Avanza",
          capacity: "6 orang",
          price: "Rp. 600.000/hari",
          features: [
            "AC Dingin",
            "Audio System",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "New Avanza",
          capacity: "6 orang",
          price: "Rp. 700.000/hari",
          features: [
            "AC Dingin",
            "Audio System",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "Innova Reborn",
          capacity: "6 orang",
          price: "Rp. 850.000/hari",
          features: [
            "AC Dingin",
            "Premium Interior",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "Innova Zenix G",
          capacity: "6 orang",
          price: "Rp. 1.100.000/hari",
          features: ["AC Dingin", "Premium Audio", "USB Charging", "Matic"],
        },
        {
          name: "Innova Venturer",
          capacity: "6 orang",
          price: "Rp. 1.100.000/hari",
          features: [
            "AC Dingin",
            "Premium Interior",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "Innova Zenix Q",
          capacity: "5 orang",
          price: "Rp. 1.500.000/hari",
          features: ["AC Dingin", "Premium Audio", "USB Charging", "Matic"],
        },
      ],
    },
    {
      category: "SUV & Premium MPV",
      icon: "🚙",
      vehicles: [
        {
          name: "Mitsubishi Pajero",
          capacity: "6 orang",
          price: "Rp. 1.500.000/hari",
          features: [
            "4x4 Capability",
            "AC Dingin",
            "Premium Interior",
            "Matic/Manual",
          ],
        },
        {
          name: "Toyota Fortuner",
          capacity: "6 orang",
          price: "Rp. 1.500.000/hari",
          features: [
            "4x4 Capability",
            "AC Dingin",
            "Premium Audio",
            "Matic/Manual",
          ],
        },
        {
          name: "Toyota Alphard Facelift",
          capacity: "5 orang",
          price: "Rp. 2.800.000/hari",
          features: [
            "Executive Class",
            "Premium Audio",
            "Reclining Seats",
            "Matic",
          ],
        },
        {
          name: "Toyota Alphard Transformers",
          capacity: "5 orang",
          price: "Rp. 2.500.000/hari",
          features: [
            "Executive Class",
            "Premium Audio",
            "Reclining Seats",
            "Matic/Manual",
          ],
        },
        {
          name: "Toyota Alphard Hybrid",
          capacity: "5 orang",
          price: "Rp. 3.500.000/hari",
          features: [
            "Hybrid Technology",
            "Premium Audio",
            "Reclining Seats",
            "Matic",
          ],
        },
      ],
    },
    {
      category: "Bus & Minibus",
      icon: "🚌",
      vehicles: [
        {
          name: "Hiace Commuter",
          capacity: "16 orang",
          price: "Rp. 1.200.000/hari",
          features: [
            "AC Dingin",
            "Audio System",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "Hiace Premio",
          capacity: "14 orang",
          price: "Rp. 1.500.000/hari",
          features: [
            "AC Dingin",
            "Premium Interior",
            "USB Charging",
            "Matic/Manual",
          ],
        },
        {
          name: "Hiace Luxury",
          capacity: "8 orang",
          price: "Rp. 2.000.000/hari",
          features: ["AC Dingin", "Premium Audio", "Reclining Seats", "Matic"],
        },
        {
          name: "Bus 35 Seat",
          capacity: "35 orang",
          price: "Rp. 2.500.000/hari",
          features: [
            "AC Central",
            "Entertainment System",
            "Luggage Space",
            "Matic/Manual",
          ],
        },
        {
          name: "Bis Bus",
          capacity: "50 orang",
          price: "Rp. 3.000.000/hari",
          features: ["AC Central", "Entertainment System", "Luggage Space"],
        },
      ],
    },
  ];

  const maintenanceFeatures = [
    {
      icon: Wrench,
      title: "Perawatan Rutin",
      description:
        "Setiap kendaraan menjalani servis berkala sesuai jadwal pabrik",
      details: [
        "Servis 5.000 km atau 3 bulan",
        "Ganti oli dan filter",
        "Cek sistem rem dan suspensi",
        "Kalibrasi AC dan audio",
      ],
    },
    {
      icon: Shield,
      title: "Standar Keamanan",
      description: "Semua kendaraan dilengkapi fitur keselamatan modern",
      details: [
        "Dual airbag",
        "ABS & EBD",
        "Seatbelt 3 titik",
        "Child safety lock",
      ],
    },
    {
      icon: Star,
      title: "Kenyamanan Premium",
      description: "Interior dan fitur yang memberikan pengalaman terbaik",
      details: [
        "AC double blower",
        "Audio system premium",
        "USB charging port",
        "Cup holder & storage",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Pak Budi",
      role: "Tour Leader",
      content:
        "Armada Pendopo Tour selalu dalam kondisi prima. AC-nya dingin, mesin halus, dan interior bersih. Sudah 5 tahun menggunakan jasa mereka untuk group tour.",
      rating: 5,
      vehicle: "Toyota Avanza",
    },
    {
      name: "Ibu Siti",
      role: "Ibu Rumah Tangga",
      content:
        "Memilih mobil untuk liburan keluarga memang harus yang terbaik. Armada mereka bagus-bagus, bersih, dan driver-nya ramah. Puas banget!",
      rating: 5,
      vehicle: "Honda Mobilio",
    },
    {
      name: "Mas Anton",
      role: "Content Creator",
      content:
        "Untuk shooting dan perjalanan dinas, butuh kendaraan yang reliable. Armada Pendopo Tour selalu siap dan dalam kondisi top.",
      rating: 5,
      vehicle: "Toyota Fortuner",
    },
  ];

  const qualityStandards = [
    {
      icon: "🔧",
      title: "Workshop Bersertifikat",
      description: "Perawatan dilakukan di bengkel resmi dan bersertifikat",
    },
    {
      icon: "📋",
      title: "Checklist Harian",
      description: "Inspeksi menyeluruh sebelum setiap perjalanan",
    },
    {
      icon: "🧼",
      title: "Deep Cleaning",
      description: "Pembersihan mendalam interior dan eksterior",
    },
    {
      icon: "⚡",
      title: "Fuel Quality",
      description: "Penggunaan bahan bakar berkualitas tinggi",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Armada Terbaik", href: "/armada-terbaik" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
              <Car className="w-4 h-4 text-orange-600 animate-pulse" />
              <span className="text-orange-700 font-medium text-sm">
                Armada Terbaik
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Kendaraan Premium Berkualitas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Armada kendaraan terbaru dengan perawatan prima, AC yang dingin
              optimal, dan interior bersih yang siap memberikan kenyamanan
              maksimal untuk perjalanan Anda.
            </p>
          </div>

          {/* Fleet Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {fleetStats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vehicle Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Kategori Armada Kami
            </h2>

            {vehicleCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-8 justify-center">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.vehicles.map((vehicle, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {vehicle.name}
                      </h4>
                      <p className="text-orange-600 font-semibold mb-2">
                        {vehicle.capacity}
                      </p>
                      <p className="text-green-600 font-bold text-lg mb-4">
                        {vehicle.price}
                      </p>

                      <div className="space-y-2">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Maintenance Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Standar Perawatan & Keamanan
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {maintenanceFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-8 text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl">
                        <Icon className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-left"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quality Standards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Standar Kualitas Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStandards.map((standard, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{standard.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Pengalaman Pelanggan dengan Armada Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-orange-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.vehicle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Rasakan Kenyamanan Armada Terbaik Kami
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pilih kendaraan yang sesuai kebutuhan Anda. Semua armada kami
                siap memberikan pengalaman perjalanan yang tak terlupakan dengan
                kualitas terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Pesan Sekarang</span>
                </a>
                <a
                  href="/sewa-mobil"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Lihat Harga</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmadaTerbaik;
