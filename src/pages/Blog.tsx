import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Membuat cerita indah di Pantai Indrayanti",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Pantai Indrayanti? Pantai Indrayanti adalah salah satu pantai populer di Gunungkidul, Yogyakarta, yang dikenal dengan keindahan pasir putih bersih dan panorama laut biru...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Jurang Kanigoro: Kehidupan diatas awan",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Apa Itu Jurang Kanigoro? Jurang Kanigoro, yang lebih dikenal dengan nama Jurang Tembelan, adalah destinasi wisata alam berupa jurang dan tebing indah yang terletak di...",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  },
  {
    title: "Air alam Sungai Mudal",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Sungai Mudal adalah sebuah destinasi ekowisata yang terletak di Dusun Banyunganti, Desa Jatimulyo, Kecamatan Girimulyo, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta. Sungai ini terkenal dengan...",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    title: "Gumuk Pasir: Tumpukan beribu pasir",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Gumuk Pasir Jogja, yang dikenal juga sebagai Gumuk Pasir Parangtritis atau Gumuk Pasir Parangkusumo, adalah fenomena alam berupa gundukan-gundukan pasir yang terbentuk secara alami akibat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Pantai Parangtritis: pantai ratu tanpa raja",
    author: "admin_pendopotour",
    date: "July 28, 2025",
    excerpt:
      "Pantai Parangtritis adalah salah satu destinasi wisata pantai paling ikonik di Yogyakarta, terletak di Desa Parangtritis, Kecamatan Kretek, Kabupaten Bantul, sekitar 27 km dari pusat...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
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
  },
  {
    title: "Tempo Gelato: Rasa mendunia produk Lokal",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Tempo Gelato adalah kedai gelato atau es krim khas Italia yang berdiri sejak tahun 2015 di Yogyakarta. Tempat ini dikenal sebagai destinasi kuliner yang menawarkan...",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  },
  {
    title: "Puncak Segoro: Surga tersembunyi dibalik Tebing",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Puncak Segoro adalah destinasi wisata alam yang memukau dan masih relatif tersembunyi di Gunungkidul, Yogyakarta. Terletak di puncak tebing batu kapur yang menjulang tinggi, tempat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
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
  },
  {
    title: "Heha Ocean View: Menyambut senja dengan panorama laut eksotis",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Heha Ocean View merupakan destinasi wisata yang memukau di Gunungkidul, Yogyakarta. Menawarkan pemandangan laut selatan yang luas dan eksotis dari ketinggian tebing. Tempat ini sangat...",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Surga oleh-oleh Jogja: Tempat tepat membawa kenangan",
    author: "admin_pendopotour",
    date: "July 27, 2025",
    excerpt:
      "Jogja juga terkenal sebagai surga oleh-oleh yang memanjakan wisatawan. Di pusat oleh-oleh khas Jogja wisatawan akan menemukan beragam cenderamata otentik mulai dari batik klasik, kain...",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Info Wisata</h1>
          <p className="text-xl max-w-3xl">Terbaik di Yogyakarta</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
