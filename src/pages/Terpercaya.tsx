import {
  Shield,
  Award,
  Users,
  Star,
  CheckCircle,
  Building,
  FileText,
  Crown,
  Heart,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Terpercaya = () => {
  const trustFeatures = [
    {
      icon: Building,
      title: "Berbadan Hukum",
      description:
        "PT. Pendopo Tour & Travel adalah perusahaan yang terdaftar secara resmi dengan nomor registrasi yang sah.",
      details: [
        "Nomor Registrasi: AHU-123456789.12.3456",
        "NPWP: 01.234.567.8-901.000",
        "SIUP: 12345/1/SIUP/SPT/XII/2023",
        "TDP: 1234567890123456",
      ],
    },
    {
      icon: Award,
      title: "Sertifikasi Resmi",
      description:
        "Kami memiliki berbagai sertifikasi dan lisensi resmi dari instansi terkait di bidang pariwisata.",
      details: [
        "IATA Certified Agent",
        "ASITA Member",
        "ISO 9001:2015 Certified",
        "Pariwisata Award 2023",
      ],
    },
    {
      icon: Users,
      title: "Pengalaman Bertahun-tahun",
      description:
        "Lebih dari 10 tahun pengalaman melayani berbagai kebutuhan perjalanan dengan track record yang terbukti.",
      details: [
        "10+ Tahun Pengalaman",
        "50.000+ Pelanggan Puas",
        "1000+ Event Berhasil",
        "98% Tingkat Kepuasan",
      ],
    },
  ];

  const partners = [
    {
      name: "Kementerian Pariwisata",
      logo: "🏛️",
      description: "Mitra resmi Kementerian Pariwisata RI",
    },
    {
      name: "ASITA",
      logo: "✈️",
      description: "Anggota Asosiasi Perusahaan Perjalanan Wisata Indonesia",
    },
    {
      name: "IATA",
      logo: "🌍",
      description: "International Air Transport Association Certified",
    },
    {
      name: "Bank Mandiri",
      logo: "🏦",
      description: "Rekanan Bank Mandiri untuk pembayaran corporate",
    },
    {
      name: "Pertamina",
      logo: "⛽",
      description: "Partner resmi untuk layanan transportasi",
    },
    {
      name: "Telkomsel",
      logo: "📱",
      description: "Provider telekomunikasi untuk layanan komunikasi",
    },
  ];

  const testimonials = [
    {
      name: "Dr. H. Ahmad Sutrisno",
      role: "Bupati Kabupaten XYZ",
      content:
        "Pendopo Tour telah menjadi partner terpercaya kami untuk berbagai kegiatan resmi daerah. Profesionalisme dan integritas mereka tidak diragukan lagi.",
      rating: 5,
      company: "Pemerintah Kabupaten XYZ",
    },
    {
      name: "Hj. Siti Aminah",
      role: "CEO PT. Global Sukses",
      content:
        "Sebagai perusahaan nasional, kami memilih partner yang terpercaya. Pendopo Tour telah membuktikan kredibilitasnya selama 5 tahun terakhir.",
      rating: 5,
      company: "PT. Global Sukses",
    },
    {
      name: "Prof. Dr. Budi Santosa",
      role: "Rektor Universitas ABC",
      content:
        "Untuk kegiatan akademik dan study tour mahasiswa, kami selalu memilih Pendopo Tour karena standar keamanan dan profesionalisme yang tinggi.",
      rating: 5,
      company: "Universitas ABC",
    },
  ];

  const achievements = [
    {
      icon: Crown,
      title: "Pariwisata Award 2023",
      description: "Penghargaan sebagai perusahaan travel terbaik se-Indonesia",
    },
    {
      icon: Star,
      title: "Customer Satisfaction 98%",
      description: "Tingkat kepuasan pelanggan tertinggi di industri",
    },
    {
      icon: Shield,
      title: "Zero Accident Record",
      description: "Rekor keselamatan 100% selama 10 tahun terakhir",
    },
    {
      icon: CheckCircle,
      title: "ISO 9001:2015 Certified",
      description: "Sertifikasi sistem manajemen mutu internasional",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Terpercaya", href: "/terpercaya" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
              <Shield className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-blue-700 font-medium text-sm">
                Terpercaya
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Partner Terpercaya Anda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dengan pengalaman lebih dari 10 tahun dan kredibilitas yang
              terbukti, kami telah dipercaya oleh berbagai instansi pemerintah,
              perusahaan nasional, dan institusi pendidikan.
            </p>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Prestasi & Penghargaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Partner & Rekanan Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Testimoni dari Partner Kami
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
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Documents */}
          <div className="glass-card p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Dokumen Legal & Sertifikasi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Akta Pendirian Perusahaan
                    </h3>
                    <p className="text-muted-foreground">
                      Terdaftar di Kementerian Hukum dan HAM RI dengan nomor
                      AHU-123456789.12.3456 tanggal 15 Desember 2013.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Lisensi Usaha
                    </h3>
                    <p className="text-muted-foreground">
                      Surat Izin Usaha Perdagangan (SIUP) dan Tanda Daftar
                      Perusahaan (TDP) yang masih berlaku hingga 2028.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sertifikasi Kualitas
                    </h3>
                    <p className="text-muted-foreground">
                      ISO 9001:2015 untuk Sistem Manajemen Mutu dan berbagai
                      sertifikasi lainnya di bidang pariwisata.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Asuransi Resmi
                    </h3>
                    <p className="text-muted-foreground">
                      Asuransi tanggung jawab umum dan asuransi perjalanan yang
                      menjamin keamanan dan perlindungan bagi pelanggan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Percayakan Perjalanan Anda pada Kami
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Dengan kredibilitas dan pengalaman yang terbukti, kami siap
                memberikan layanan terbaik untuk kebutuhan perjalanan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Konsultasi Sekarang</span>
                </a>
                <a
                  href="/testimoni"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Lihat Testimoni</span>
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

export default Terpercaya;
