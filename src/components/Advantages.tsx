import {
  Award,
  DollarSign,
  Shield,
  CheckCircle,
  Sparkles,
  Star,
  Crown,
  Heart,
} from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "Kualitas Layanan",
      description:
        "Dedikasi Kami untuk memberikan kualitas dan pelayanan yang terbaik",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      delay: "0s",
      features: ["24/7 Support", "Expert Team", "Quality Assurance"],
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description:
        "Kami siap memberikan solusi terbaik untuk kebutuhan perjalanan Kamu sesuai dengan budget yang Kamu miliki",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      delay: "0.2s",
      features: ["Best Value", "Transparent Pricing", "No Hidden Costs"],
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description:
        "Sudah berbadan hukum dan dipercaya melayani berbagai instansi, dan perusahaan",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      delay: "0.4s",
      features: ["Licensed Company", "Verified Reviews", "Trusted Partner"],
    },
    {
      icon: CheckCircle,
      title: "Terjamin",
      description:
        "Kendaraan yang kami miliki sangat memadai demi menjamin keamanan dan kenyamanan Kamu selama di perjalanan",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      delay: "0.6s",
      features: ["Safety First", "Well Maintained", "Comfort Guaranteed"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/10 to-red-200/10 rounded-full blur-3xl animate-morph"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-in">
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-red-600 font-medium text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent">
            Easy on Relaxation
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Mengapa Memilih Pendopo Tour?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionalitas dan keunggulan yang membuat kami terpercaya untuk
            perjalanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 md:p-8 lg:p-10 text-center group hover:-translate-y-4 transition-all duration-700 cursor-pointer animate-scale-in hover:scale-105 hover:rotate-1"
                style={{ animationDelay: item.delay }}
              >
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full p-2 shadow-lg animate-bounce-in group-hover:animate-pulse-glow">
                  <Star className="w-4 h-4 text-white" />
                </div>

                {/* Icon Container */}
                <div className="relative mb-4 md:mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-float`}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white animate-pulse" />
                  </div>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 animate-glow`}
                  ></div>
                </div>

                {/* Content */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center mt-3 md:mt-4">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-xs font-medium border border-red-200 hover:bg-red-100 transition-colors duration-300 animate-fade-in"
                        style={{
                          animationDelay: `${
                            parseFloat(item.delay) + 0.1 * (idx + 1)
                          }s`,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute bottom-4 right-4 w-3 h-3 bg-red-300 rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Siap untuk pengalaman terbaik?
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow">
            <Crown className="w-4 h-4" />
            <span>Mulai Perjalanan Anda</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
