import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from "@/components/RelatedContent";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ExternalLink, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Membuat cerita indah di Pantai Indrayanti",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Pantai Indrayanti? Pantai Indrayanti adalah salah satu pantai populer di Gunungkidul, Yogyakarta, yang dikenal dengan keindahan pasir putih bersih dan panorama laut biru...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Indrayanti_Beach",
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
    image:
      "https://images.unsplash.com/photo-1464822759844-d150f38d609c?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Kanigoro_Cliff",
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
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    externalLink: "https://id.wikipedia.org/wiki/Sungai_Mudal",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Gumuk Pasir: Tumpukan beribu pasir",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Gumuk Pasir Jogja, yang dikenal juga sebagai Gumuk Pasir Parangtritis atau Gumuk Pasir Parangkusumo, adalah fenomena alam berupa gundukan-gundukan pasir yang terbentuk secara alami akibat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Gumuk_Pasir_Parangkusumo",
    internalLinks: [
      { text: "paket wisata", href: "/paket-wisata" },
      { text: "hubungi kami", href: "/contact" },
    ],
  },
  {
    title: "Pantai Parangtritis: pantai ratu tanpa raja",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Pantai Parangtritis adalah salah satu destinasi wisata pantai paling ikonik di Yogyakarta, terletak di Desa Parangtritis, Kecamatan Kretek, Kabupaten Bantul, sekitar 27 km dari pusat...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Parangtritis_Beach",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "paket wisata", href: "/paket-wisata" },
    ],
  },
  {
    title:
      "Suraloka Zoo: Kebun Binatang Interaktif dan Edukatif di Lereng Merapi",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Suraloka Zoo adalah kebun binatang edukasi modern yang terletak di kawasan wisata Kaliurang, Sleman, Yogyakarta, tepatnya di Jalan Boyong No.97, Kaliurang, Hargobinangun, Pakem. Berdiri sejak...",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    externalLink: "https://suralokazoo.com",
    internalLinks: [
      { text: "paket wisata", href: "/paket-wisata" },
      { text: "tentang kami", href: "/about" },
    ],
  },
  {
    title:
      "Pule Payung: Surga Spot Foto dan Panorama Waduk Sermo di Puncak Perbukitan Menoreh",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Pule Payung? Pule Payung adalah destinasi wisata perbukitan di Kulon Progo, Yogyakarta, yang menawarkan pemandangan spektakuler Waduk Sermo dan perbukitan Menoreh dari ketinggian...",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150f38d609c?w=800&q=80",
    externalLink: "https://id.wikipedia.org/wiki/Pule_Payung",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "hubungi kami", href: "/contact" },
    ],
  },
  {
    title: "Tempo Gelato: Rasa mendunia produk Lokal",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Tempo Gelato adalah kedai gelato atau es krim khas Italia yang berdiri sejak tahun 2015 di Yogyakarta. Tempat ini dikenal sebagai destinasi kuliner yang menawarkan...",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    externalLink: "https://tempogelato.com",
    internalLinks: [
      { text: "paket wisata", href: "/paket-wisata" },
      { text: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Puncak Segoro: Surga tersembunyi dibalik Tebing",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Puncak Segoro adalah destinasi wisata alam yang memukau dan masih relatif tersembunyi di Gunungkidul, Yogyakarta. Terletak di puncak tebing batu kapur yang menjulang tinggi, tempat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    externalLink: "https://id.wikipedia.org/wiki/Puncak_Segoro",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "tentang kami", href: "/about" },
    ],
  },
  {
    title:
      "Pantai Ngobaran: Surga Pasir Putih dan Tebing Eksotis di Gunungkidul",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Pantai ngobaran yaitu Destinasi wisata alam yang terletak di pesisir selatan Gunungkidul, Yogyakarta. Pantai Ngobaran tepatnya berada di Desa Kanigoro, Kecamatan Saptosari. Pantai ini di...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Ngobaran_Beach",
    internalLinks: [
      { text: "paket wisata", href: "/paket-wisata" },
      { text: "hubungi kami", href: "/contact" },
    ],
  },
  {
    title: "Heha Ocean View: Menyambut senja dengan panorama laut eksotis",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Heha Ocean View merupakan destinasi wisata yang memukau di Gunungkidul, Yogyakarta. Menawarkan pemandangan laut selatan yang luas dan eksotis dari ketinggian tebing. Tempat ini sangat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    externalLink: "https://id.wikipedia.org/wiki/Heha_Ocean_View",
    internalLinks: [
      { text: "sewa mobil", href: "/sewa-mobil" },
      { text: "paket wisata", href: "/paket-wisata" },
    ],
  },
  {
    title: "Surga oleh-oleh Jogja: Tempat tepat membawa kenangan",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Jogja juga terkenal sebagai surga oleh-oleh yang memanjakan wisatawan. Di pusat oleh-oleh khas Jogja wisatawan akan menemukan beragam cenderamata otentik mulai dari batik klasik, kain...",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    externalLink: "https://en.wikipedia.org/wiki/Malioboro",
    internalLinks: [
      { text: "tentang kami", href: "/about" },
      { text: "hubungi kami", href: "/contact" },
    ],
  },
];

const Blog = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Info Wisata Yogyakarta - Pendopo Trans Nusantara",
    description:
      "Blog informasi wisata Yogyakarta terbaik dengan artikel tentang destinasi, tips traveling, dan rekomendasi tempat menarik.",
    url: "https://pendopotrans.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Pendopo Trans Nusantara",
      url: "https://pendopotrans.com",
    },
    mainEntity: {
      "@type": "BlogPosting",
      headline: "Info Wisata Yogyakarta",
      description:
        "Koleksi artikel tentang destinasi wisata terbaik di Yogyakarta",
      author: {
        "@type": "Organization",
        name: "Pendopo Trans Nusantara",
      },
    },
  };

  const relatedContentItems = [
    {
      title: "Paket Wisata Yogyakarta",
      description:
        "Jelajahi destinasi wisata Yogyakarta dengan paket tour lengkap dan transportasi nyaman.",
      href: "/paket-wisata",
      type: "internal" as const,
    },
    {
      title: "Sewa Mobil Yogyakarta",
      description:
        "Sewa mobil dengan supir untuk menjelajahi semua destinasi wisata Yogyakarta dengan bebas.",
      href: "/sewa-mobil",
      type: "internal" as const,
    },
    {
      title: "Borobudur Temple",
      description:
        "Pelajari tentang Candi Borobudur, situs warisan dunia UNESCO yang megah di Magelang.",
      href: "https://en.wikipedia.org/wiki/Borobudur",
      type: "external" as const,
    },
    {
      title: "Prambanan Temple",
      description:
        "Temukan keindahan kompleks candi Hindu terbesar di Indonesia, Candi Prambanan.",
      href: "https://en.wikipedia.org/wiki/Prambanan",
      type: "external" as const,
    },
    {
      title: "Gunung Merapi",
      description:
        "Informasi tentang Gunung Merapi, gunung berapi aktif paling dahsyat di Indonesia.",
      href: "https://en.wikipedia.org/wiki/Mount_Merapi",
      type: "external" as const,
    },
    {
      title: "Tentang Yogyakarta",
      description:
        "Pelajari sejarah dan budaya Yogyakarta, kota pelajar dan budaya di Indonesia.",
      href: "https://en.wikipedia.org/wiki/Yogyakarta",
      type: "external" as const,
    },
  ];

  const breadcrumbItems = [{ label: "Blog" }];

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
            Info Wisata Yogyakarta
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            Temukan artikel menarik tentang destinasi wisata terbaik di
            Yogyakarta dan sekitarnya
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#articles"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Baca Artikel
            </a>
            <a
              href="/paket-wisata"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2"
            >
              Paket Wisata
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/sewa-mobil"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors flex items-center gap-2"
            >
              Sewa Mobil
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artikel Terbaru</h2>
            <p className="text-lg text-muted-foreground">
              Klik pada artikel untuk membaca lebih lengkap atau
              <a
                href="/paket-wisata"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                {" "}
                pesan paket wisata
              </a>{" "}
              ke destinasi tersebut
            </p>
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
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent
        title="Jelajahi Destinasi Lainnya"
        items={relatedContentItems}
      />

      <Footer />
    </div>
  );
};

export default Blog;
