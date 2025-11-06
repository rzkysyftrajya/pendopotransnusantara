import {
  Users,
  Award,
  Star,
  Trophy,
  Calendar,
  MapPin,
  Heart,
  Crown,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

const Berpengalaman = () => {
  const experienceStats = [
    {
      number: "10+",
      label: "Tahun Pengalaman",
      description: "Beroperasi sejak 2013 dengan track record yang terbukti",
    },
    {
      number: "50.000+",
      label: "Pelanggan Puas",
      description: "Ribuan pelanggan telah mempercayai layanan kami",
    },
    {
      number: "4.8/5",
      label: "Rating Kepuasan",
      description: "Rating tertinggi dari pelanggan di platform review",
    },
    {
      number: "1000+",
      label: "Event Berhasil",
      description: "Berhasil menyelenggarakan berbagai acara dan perjalanan",
    },
  ];

  const teamMembers = [
    {
      name: "Ahmad Sutrisno",
      role: "Founder & CEO",
      experience: "15 tahun di industri pariwisata",
      specialization: "Manajemen Operasional & Customer Experience",
      image: "👨‍💼",
    },
    {
      name: "Siti Nurhaliza",
      role: "Operations Manager",
      experience: "12 tahun di travel management",
      specialization: "Logistik & Koordinasi Event",
      image: "👩‍💼",
    },
    {
      name: "Budi Santoso",
      role: "Fleet Manager",
      experience: "10 tahun di automotive industry",
      specialization: "Maintenance & Vehicle Management",
      image: "👨‍🔧",
    },
    {
      name: "Maya Sari",
      role: "Customer Service Lead",
      experience: "8 tahun di hospitality",
      specialization: "Customer Care & Support",
      image: "👩‍💻",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Pariwisata Award 2023",
      description: "Penghargaan sebagai perusahaan travel terbaik se-Indonesia",
    },
    {
      icon: Star,
      title: "Google Reviews 4.8/5",
      description: "Rating tertinggi dari ribuan ulasan pelanggan",
    },
    {
      icon: Award,
      title: "ASITA Member",
      description:
        "Anggota aktif Asosiasi Perusahaan Perjalanan Wisata Indonesia",
    },
    {
      icon: Heart,
      title: "Customer Choice 2023",
      description: "Terpilih sebagai pilihan pelanggan untuk layanan travel",
    },
  ];

  const testimonials = [
    {
      name: "Dr. H. Ahmad Rahman",
      role: "Rektor Universitas ABC",
      content:
        "Pendopo Tour telah menjadi partner utama kami untuk kegiatan akademik mahasiswa. Pengalaman mereka dalam menangani group besar sangat luar biasa.",
      rating: 5,
      company: "Universitas ABC",
    },
    {
      name: "Hj. Siti Aminah",
      role: "CEO PT. Global Sukses",
      content:
        "Sebagai perusahaan nasional, kami membutuhkan partner yang benar-benar berpengalaman. Pendopo Tour telah membuktikan kredibilitasnya selama bertahun-tahun.",
      rating: 5,
      company: "PT. Global Sukses",
    },
    {
      name: "Drs. Budi Santosa, M.Pd",
      role: "Kepala Dinas Pendidikan",
      content:
        "Untuk study tour siswa, pengalaman dan profesionalisme adalah kunci. Tim Pendopo Tour sangat memahami kebutuhan pendidikan.",
      rating: 5,
      company: "Dinas Pendidikan Kabupaten XYZ",
    },
  ];

  const services = [
    {
      icon: "🎓",
      title: "Study Tour & Edukasi",
      description:
        "Pengalaman 8 tahun menangani program edukasi dan study tour untuk sekolah dan universitas",
    },
    {
      icon: "🏢",
      title: "Corporate Travel",
      description:
        "Lebih dari 500 perusahaan telah mempercayai kami untuk kebutuhan perjalanan bisnis",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Vacation",
      description:
        "Ribuan keluarga telah merasakan pengalaman liburan yang memorable bersama kami",
    },
    {
      icon: "🎪",
      title: "Event & Gathering",
      description:
        "Berpengalaman menangani berbagai event mulai dari gathering hingga acara besar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Berpengalaman", href: "/berpengalaman" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-purple-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
              <Users className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-purple-700 font-medium text-sm">
                Berpengalaman
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Tim Profesional & Berpengalaman
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dengan pengalaman lebih dari 10 tahun di industri pariwisata
              Jogja, tim kami yang profesional siap memberikan pelayanan terbaik
              untuk setiap perjalanan Anda.
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {experienceStats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
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

          {/* Team Members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Tim Profesional Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-5xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.experience}
                  </p>
                  <p className="text-xs text-gray-600">
                    {member.specialization}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Prestasi & Pengakuan
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mb-4">
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

          {/* Services Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Pengalaman Layanan Kami
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
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
                    <p className="text-sm text-purple-600 font-medium">
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Percayakan Perjalanan Anda pada Tim Berpengalaman
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Dengan tim profesional dan pengalaman bertahun-tahun, kami siap
                memberikan pelayanan terbaik untuk kebutuhan perjalanan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Konsultasi Sekarang</span>
                </a>
                <a
                  href="/tentang"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Tentang Kami</span>
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

export default Berpengalaman;
