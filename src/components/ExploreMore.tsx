import { Button } from "./ui/button";
import { ArrowRight, Info, Car, HelpCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Tentang Kami",
    description: "Kenali lebih jauh siapa kami dan misi kami.",
    link: "/about",
    icon: <Info className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Armada Kami",
    description: "Lihat semua pilihan mobil yang kami sediakan.",
    link: "/sewa-mobil",
    icon: <Car className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Pertanyaan Umum (FAQ)",
    description: "Temukan jawaban dari pertanyaan yang sering diajukan.",
    link: "/faq",
    icon: <HelpCircle className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Hubungi Kami",
    description: "Punya pertanyaan? Jangan ragu untuk menghubungi kami.",
    link: "/contact",
    icon: <Phone className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Paket Wisata",
    description: "Jelajahi berbagai paket wisata menarik di Yogyakarta.",
    link: "/paket-wisata",
    icon: <Car className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Blog Wisata",
    description: "Baca artikel dan tips wisata terbaru dari kami.",
    link: "/blog",
    icon: <Info className="w-8 h-8 text-red-500" />,
  },
];

const ExploreMore = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient mb-4">
            Jelajahi Lebih Lanjut
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Temukan semua informasi yang Anda butuhkan untuk merencanakan
            perjalanan sempurna Anda di Yogyakarta.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift group text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="text-red-500 font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                <span>Lihat Detail</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
