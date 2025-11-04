import { Award, DollarSign, Shield, CheckCircle } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "Kualitas Layanan",
      description:
        "Dedikasi Kami untuk memberikan kualitas dan pelayanan yang terbaik",
    },
    {
      icon: DollarSign,
      title: "Harga Kompetitif",
      description:
        "Kami siap memberikan solusi terbaik untuk kebutuhan perjalanan Kamu sesuai dengan budget yang Kamu miliki",
    },
    {
      icon: Shield,
      title: "Terpercaya",
      description:
        "Sudah berbadan hukum dan dipercaya melayani berbagai instansi, dan perusahaan",
    },
    {
      icon: CheckCircle,
      title: "Terjamin",
      description:
        "Kendaraan yang kami miliki sangat memadai demi menjamin keamanan dan kenyamanan Kamu selama di perjalanan",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Easy on Relaxation
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mengapa Memilih Pendopo Tour?
          </h3>
          <p className="text-lg text-muted-foreground">
            Profesionalitas dan keunggulan yang membuat kami terpercaya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
