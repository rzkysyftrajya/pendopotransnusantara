import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Clock,
  Users,
  Settings,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { cars } from "@/lib/cars";

const SewaMobil = () => {
  const whatsappNumber = "6281378641157";

  const breadcrumbItems = [{ label: "Sewa Mobil" }];

  return (
    <div className="bg-gray-50">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-section-sewa-mobil.webp"
              alt="Car rental in Yogyakarta"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Sewa Mobil Yogyakarta Terbaik
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Armada lengkap dengan supir profesional. Harga terjangkau, mobil
              terawat, dan pelayanan prima untuk perjalanan Anda di Jogja.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin informasi sewa mobil di Jogja`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Cars Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pilihan Mobil Sewa
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Semua mobil dalam kondisi prima dengan supir berpengalaman dan
                berlisensi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {car.capacity} Orang
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500">Mulai dari</p>
                      <p className="text-3xl font-bold text-red-600">
                        Rp {car.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        Mobil Dengan Supir + Bensin
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span>
                          Durasi Pemakaian {car.duration || "15 Jam"} (max{" "}
                          {car.maxTime || "22.30"})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-red-500" />
                        <span>Kapasitas {car.capacity} Orang</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Settings className="w-4 h-4 text-red-500" />
                        <span>Transmisi {car.transmission || "Matic"}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-gray-600">
                        Harga Sewa Tidak Termasuk Parkir, Tol, Tiket Masuk
                        Tempat Wisata
                      </p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
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
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aman & Terpercaya</h3>
                <p className="text-muted-foreground">
                  Semua mobil dilengkapi asuransi comprehensive dan supir
                  berpengalaman.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kualitas Terbaik</h3>
                <p className="text-muted-foreground">
                  Armada mobil terbaru dan terawat dengan AC yang dingin dan
                  nyaman.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pelayanan Cepat</h3>
                <p className="text-muted-foreground">
                  Responsif dan siap melayani kebutuhan rental mobil Anda kapan
                  saja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Syarat & Ketentuan
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">
                    Harga Sewa Sudah Termasuk:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sopir profesional dan berpengalaman</li>
                    <li>• BBM (Bahan Bakar Minyak)</li>
                    <li>• Asuransi comprehensive</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">
                    Harga Sewa Belum Termasuk:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Parkir dan tol</li>
                    <li>• Tiket masuk destinasi wisata</li>
                    <li>• Makan dan pengeluaran pribadi</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Harga sewa mobil juga bisa lebih
                  mahal jika lokasi tujuan yang Anda inginkan melebihi dari
                  batas normal. Anda bisa langsung menghubungi team Pendopo
                  Trans Nusantara untuk perkiraan harga yang lebih tepat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap untuk Petualangan Anda?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk reservasi mobil sewa terbaik di
              Yogyakarta.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin reservasi mobil sewa`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Reservasi Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent
          title="Eksplorasi Lebih Lanjut"
          items={[
            {
              title: "Paket Wisata Yogyakarta",
              description:
                "Temukan paket wisata lengkap untuk menjelajahi keindahan Yogyakarta.",
              href: "/paket-wisata",
              type: "internal",
            },
            {
              title: "Travel Blog",
              description:
                "Baca tips dan informasi wisata terbaru tentang destinasi menarik di Yogyakarta.",
              href: "/blog",
              type: "internal",
            },
            {
              title: "Tentang Kami",
              description:
                "Pelajari lebih lanjut tentang Pendopo Trans Nusantara dan pengalaman kami.",
              href: "/tentang",
              type: "internal",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
};

export default SewaMobil;
