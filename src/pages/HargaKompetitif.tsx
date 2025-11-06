import {
  DollarSign,
  TrendingDown,
  Calculator,
  PiggyBank,
  Target,
  Award,
  Star,
  Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const HargaKompetitif = () => {
  const pricingFeatures = [
    {
      icon: TrendingDown,
      title: "Harga Terjangkau",
      description:
        "Kami menawarkan harga yang kompetitif tanpa mengurangi kualitas layanan. Budget Anda adalah prioritas kami.",
      details: [
        "Harga transparan tanpa biaya tersembunyi",
        "Diskon khusus untuk grup dan corporate",
        "Paket hemat untuk perjalanan rutin",
        "Fleksibilitas pembayaran",
      ],
    },
    {
      icon: Calculator,
      title: "Value for Money",
      description:
        "Setiap rupiah yang Anda keluarkan memberikan nilai maksimal dengan layanan premium yang kami berikan.",
      details: [
        "Paket all-inclusive tanpa extra charge",
        "Kualitas layanan premium",
        "Fasilitas lengkap dan modern",
        "Garansi kepuasan pelanggan",
      ],
    },
    {
      icon: PiggyBank,
      title: "Efisiensi Biaya",
      description:
        "Kami membantu Anda mengoptimalkan budget perjalanan dengan solusi yang efisien dan efektif.",
      details: [
        "Perencanaan budget detail",
        "Rekomendasi paket sesuai kebutuhan",
        "Konsultasi gratis untuk perencanaan",
        "Monitoring pengeluaran real-time",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Paket Ekonomis",
      price: "Mulai 500rb",
      description: "Solusi perjalanan hemat untuk kebutuhan dasar",
      features: [
        "Transportasi AC",
        "Driver berpengalaman",
        "Asuransi dasar",
        "Dukungan 24/7",
        "Pemeliharaan rutin",
      ],
      popular: false,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Paket Premium",
      price: "Mulai 1jt",
      description: "Layanan lengkap dengan fasilitas premium",
      features: [
        "Semua fitur Paket Ekonomis",
        "Tour guide profesional",
        "Makanan & minuman",
        "Hotel bintang 3-4",
        "Asuransi comprehensive",
        "Free cancellation",
      ],
      popular: true,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Paket VIP",
      price: "Mulai 2jt",
      description: "Pengalaman eksklusif dengan layanan personal",
      features: [
        "Semua fitur Paket Premium",
        "Private chauffeur",
        "Hotel bintang 5",
        "Personal concierge",
        "Custom itinerary",
        "Luxury vehicle options",
      ],
      popular: false,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      name: "Rina Sari",
      role: "HR Manager PT. Global Tech",
      content:
        "Budget perjalanan perusahaan kami bisa dioptimalkan hingga 30% dengan paket dari Pendopo Tour. Kualitas tetap terjaga!",
      rating: 5,
      savings: "Hemat 2.5jt per bulan",
    },
    {
      name: "Ahmad Hidayat",
      role: "Travel Enthusiast",
      content:
        "Saya selalu mendapatkan value terbaik untuk uang yang saya keluarkan. Tidak ada yang bisa menandingi rasio harga-kualitas mereka.",
      rating: 5,
      savings: "Hemat 40% dari kompetitor",
    },
    {
      name: "Maya Putri",
      role: "Event Organizer",
      content:
        "Untuk event corporate besar, mereka memberikan harga special yang sangat kompetitif. Service excellent!",
      rating: 5,
      savings: "Hemat 1.8jt per event",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Harga Kompetitif", href: "/harga-kompetitif" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
              <DollarSign className="w-4 h-4 text-green-600 animate-pulse" />
              <span className="text-green-700 font-medium text-sm">
                Harga Kompetitif
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Value for Money Terbaik
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen memberikan solusi perjalanan terbaik dengan harga
              yang kompetitif. Budget Anda layak mendapatkan layanan premium
              tanpa kompromi.
            </p>
          </div>

          {/* Pricing Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
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
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Pilih Paket yang Sesuai Budget Anda
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card p-8 text-center relative group hover:-translate-y-2 transition-all duration-500 animate-scale-in ${
                    plan.popular ? "ring-2 ring-blue-500 shadow-2xl" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Paling Populer
                    </div>
                  )}

                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                    >
                      <DollarSign className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-left"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-xl hover:scale-105"
                        : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Penghematan Nyata dari Pelanggan Kami
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

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-4">
                    <p className="text-green-700 font-bold text-lg">
                      {testimonial.savings}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Explanation */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Mengapa Kami Bisa Memberikan Harga Kompetitif?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Efisiensi Operasional
                    </h3>
                    <p className="text-muted-foreground">
                      Sistem operasional yang efisien dan teknologi modern
                      memungkinkan kami mengoptimalkan biaya tanpa mengurangi
                      kualitas layanan kepada pelanggan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Kemitraan Strategis
                    </h3>
                    <p className="text-muted-foreground">
                      Kemitraan dengan vendor dan supplier terpercaya memberikan
                      kami harga khusus yang bisa kami bagikan kepada pelanggan
                      dalam bentuk harga kompetitif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fokus pada Value
                    </h3>
                    <p className="text-muted-foreground">
                      Kami percaya bahwa harga kompetitif harus diimbangi dengan
                      nilai yang exceptional. Setiap aspek layanan dirancang
                      untuk memberikan pengalaman terbaik.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Transparansi Harga
                    </h3>
                    <p className="text-muted-foreground">
                      Tidak ada biaya tersembunyi. Semua komponen harga
                      transparan dan dapat dikonsultasikan sebelum melakukan
                      pemesanan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Dapatkan Penawaran Harga Terbaik Hari Ini!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Konsultasikan kebutuhan perjalanan Anda dan dapatkan penawaran
                harga yang kompetitif dengan kualitas layanan terjamin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Konsultasi Gratis</span>
                </a>
                <a
                  href="/paket-wisata"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Lihat Paket Wisata</span>
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

export default HargaKompetitif;
