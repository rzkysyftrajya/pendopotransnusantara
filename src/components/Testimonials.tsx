import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Wisatawan",
    testimonial: "Pelayanan sangat memuaskan! Mobil bersih, driver ramah, dan perjalanan jadi menyenangkan. Pasti akan pesan lagi di sini.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Keluarga",
    testimonial: "Liburan keluarga kami di Jogja jadi lebih mudah dan nyaman berkat Pendopo Trans Nusantara. Terima kasih!",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "Backpacker",
    testimonial: "Harga sewa mobilnya terjangkau, cocok untuk kantong backpacker seperti saya. Recommended!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground">Apa kata mereka yang sudah menggunakan layanan kami</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-muted-foreground">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
