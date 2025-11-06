import {
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
  Heart,
  Shield,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const KualitasLayanan = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Tim kami siap melayani Anda kapan saja, baik siang maupun malam. Kami memahami bahwa perjalanan tidak mengenal waktu, sehingga dukungan kami selalu tersedia.",
      details: [
        "Respon cepat dalam 5-15 menit",
        "Dukungan multi-channel (telepon, WhatsApp, email)",
        "Emergency assistance 24 jam",
        "Koordinasi real-time dengan driver",
      ],
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Tim profesional kami terdiri dari para ahli di bidangnya masing-masing, mulai dari tour guide berpengalaman hingga driver yang handal.",
      details: [
        "Tour guide bersertifikat",
        "Driver berpengalaman minimal 5 tahun",
        "Customer service terlatih",
        "Koordinator lapangan profesional",
      ],
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Setiap aspek layanan kami melalui proses quality control yang ketat untuk memastikan kepuasan pelanggan maksimal.",
      details: [
        "Standar operasional prosedur (SOP) yang jelas",
        "Evaluasi kinerja berkala",
        "Feedback system dari pelanggan",
        "Continuous improvement program",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO PT. Maju Jaya",
      content:
        "Layanan 24/7 dari Pendopo Tour sangat membantu bisnis kami. Ketika ada keadaan darurat, tim mereka selalu siap membantu.",
      rating: 5,
    },
    {
      name: "Sari Indah",
      role: "Travel Blogger",
      content:
        "Tour guide mereka sangat profesional dan berpengetahuan luas. Mereka membuat perjalanan saya menjadi unforgettable.",
      rating: 5,
    },
    {
      name: "Ahmad Rahman",
      role: "Corporate Client",
      content:
        "Quality assurance mereka terlihat dari detail perencanaan hingga eksekusi. Tidak pernah ada kesalahan dalam pelayanan.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Kualitas Layanan", href: "/kualitas-layanan" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-yellow-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
              <Award className="w-4 h-4 text-yellow-600 animate-pulse" />
              <span className="text-yellow-700 font-medium text-sm">
                Kualitas Layanan
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Komitmen Kualitas Terbaik
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen memberikan layanan berkualitas tinggi dengan
              standar profesionalisme yang tinggi. Setiap detail perjalanan Anda
              diperhatikan dengan seksama untuk menciptakan pengalaman yang tak
              terlupakan.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
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
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Explanation */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
              Mengapa Kualitas Layanan Kami Unggul?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Standar Profesionalisme Tinggi
                    </h3>
                    <p className="text-muted-foreground">
                      Semua staf kami melalui pelatihan intensif dan memiliki
                      sertifikasi yang diakui industri pariwisata. Kami
                      mengikuti standar internasional dalam memberikan layanan
                      kepada pelanggan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Responsivitas Maksimal
                    </h3>
                    <p className="text-muted-foreground">
                      Sistem komunikasi kami dirancang untuk memberikan respon
                      cepat dan akurat. Setiap inquiry akan ditangani dalam
                      waktu maksimal 2 jam kerja.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fokus pada Kepuasan Pelanggan
                    </h3>
                    <p className="text-muted-foreground">
                      Kepuasan pelanggan adalah prioritas utama kami. Setiap
                      feedback digunakan untuk meningkatkan kualitas layanan
                      secara berkelanjutan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Inovasi Berkelanjutan
                    </h3>
                    <p className="text-muted-foreground">
                      Kami terus berinovasi dengan teknologi terbaru dan tren
                      terkini dalam industri pariwisata untuk memberikan
                      pengalaman terbaik kepada pelanggan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
              Apa Kata Pelanggan Kami
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Siap Merasakan Layanan Berkualitas Kami?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Hubungi kami sekarang dan rasakan sendiri komitmen kualitas
                layanan yang membuat ribuan pelanggan puas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Hubungi WhatsApp</span>
                </a>
                <a
                  href="/paket-wisata"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
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

export default KualitasLayanan;
