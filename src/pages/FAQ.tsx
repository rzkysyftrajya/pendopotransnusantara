import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import FAQ from "@/components/FAQ";
import { ArrowRight } from "lucide-react";

const FAQPage = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "FAQ - Pertanyaan Umum - Pendopo Trans Nusantara",
    description:
      "Temukan jawaban atas pertanyaan umum tentang layanan paket wisata, sewa mobil, dan transportasi di Yogyakarta.",
    url: "https://pendopotrans.com/faq",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
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
      title: "Hubungi Kami",
      description:
        "Butuh bantuan lebih lanjut? Tim customer service kami siap membantu Anda 24/7.",
      href: "/contact",
      type: "internal" as const,
    },
    {
      title: "Tentang Kami",
      description:
        "Pelajari lebih lanjut tentang Pendopo Trans Nusantara dan komitmen kami dalam melayani pelanggan.",
      href: "/about",
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
      title: "WhatsApp Customer Service",
      description:
        "Hubungi kami langsung via WhatsApp untuk konsultasi dan pemesanan yang lebih cepat.",
      href: "https://wa.me/6281378641157",
      type: "external" as const,
    },
  ];

  const breadcrumbItems = [{ label: "FAQ" }];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            Temukan jawaban atas pertanyaan yang sering ditanyakan tentang
            layanan kami
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#faq"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Lihat FAQ
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6281378641157"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2"
            >
              WhatsApp CS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Butuh Bantuan Lebih Lanjut?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk
                <a
                  href="/contact"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  {" "}
                  menghubungi tim kami
                </a>{" "}
                atau
                <a
                  href="https://wa.me/6281378641157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  {" "}
                  chat WhatsApp
                </a>
              </p>
            </div>

            <FAQ />
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Eksplorasi Layanan Kami"
        items={relatedContentItems}
      />

      <Footer />
    </div>
  );
};

export default FAQPage;
