import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Testi 1",
    avatar: "/galeri-testimoni/testi-1.webp",
  },
  {
    name: "Testi 2",
    avatar: "/galeri-testimoni/testi-2.webp",
  },
  {
    name: "Testi 3",
    avatar: "/galeri-testimoni/testi-3.webp",
  },
  {
    name: "Testi 4",
    avatar: "/galeri-testimoni/testi-4.webp",
  },
  {
    name: "Testi 5",
    avatar: "/galeri-testimoni/testi-5.webp",
  },
  {
    name: "Testi 6",
    avatar: "/galeri-testimoni/testi-6.webp",
  },
];

const Testimonials = () => {
  const whatsappNumber = "6281378641157"; // Using Paket Tour number for general inquiries

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-25 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Particle Background */}
      <div className="particles">
        <div className="particle w-1 h-1"></div>
        <div className="particle w-2 h-2"></div>
        <div className="particle w-3 h-3"></div>
        <div className="particle w-1 h-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient mb-4 animate-neon">
            Testimoni Pelanggan
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Apa kata mereka yang sudah menggunakan layanan kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={testimonial.avatar}
                alt={`Testimonial from ${testimonial.name}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Lihat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 mb-6 text-lg">
            Bergabunglah dengan ribuan pelanggan yang puas dengan layanan kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo, saya ingin memulai perjalanan saya dengan Pendopo Trans Nusantara.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mulai Perjalanan Anda
            </a>
            <Link to="/galeri-testimoni" className="btn-secondary"
              style={{ animationDelay: "0.2s" }}
            >
              Lihat Semua Testimoni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
