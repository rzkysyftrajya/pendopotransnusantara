import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const heroImage = "/hero-section-home.svg";

const Hero = () => {
  const whatsappNumber = "6281234567890";

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tugu Yogyakarta"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-float opacity-60"></div>
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-float opacity-40"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-3 h-3 bg-red-300 rounded-full animate-float opacity-50"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-60 right-20 w-1.5 h-1.5 bg-white rounded-full animate-float opacity-30"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Glassmorphism Overlay Panel */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl animate-slide-in-left">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium">Premium Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Experience{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent animate-shimmer">
                Yogyakarta
              </span>{" "}
              Like Never Before
            </h1>
            <p
              className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transform your journey with our premium transportation and curated
              travel experiences. Every mile becomes a memory.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 mt-20 pt-20 md:pt-24">
        <div className="max-w-4xl ml-auto">
          <div className="text-right animate-slide-in-right">
            <div className="mb-6 md:mb-8">
              <p className="text-lg md:text-xl text-white/80 mb-2 font-medium">
                ✨ Premium & Trusted Service
              </p>
              <p className="text-lg md:text-xl text-white/80">
                Expert Team • Fast Response • Unforgettable Experiences
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-end animate-bounce-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-pulse-glow"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20sewa%20mobil`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base md:text-lg"
                >
                  <span>Book Your Journey</span>
                  <ArrowRight className="w-5 h-5 animate-bounce" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 backdrop-blur-lg text-lg py-4 px-8 rounded-2xl"
              >
                <a href="#paket-wisata" className="flex items-center gap-3">
                  <span>Explore Packages</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
