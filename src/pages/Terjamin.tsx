import {
  Shield,
  CheckCircle,
  Car,
  Users,
  Star,
  Award,
  Heart,
  Crown,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Terjamin = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Asuransi Comprehensive",
      description:
        "Semua kendaraan kami dilengkapi dengan asuransi comprehensive yang menjamin keselamatan dan keamanan perjalanan Anda.",
      details: [
        "Asuransi kecelakaan penumpang",
        "Asuransi kerusakan kendaraan",
        "Asuransi tanggung jawab pihak ketiga",
        "Coverage 24 jam non-stop",
      ],
    },
    {
      icon: Car,
      title: "Kendaraan Premium",
      description:
        "Armada kendaraan berkualitas tinggi dengan perawatan rutin dan standar keamanan internasional.",
      details: [
        "Kendaraan AC berpendingin optimal",
        "Sistem keamanan modern",
        "Perawatan berkala terjadwal",
        "Bahan bakar berkualitas",
      ],
    },
    {
      icon: Users,
      title: "Driver Profesional",
      description:
        "Tim driver berpengalaman dengan sertifikasi dan pelatihan berkala untuk memastikan perjalanan aman.",
      details: [
        "SIM A & B aktif",
        "Pelatihan safety driving",
        "Pengalaman minimal 5 tahun",
        "Background check lengkap",
      ],
    },
  ];

  const safetyStats = [
    {
      number: "100%",
      label: "Zero Accident Record",
      description: "Rekor keselamatan sempurna selama 10 tahun terakhir",
    },
    {
      number: "50.000+",
      label: "Perjalanan Aman",
      description: "Ribuan perjalanan berhasil dengan keselamatan terjamin",
    },
    {
      number: "98%",
      label: "Tingkat Kepuasan",
      description: "Pelanggan puas dengan standar keamanan kami",
    },
    {
      number: "24/7",
      label: "Dukungan Darurat",
      description: "Tim emergency response siap 24 jam setiap hari",
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO PT. Maju Jaya",
      content:
        "Keamanan adalah prioritas utama kami. Dengan Pendopo Tour, kami tidak pernah khawatir tentang keselamatan karyawan saat perjalanan dinas.",
      rating: 5,
      trip: "Perjalanan dinas rutin",
    },
    {
      name: "Maya Sari",
      role: "Ibu Rumah Tangga",
      content:
        "Saya merasa sangat aman membawa anak-anak jalan-jalan dengan mobil dari Pendopo Tour. Driver-nya sangat hati-hati dan profesional.",
      rating: 5,
      trip: "Liburan keluarga",
    },
    {
      name: "Dr. Ahmad Rahman",
      role: "Dokter Spesialis",
      content:
        "Untuk perjalanan emergency medis, kecepatan dan keselamatan adalah kunci. Pendopo Tour selalu memberikan yang terbaik.",
      rating: 5,
      trip: "Perjalanan medis",
    },
  ];

  const emergencyFeatures = [
    {
      icon: "🚨",
      title: "Emergency Response",
      description: "Tim emergency siap membantu dalam situasi darurat 24/7",
    },
    {
      icon: "📞",
      title: "Hotline Darurat",
      description: "Nomor emergency yang dapat dihubungi kapan saja",
    },
    {
      icon: "🛠️",
      title: "Bantuan Teknis",
      description: "Teknisi siap membantu jika terjadi masalah kendaraan",
    },
    {
      icon: "🏥",
      title: "Koordinasi Medis",
      description: "Koordinasi dengan rumah sakit terdekat jika diperlukan",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Terjamin", href: "/terjamin" },
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
              <Shield className="w-4 h-4 text-green-600 animate-pulse" />
              <span className="text-green-700 font-medium text-sm">
                Terjamin
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Keselamatan Anda Prioritas Kami
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dengan standar keamanan tertinggi dan armada kendaraan premium,
              kami menjamin setiap perjalanan Anda berjalan aman dan nyaman.
            </p>
          </div>

          {/* Safety Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {safetyStats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
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

          {/* Safety Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {safetyFeatures.map((feature, index) => {
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

          {/* Emergency Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Layanan Darurat 24/7
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Pengalaman Keselamatan Pelanggan Kami
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
                    <p className="text-sm text-green-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Standards */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Standar Keamanan Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Inspeksi Harian
                    </h3>
                    <p className="text-muted-foreground">
                      Setiap kendaraan menjalani inspeksi menyeluruh sebelum
                      digunakan untuk memastikan kondisi prima dan siap
                      perjalanan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sertifikasi Internasional
                    </h3>
                    <p className="text-muted-foreground">
                      Standar keamanan kami mengikuti sertifikasi internasional
                      dan regulasi pemerintah Indonesia untuk transportasi.
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
                      Fokus pada Keselamatan
                    </h3>
                    <p className="text-muted-foreground">
                      Keselamatan penumpang adalah prioritas utama kami. Setiap
                      aspek perjalanan dirancang dengan mempertimbangkan faktor
                      keamanan maksimal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Proteksi Lengkap
                    </h3>
                    <p className="text-muted-foreground">
                      Dari asuransi hingga protokol emergency, kami menyediakan
                      proteksi lengkap untuk memberikan ketenangan pikiran
                      selama perjalanan.
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
                Rasakan Keselamatan Terjamin Bersama Kami
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pilih Pendopo Tour untuk perjalanan yang tidak hanya nyaman,
                tetapi juga aman dan terjamin. Keselamatan Anda adalah komitmen
                kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Konsultasi Sekarang</span>
                </a>
                <a
                  href="/armada"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Lihat Armada Kami</span>
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

export default Terjamin;
