import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dce5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "10 Tips Terbaik untuk Liburan Hemat di Yogyakarta",
    excerpt:
      "Yogyakarta tidak harus mahal! Temukan cara menikmati kota gudeg dengan budget terbatas tanpa mengurangi keseruan petualangan Anda.",
    link: "/blog/tips-hemat-jogja",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593719592254-69d2357c145e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Menyusuri Keindahan Tersembunyi di Pantai Selatan Jogja",
    excerpt:
      "Selain Parangtritis, ada banyak pantai eksotis yang menanti untuk dijelajahi. Kami akan tunjukkan beberapa permata tersembunyi di pesisir selatan.",
    link: "/blog/pantai-selatan-jogja",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559024926-b9cfc1a43253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kuliner Wajib Coba di Jogja: Dari Gudeg hingga Kopi Joss",
    excerpt:
      "Jelajahi kekayaan rasa kuliner khas Yogyakarta. Kami merangkum tempat-tempat makan legendaris yang akan memanjakan lidah Anda.",
    link: "/blog/kuliner-wajib-jogja",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Panduan Lengkap Wisata Candi Borobudur",
    excerpt:
      "Pelajari sejarah, tips berkunjung, dan cara terbaik menikmati keindahan candi terbesar di dunia yang terletak di Magelang.",
    link: "/blog/panduan-borobudur",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gunung Merapi: Petualangan di Atas Awan",
    excerpt:
      "Rasakan sensasi mendaki gunung berapi paling aktif di Indonesia. Tips aman, rute terbaik, dan pemandangan spektakuler menanti Anda.",
    link: "/blog/gunung-merapi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Suraloka Zoo: Hiburan Edukatif untuk Keluarga",
    excerpt:
      "Taman margasatwa modern dengan koleksi hewan lengkap. Cocok untuk liburan keluarga dengan anak-anak.",
    link: "/blog/suraloka-zoo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759844-d150f38d609c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pule Payung: Spot Foto Terbaik di Kulon Progo",
    excerpt:
      "Destinasi baru yang sedang hits dengan pemandangan Waduk Sermo yang memukau dari ketinggian.",
    link: "/blog/pule-payung",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tempo Gelato: Sensasi Kuliner Italia di Jogja",
    excerpt:
      "Nikmati gelato autentik dengan cita rasa lokal. Tempat nongkrong kekinian yang wajib dikunjungi.",
    link: "/blog/tempo-gelato",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    title: "Pantai Parangtritis: Legenda dan Keindahan",
    excerpt:
      "Pantai legendaris dengan mitos Ratu Kidul. Pelajari sejarahnya dan nikmati sunset yang memukau.",
    link: "/blog/parangtritis",
  },
];

const TravelBlog = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient mb-4">
            Travel Blog & Inspirasi
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Dapatkan ide dan inspirasi untuk perjalanan Anda berikutnya di
            Yogyakarta dari blog kami.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 6).map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 h-14">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 h-24">
                  {post.excerpt}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="btn-secondary hover-lift"
                >
                  <Link to={post.link} className="flex items-center gap-2">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="btn-primary hover-lift">
            <Link to="/blog" className="flex items-center gap-2">
              <span>Kunjungi Blog Kami</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;
