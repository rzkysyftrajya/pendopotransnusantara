import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Building,
  Award,
  Users,
  Clock,
  Shield,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Team from "@/components/Team";

const About = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang Kami - Pendopo Trans Nusantara",
    description:
      "Pelajari tentang Pendopo Trans Nusantara, perusahaan transportasi dan pariwisata terpercaya di Yogyakarta sejak 2016.",
    url: "https://pendopotrans.com/about",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
      foundingDate: "2016",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Perumnas, Dabag, Condongcatur",
        addressLocality: "Depok",
        addressRegion: "Sleman",
        postalCode: "55281",
        addressCountry: "ID",
      },
    },
  };

  const relatedContentItems = [
    {
      title: "Paket Wisata Yogyakarta",
      description:
        "Jelajahi berbagai paket wisata menarik yang kami tawarkan untuk pengalaman liburan yang tak terlupakan.",
      href: "/paket-wisata",
      type: "internal" as const,
    },
    {
      title: "Sewa Mobil Yogyakarta",
      description:
        "Sewa mobil dengan supir profesional untuk kebutuhan transportasi Anda di Yogyakarta.",
      href: "/sewa-mobil",
      type: "internal" as const,
    },
    {
      title: "Info Wisata Yogyakarta",
      description:
        "Baca artikel menarik tentang destinasi wisata dan tips traveling di Yogyakarta.",
      href: "/blog",
      type: "internal" as const,
    },
    {
      title: "Kemenkumham RI",
      description:
        "Informasi resmi tentang Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia.",
      href: "https://www.kemenkumham.go.id",
      type: "external" as const,
    },
    {
      title: "OSS Kemenkumham",
      description:
        "Sistem Online Single Submission untuk perizinan berusaha di Indonesia.",
      href: "https://oss.kemenkumham.go.id",
      type: "external" as const,
    },
    {
      title: "Direktorat Jenderal Pajak",
      description: "Informasi resmi tentang perpajakan dan NPWP di Indonesia.",
      href: "https://www.pajak.go.id",
      type: "external" as const,
    },
  ];

  const breadcrumbItems = [{ label: "Tentang Kami" }];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl max-w-3xl">
            Menghubungkan Nusantara, Menginspirasi Perjalanan
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Pendopo Trans Nusantara bergerak dalam jasa perjalanan wisata
              serta penyedia transportasi yang berlokasi di Yogyakarta sejak
              2016.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Kami siap membantu semua kebutuhan Kamu sesuai dengan budget yang
              Kamu miliki tanpa mengurangi fasilitas dan kenyamanan yang Kamu
              inginkan. Kami hadir untuk memberikan pelayanan terbaik agar
              liburan Kamu menjadi lebih seru dan berkesan bersama Pendopo Trans
              Nusantara.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Pendopo Trans Nusantara menyediakan berbagai macam paket wisata
              untuk segala kebutuhan liburanmu. Paket yang kami tawarkan yaitu:
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="/paket-wisata"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                Paket Wisata
              </a>
              <a
                href="/sewa-mobil"
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2"
              >
                Sewa Mobil
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/blog"
                className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2"
              >
                Info Wisata
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Wisata</h3>
                <p className="text-sm text-muted-foreground">
                  Berbagai paket wisata menarik di Yogyakarta
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Custom Tour</h3>
                <p className="text-sm text-muted-foreground">
                  Tur sesuai keinginan dan kebutuhan Anda
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Honeymoon</h3>
                <p className="text-sm text-muted-foreground">
                  Paket romantis untuk pasangan
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Gathering</h3>
                <p className="text-sm text-muted-foreground">
                  Paket untuk acara gathering dan outing
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/sewa-mobil", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Sewa Mobil</h3>
                <p className="text-sm text-muted-foreground">
                  Sewa mobil dengan supir profesional
                </p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => window.open("/sewa-mobil", "_self")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Sewa Mobil dan Bus</h3>
                <p className="text-sm text-muted-foreground">
                  Sewa bus untuk kelompok besar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih Pendopo Trans?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open("/paket-wisata", "_self")}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pengalaman 8+ Tahun</h3>
              <p className="text-muted-foreground">
                Berpengalaman sejak 2016 dalam melayani wisatawan
              </p>
            </div>
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open("/sewa-mobil", "_self")}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Armada Terawat</h3>
              <p className="text-muted-foreground">
                Unit kendaraan yang selalu dalam kondisi prima
              </p>
            </div>
            <div
              className="text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.open("/contact", "_self")}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Layanan 24/7</h3>
              <p className="text-muted-foreground">
                Customer service siap membantu kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi perusahaan transportasi dan pariwisata terdepan di
                Yogyakarta yang dikenal karena pelayanan prima, inovasi, dan
                kontribusi positif terhadap pariwisata lokal.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Memberikan layanan transportasi yang aman, nyaman, dan tepat
                    waktu.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Menyediakan paket wisata yang menarik, berkesan, dan sesuai
                    dengan kebutuhan pelanggan.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Mengembangkan tim yang profesional, solid, dan berorientasi
                    pada kepuasan pelanggan.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Team />

      {/* Legalitas Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Legalitas Kami
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Berikut Legalitas Dari CV. Pendopo Trans Nusantara
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">SK KEMENKUMHAM</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  AHU-0041967.AH.01.01 TAHUN 2023
                </p>
                <a
                  href="https://www.kemenkumham.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:translate-x-1 transition-transform"
                >
                  Verifikasi
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Building className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Nomor Induk Berusaha (NIB)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  1306230071731
                </p>
                <a
                  href="https://oss.kemenkumham.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:translate-x-1 transition-transform"
                >
                  Cek Status
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">NPWP</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  39.233.327.4-543.000
                </p>
                <a
                  href="https://www.pajak.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:translate-x-1 transition-transform"
                >
                  Info Pajak
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Pelajari Lebih Lanjut"
        items={relatedContentItems}
      />

      <Footer />
    </div>
  );
};

export default About;
