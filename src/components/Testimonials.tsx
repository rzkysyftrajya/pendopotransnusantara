import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Wisatawan",
    testimonial:
      "Pelayanan sangat memuaskan! Mobil bersih, driver ramah, dan perjalanan jadi menyenangkan. Pasti akan pesan lagi di sini.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    role: "Keluarga",
    testimonial:
      "Liburan keluarga kami di Jogja jadi lebih mudah dan nyaman berkat Pendopo Trans Nusantara. Terima kasih!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Johnson",
    role: "Backpacker",
    testimonial:
      "Harga sewa mobilnya terjangkau, cocok untuk kantong backpacker seperti saya. Recommended!",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 animate-neon">
            Testimoni Pelanggan
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Apa kata mereka yang sudah menggunakan layanan kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-6 rounded-full animate-shimmer"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-interactive group relative bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-bounce-in">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <CardContent className="p-8 relative">
                {/* Avatar and info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-fade-in"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-gray-800 animate-fade-in">
                      {testimonial.name}
                    </h3>
                    <p
                      className="text-sm text-gray-500 animate-fade-in"
                      style={{ animationDelay: "0.1s" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote
                  className="text-gray-700 mb-6 leading-relaxed italic text-lg animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Rating */}
                <div
                  className="flex items-center justify-between animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {testimonial.rating}.0/5.0
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-morph"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 mb-6 text-lg">
            Bergabunglah dengan ribuan pelanggan yang puas dengan layanan kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary animate-pulse-glow magnetic animate-bounce-in">
              Mulai Perjalanan Anda
            </button>
            <button
              className="btn-secondary animate-pulse-glow magnetic animate-bounce-in"
              style={{ animationDelay: "0.2s" }}
            >
              Lihat Semua Testimoni
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
