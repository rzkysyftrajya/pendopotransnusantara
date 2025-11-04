import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Hubungi Kami - Pendopo Trans Nusantara",
    description:
      "Hubungi Pendopo Trans Nusantara untuk konsultasi paket wisata, sewa mobil, dan informasi layanan transportasi di Yogyakarta.",
    url: "https://pendopotrans.com/contact",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-813-7864-1157",
        contactType: "Customer Service",
        availableLanguage: "Indonesian",
      },
    },
    mainEntity: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Perumnas, Dabag, Condongcatur",
        addressLocality: "Depok",
        addressRegion: "Sleman",
        postalCode: "55281",
        addressCountry: "ID",
      },
      telephone: "+62-813-7864-1157",
      email: "pendopotrans@gmail.com",
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
      title: "WhatsApp Business",
      description:
        "Hubungi kami langsung via WhatsApp untuk respon cepat dan konsultasi paket wisata.",
      href: "https://wa.me/6281378641157",
      type: "external" as const,
    },
    {
      title: "Google Maps",
      description:
        "Temukan lokasi kantor kami di Yogyakarta menggunakan Google Maps.",
      href: "https://maps.google.com/?q=Jl.+Perumnas,+Dabag,+Condongcatur,+Depok,+Sleman,+Yogyakarta",
      type: "external" as const,
    },
    {
      title: "Tentang Kami",
      description:
        "Pelajari lebih lanjut tentang Pendopo Trans Nusantara dan komitmen kami dalam melayani pelanggan.",
      href: "/about",
      type: "internal" as const,
    },
  ];

  const breadcrumbItems = [{ label: "Hubungi Kami" }];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl">
            Kami siap membantu Anda dengan segala pertanyaan dan kebutuhan
            perjalanan Anda
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informasi Kontak</h2>

              <div className="space-y-6 mb-8">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Telepon / WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">081342222747</p>
                      <p className="text-muted-foreground mb-2">082222208747</p>
                      <a
                        href="https://wa.me/6281342222747"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat WhatsApp
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2">
                        pendopotrans@gmail.com
                      </p>
                      <a
                        href="mailto:pendopotrans@gmail.com"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        Kirim Email
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Alamat</h3>
                      <p className="text-muted-foreground mb-2">
                        Jl. Perumnas, Dabag, Condongcatur
                        <br />
                        Kec. Depok, Kabupaten Sleman
                        <br />
                        Daerah Istimewa Yogyakarta 55281
                      </p>
                      <a
                        href="https://maps.google.com/?q=Jl.+Perumnas,+Dabag,+Condongcatur,+Depok,+Sleman,+Yogyakarta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        Lihat di Google Maps
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Jam Operasional</h3>
                      <p className="text-muted-foreground">
                        Senin - Minggu: 07:00 - 21:00 WIB
                        <br />
                        Customer Service 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick WhatsApp */}
              <Card className="bg-gradient-to-r from-red-600 to-accent text-white hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Butuh Bantuan Segera?
                  </h3>
                  <p className="mb-6">
                    Hubungi kami via WhatsApp untuk respon cepat
                  </p>
                  <a
                    href="https://wa.me/6281378641157?text=Halo%20Pendopo%20Trans,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full hover:scale-105 transition-transform"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Chat WhatsApp Sekarang
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-muted-foreground">
                    Isi form di bawah ini dan kami akan segera menghubungi Anda
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <Input placeholder="Masukkan nama Anda" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nomor Telepon
                      </label>
                      <Input type="tel" placeholder="+62 812-3456-7890" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Layanan yang Diminati
                      </label>
                      <select className="w-full px-4 py-2 rounded-md border border-input bg-background hover:border-red-300 transition-colors">
                        <option>Pilih Layanan</option>
                        <option>Rental Mobil Harian</option>
                        <option>Paket Wisata</option>
                        <option>Airport Transfer</option>
                        <option>Wedding Car</option>
                        <option>Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Pesan
                      </label>
                      <Textarea
                        placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 hover:scale-105 transition-all"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
          <p className="text-center text-muted-foreground mb-8">
            Kunjungi kantor kami atau
            <a
              href="https://maps.google.com/?q=Jl.+Perumnas,+Dabag,+Condongcatur,+Depok,+Sleman,+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              {" "}
              lihat di Google Maps
            </a>
          </p>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1598772842547!2d110.36493931478!3d-7.783169994391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Jelajahi Layanan Kami"
        items={relatedContentItems}
      />

      <Footer />
    </div>
  );
};

export default Contact;
