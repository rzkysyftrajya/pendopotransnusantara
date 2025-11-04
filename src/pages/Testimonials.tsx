import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Wisatawan Jakarta",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Driver ramah dan profesional. Mobil bersih dan nyaman. Highly recommended!",
    initials: "BS"
  },
  {
    name: "Siti Nurhaliza",
    role: "Tour Organizer",
    rating: 5,
    text: "Sudah beberapa kali menggunakan jasa Pendopo Trans untuk client kami. Selalu puas dengan pelayanannya. Armada bagus dan harga kompetitif.",
    initials: "SN"
  },
  {
    name: "Ahmad Wijaya",
    role: "Business Traveler",
    rating: 5,
    text: "Untuk urusan bisnis di Jogja, Pendopo Trans selalu jadi pilihan utama. Tepat waktu, mobil berkualitas, dan driver yang paham area.",
    initials: "AW"
  },
  {
    name: "Linda Kartika",
    role: "Family Vacation",
    rating: 5,
    text: "Liburan keluarga jadi lebih menyenangkan berkat layanan dari Pendopo Trans. Driver sangat membantu merekomendasikan tempat wisata.",
    initials: "LK"
  },
  {
    name: "Rudi Hermawan",
    role: "Corporate Client",
    rating: 5,
    text: "Perusahaan kami rutin menggunakan jasa mereka untuk tamu dan karyawan. Pelayanan konsisten baik dan armada selalu prima.",
    initials: "RH"
  },
  {
    name: "Maya Kusuma",
    role: "Solo Traveler",
    rating: 5,
    text: "Sebagai solo traveler perempuan, saya merasa sangat aman dan nyaman. Driver sangat respectful dan helpful. Thank you!",
    initials: "MK"
  },
  {
    name: "Deni Pratama",
    role: "Wedding Organizer",
    rating: 5,
    text: "Untuk acara wedding, Pendopo Trans selalu deliver. Mobil mewah, driver profesional, dan koordinasi yang baik. Recommended!",
    initials: "DP"
  },
  {
    name: "Fitri Handayani",
    role: "Student Group",
    rating: 5,
    text: "Study tour kami berjalan lancar berkat Pendopo Trans. Harga student-friendly tapi kualitas tetap premium. Terima kasih!",
    initials: "FH"
  },
  {
    name: "Eko Prasetyo",
    role: "Photographer",
    rating: 5,
    text: "Sering rental untuk photo session client. Mobil terawat, bersih, dan fotogenik. Driver juga kooperatif dengan jadwal kami.",
    initials: "EP"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimoni Pelanggan</h1>
          <p className="text-xl max-w-3xl">
            Apa kata pelanggan kami tentang layanan Pendopo Trans Nusantara
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Rating Rata-rata</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Ulasan Positif</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-muted-foreground">Pelanggan Berulang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
