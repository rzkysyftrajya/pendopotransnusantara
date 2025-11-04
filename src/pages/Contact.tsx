import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl">
            Kami siap membantu Anda dengan segala pertanyaan dan kebutuhan perjalanan Anda
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informasi Kontak</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Telepon / WhatsApp</h3>
                      <p className="text-muted-foreground">+62 812-3456-7890</p>
                      <p className="text-muted-foreground">+62 813-9876-5432</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@pendopotrans.com</p>
                      <p className="text-muted-foreground">cs@pendopotrans.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jl. Magelang No. 123<br />
                        Yogyakarta 55284<br />
                        Indonesia
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Jam Operasional</h3>
                      <p className="text-muted-foreground">
                        Senin - Minggu: 07:00 - 21:00 WIB<br />
                        Customer Service 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick WhatsApp */}
              <Card className="bg-gradient-to-r from-primary to-accent text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Butuh Bantuan Segera?</h3>
                  <p className="mb-6">Hubungi kami via WhatsApp untuk respon cepat</p>
                  <a 
                    href="https://wa.me/6281234567890?text=Halo%20Pendopo%20Trans,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="secondary" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Chat WhatsApp Sekarang
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-muted-foreground">
                    Isi form di bawah ini dan kami akan segera menghubungi Anda
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                      <Input placeholder="Masukkan nama Anda" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                      <Input type="tel" placeholder="+62 812-3456-7890" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Layanan yang Diminati</label>
                      <select className="w-full px-4 py-2 rounded-md border border-input bg-background">
                        <option>Pilih Layanan</option>
                        <option>Rental Mobil Harian</option>
                        <option>Paket Wisata</option>
                        <option>Airport Transfer</option>
                        <option>Wedding Car</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Pesan</label>
                      <Textarea 
                        placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1598772842547!2d110.36493931478!3d-7.783169994391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
