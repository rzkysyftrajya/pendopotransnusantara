import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "https://placehold.co/600x400/transparent/F00";

const Hero = () => {
  const whatsappNumber = "6281234567890";

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tugu Yogyakarta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <p className="text-lg md:text-xl text-white/80 mb-2">
              Praktis & Terpercaya
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-4">
              Berpengalaman Layanan Respon Cepat & Tepat
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Selamat datang di{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Pendopo Trans Nusantara
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Mau liburan di Jogja atau sedang membutuhkan sewa kendaraan? Kami
            siap memberikan solusi terbaik untuk kebutuhan perjalanan Anda, dari
            perencanaan hingga pelaksanaan, memastikan setiap momen liburan Anda
            menjadi pengalaman yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-xl transition-all text-lg"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20sewa%20mobil`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Pesan Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-red-600 transition-all text-lg"
            >
              <a href="#paket-wisata" className="flex items-center gap-2">
                Lihat Paket Wisata
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
