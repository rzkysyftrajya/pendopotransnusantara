import { Card } from "@/components/ui/card";
import { Car, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Sewa Mobil",
      description:
        "Anda tinggal duduk manis dan menikmati perjalanan Anda dengan nyaman.",
      gradient: "from-red-600 via-rose-500 to-red-400",
    },
    {
      icon: MapPin,
      title: "Jogja City Tour",
      description:
        "Anda bisa memesan paket perjalanan wisata yang ada di Jogja dengan banyak pilihan rute",
      gradient: "from-red-600 via-rose-500 to-red-400",
    },
  ];

  return (
    <section id="paket-wisata" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paket Wisata & Sewa Mobil
          </h2>
          <p className="text-muted-foreground text-lg">
            Layanan profesional untuk kebutuhan perjalanan Anda di Yogyakarta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-card group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
