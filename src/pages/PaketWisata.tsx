import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import {
  oneDayPackages,
  twoDayPackages,
  threeDayPackages,
  companyPackages,
} from "@/lib/packages";
import { PackageCard } from "@/components/PackageCard"; // Import the refactored component

const allPackageGroups = [
  { title: "1 Hari", packages: oneDayPackages },
  { title: "2 Hari 1 Malam", packages: twoDayPackages },
  { title: "3 Hari 2 Malam", packages: threeDayPackages },
  { title: "Company Outing", packages: companyPackages },
];

const PaketWisata = () => {
  const whatsappNumber = "6281378641157";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Paket Wisata Yogyakarta - Pendopo Trans Nusantara",
    description:
      "Temukan paket wisata impian Anda di Yogyakarta dengan Pendopo Trans Nusantara. Paket tour 1 hari, 2 hari, 3 hari, dan company outing tersedia.",
    url: "https://pendopotrans.com/paket-wisata",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
    },
    mainEntity: {
      "@type": "TouristTrip",
      name: "Paket Wisata Yogyakarta",
      description:
        "Paket wisata lengkap di Yogyakarta dengan transportasi dan guide profesional",
      provider: {
        "@type": "Organization",
        name: "Pendopo Trans Nusantara",
      },
    },
  };

  const breadcrumbItems = [{ label: "Paket Wisata" }];

  return (
    <div className="bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landscape Yogyakarta"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
              Temukan Paket Wisata Impian Anda
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Jelajahi keindahan Yogyakarta dengan pilihan paket terbaik yang
              kami sediakan. Praktis, terpercaya, dan penuh kenangan.
            </p>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <a
                  href="#packages"
                  className="flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Lihat Paket
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <a
                  href="/sewa-mobil"
                  className="flex items-center justify-center gap-2"
                >
                  Sewa Mobil
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <a
                  href="/blog"
                  className="flex items-center justify-center gap-2"
                >
                  Info Wisata
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Packages Section with Tabs */}
        <section id="packages" className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
                Pilihan Paket Wisata
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Kami menawarkan berbagai paket wisata yang dapat disesuaikan
                dengan kebutuhan Anda.
                <a
                  href="/about"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  {" "}
                  Pelajari lebih lanjut tentang layanan kami
                </a>
                .
              </p>
            </div>

            <Tabs defaultValue={allPackageGroups[0].title} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 md:mb-12 bg-gray-200 h-auto p-1">
                {allPackageGroups.map((group) => (
                  <TabsTrigger
                    key={group.title}
                    value={group.title}
                    className="text-xs sm:text-sm md:text-base px-2 py-2 md:px-4 md:py-3"
                  >
                    {group.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {allPackageGroups.map((group) => (
                <TabsContent key={group.title} value={group.title}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {group.packages.map((pkg, index) => (
                      <PackageCard
                        key={index}
                        pkg={pkg}
                        whatsappNumber={whatsappNumber}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-4">
              Mengapa Memilih Pendopo Trans?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div
                className="text-center group cursor-pointer p-4 md:p-6"
                onClick={() => window.open("/about", "_self")}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Guide Berpengalaman
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Tour guide profesional yang ahli di bidangnya
                </p>
              </div>
              <div
                className="text-center group cursor-pointer p-4 md:p-6"
                onClick={() => window.open("/sewa-mobil", "_self")}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Transportasi Tepat Waktu
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Armada lengkap dengan supir berpengalaman
                </p>
              </div>
              <div
                className="text-center group cursor-pointer p-4 md:p-6"
                onClick={() =>
                  window.open("https://wa.me/" + whatsappNumber, "_blank")
                }
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Custom Itinerary
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Rencana perjalanan sesuai keinginan Anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 px-4">
              Tidak Menemukan Paket yang Sesuai?
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 mb-6 md:mb-8 px-4">
              Tim kami siap membantu merancang itinerary custom sesuai keinginan
              Anda. Hubungi kami untuk konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                asChild
                className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin konsultasi paket tour custom`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Konsultasi via WhatsApp{" "}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Hubungi Kami
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent
          title="Eksplorasi Lebih Lanjut"
          items={[
            {
              title: "Sewa Mobil Yogyakarta",
              description:
                "Temukan berbagai pilihan mobil sewa dengan supir untuk perjalanan Anda di Yogyakarta.",
              href: "/sewa-mobil",
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

export default PaketWisata;
