import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Car,
  Award,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";
import { PackageCard } from "@/components/PackageCard";
import { oneDayPackages } from "@/lib/packages";
import { cars } from "@/lib/cars";
import ExploreMore from "@/components/ExploreMore";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "Membuat cerita indah di Pantai Indrayanti",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Pantai Indrayanti? Pantai Indrayanti adalah salah satu pantai populer di Gunungkidul, Yogyakarta, yang dikenal dengan keindahan pasir putih bersih dan panorama laut biru...",
    image: "/blog/membuat-cerita-indah-di-pantai.png",
    externalLink: "https://pendopotour.com/pantai-indrayanti/",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "paket wisata", href: "/paket-wisata" },
    ],
  },
  {
    title: "Jurang Kanigoro: Kehidupan diatas awan",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Jurang Kanigoro? Jurang Kanigoro, yang lebih dikenal dengan nama Jurang Tembelan, adalah destinasi wisata alam berupa jurang dan tebing indah yang terletak di...",
    image: "/blog/jurang.png",
    externalLink:
      "https://pendopotour.com/jurang-kanigoro-kekidupan-diatas-awan/",
    internalLinks: [
      { text: "paket wisata", href: "/paket-wisata" },
      { text: "tentang kami", href: "/about" },
    ],
  },
  {
    title: "Air alam Sungai Mudal",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Sungai Mudal adalah sebuah destinasi ekowisata yang terletak di Dusun Banyunganti, Desa Jatimulyo, Kecamatan Girimulyo, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta. Sungai ini terkenal dengan...",
    image: "/blog/air-alam-sungai-mudal.png",
    externalLink: "https://pendopotour.com/sungai-mudal/",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "FAQ", href: "/faq" },
    ],
  },
];

const Home = () => {
  const featuredPackages = oneDayPackages.filter((p) => p.featured);
  const featuredCars = cars.slice(0, 4);
  const whatsappNumber = "6281378641157";

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] text-white overflow-hidden">
        {/* Enhanced background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent z-10"></div>

        <img
          src="/hero-section-home.svg"
          alt="Hero Section Home"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />



        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-center md:text-left">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-gradient shadow-text">
              Jelajahi Yogyakarta, <br />
              <span className="text-white">Senyaman di Rumah Sendiri</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto md:mx-0 mb-10 leading-relaxed font-light animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Solusi rental mobil dan paket wisata terbaik di Jogja. Nikmati
              perjalanan tak terlupakan dengan layanan profesional dan harga
              terjangkau.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="btn-primary hover-lift">
                <Link to="/paket-wisata" className="flex items-center gap-2">
                  <span>Lihat Paket Wisata</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-secondary glass hover-glow"
              >
                <Link to="/sewa-mobil" className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Pilihan Mobil</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-20 md:py-28 gradient-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Paket Wisata Populer
            </h2>
            <p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Pilihan terbaik untuk memulai petualangan Anda di Yogyakarta.
              Setiap paket dirancang untuk memberikan pengalaman yang tak
              terlupakan.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="hover-lift animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <PackageCard
                  pkg={pkg}
                  whatsappNumber={whatsappNumber}
                  hidePrice={pkg.hidePrice}
                />
              </div>
            ))}
          </div>
          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary hover-lift"
            >
              <Link to="/paket-wisata" className="flex items-center gap-2">
                <span>Lihat Semua Paket</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Kami memberikan lebih dari sekedar transportasi. Setiap perjalanan
              bersama kami adalah pengalaman yang penuh kenangan.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce-in">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Berpengalaman
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tim profesional dan driver kami memiliki pengalaman
                bertahun-tahun di industri pariwisata Jogja dengan rating
                kepuasan pelanggan 4.8/5.
              </p>
            </div>
            <div
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Armada Terbaik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kami menyediakan mobil-mobil keluaran terbaru yang bersih,
                terawat, dan selalu dalam kondisi prima dengan AC yang dingin
                dan nyaman.
              </p>
            </div>
            <div
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
              >
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Aman & Terpercaya
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keamanan dan kenyamanan Anda adalah prioritas utama kami selama
                perjalanan dengan asuransi comprehensive dan driver berlisensi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section - More Prominent */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Sewa Mobil Terbaik di Jogja
            </h2>
            <p
              className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Anda tinggal duduk manis dan menikmati perjalanan Anda dengan
              nyaman. Mobil Terbaru, Cek Harga Sewa Mobil di Jogja Dengan
              Driver. Dijamin Nyaman Liburan Bersama Kami
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="btn-primary hover-lift">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin informasi sewa mobil di Jogja`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Hubungi Kami</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>

          {/* Car Cards Grid - More Detailed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Car Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce-in">
                    {car.capacity} Orang
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in">
                    {car.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Mulai dari</p>
                    <p
                      className="text-3xl font-bold text-gradient animate-fade-in"
                      style={{ animationDelay: "0.1s" }}
                    >
                      Rp {car.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Mobil Dengan Supir + Bensin
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>
                        Durasi Pemakaian {car.duration || "15 Jam"} (max{" "}
                        {car.maxTime || "22.30"})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Overtime 10% Dari Tarif Per Jam</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Kapasitas {car.capacity} Orang</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Transmisi {car.transmission || "Matic"}</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div
                    className="bg-gray-50 p-3 rounded-lg mb-4 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <p className="text-xs text-gray-600">
                      Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk Tempat
                      Wisata
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div
                    className="flex gap-2 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Button asChild className="flex-1 btn-primary hover-lift">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin sewa ${car.name} untuk tanggal...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Sewa Sekarang</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 btn-secondary hover-lift"
                    >
                      <Link
                        to="/sewa-mobil"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Lihat Detail Harga</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terms and Conditions */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 animate-slide-in-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              SYARAT & KETENTUAN
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">
                  Harga Sewa Sudah Termasuk:
                </h4>
                <ul className="space-y-1">
                  <li>• Sopir profesional dan berpengalaman</li>
                  <li>• BBM (Bahan Bakar Minyak)</li>
                  <li>• Asuransi comprehensive</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">
                  Harga Sewa Belum Termasuk:
                </h4>
                <ul className="space-y-1">
                  <li>• Parkir dan tol</li>
                  <li>• Tiket masuk destinasi wisata</li>
                  <li>• Makan dan pengeluaran pribadi</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Catatan:</strong> Harga sewa mobil juga bisa lebih mahal
                jika lokasi tujuan yang Anda inginkan melebihi dari batas
                normal. Anda bisa langsung menghubungi team Pendopo Trans
                Nusantara untuk perkiraan harga yang lebih tepat.
              </p>
            </div>
          </div>

          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary hover-lift"
            >
              <Link to="/sewa-mobil" className="flex items-center gap-2">
                <span>Lihat Semua Armada</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />



      {/* Blog Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Travel Blog & Inspirasi
            </h2>
            <p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Temukan cerita perjalanan, tips wisata, dan inspirasi destinasi
              menarik di Yogyakarta.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={post.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Internal Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.internalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-red-600 hover:text-red-700 text-sm font-medium underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>

                  {/* External Link Button */}
                  <a
                    href={post.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary hover-lift"
            >
              <Link to="/blog" className="flex items-center gap-2">
                <span>Lihat Semua Artikel</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Destinasi Populer di Yogyakarta
            </h2>
            <p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Temukan tempat-tempat menarik yang wajib dikunjungi saat berlibur
              di Yogyakarta
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://id.wikipedia.org/wiki/Borobudur"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/home/borobudur.webp"
                  alt="Candi Borobudur"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Borobudur</h3>
                  <p className="text-sm opacity-90">Candi Terbesar di Dunia</p>
                </div>
              </div>
            </a>
            <a
              href="https://id.wikipedia.org/wiki/Candi_Prambanan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/home/prambanan.webp"
                  alt="Candi Prambanan"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Prambanan</h3>
                  <p className="text-sm opacity-90">
                    Keindahan Arsitektur Hindu
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://id.wikipedia.org/wiki/Parangtritis,_Kretek,_Bantul"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="home/parangtritis.webp"
                  alt="Pantai Parangtritis"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Parangtritis</h3>
                  <p className="text-sm opacity-90">Pantai Legendaris</p>
                </div>
              </div>
            </a>
            <a
              href="https://id.wikipedia.org/wiki/Gunung_Merapi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/home/merapi.webp"
                  alt="Gunung Merapi"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Merapi</h3>
                  <p className="text-sm opacity-90">Gunung Berapi Aktif</p>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Ingin tahu lebih banyak destinasi menarik di Yogyakarta?
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-secondary hover-lift"
            >
              <Link to="/blog" className="flex items-center gap-2">
                <span>Baca Blog Kami</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <ExploreMore />

      {/* Social Media & Partners */}
      <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ikuti Kami di Media Sosial
            </h2>
            <p
              className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Dapatkan update terbaru, tips wisata, dan inspirasi perjalanan
              langsung dari kami
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a
              href="https://www.instagram.com/pendopotour/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">@pendopotour</h3>
              <p className="text-gray-200">
                Tips wisata, foto keindahan Jogja, dan info paket tour terbaru
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@pendopotour"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-black to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">@pendopotour</h3>
              <p className="text-gray-200">
                Video singkat wisata Jogja, behind the scene, dan konten menarik
                lainnya
              </p>
            </a>
            <a
              href="https://www.youtube.com/@pendopotour"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pendopo Tour</h3>
              <p className="text-gray-200">
                Vlog wisata lengkap, review destinasi, dan tutorial perjalanan
              </p>
            </a>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Home;
