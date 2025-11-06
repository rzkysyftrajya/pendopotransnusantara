import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Kontak Kami</h1>
            <p className="text-lg text-gray-600 mt-2">
              Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h2>
              <form className="space-y-6">
                <Input placeholder="Nama Lengkap" />
                <Input type="email" placeholder="Alamat Email" />
                <Input placeholder="Subjek" />
                <Textarea placeholder="Pesan Anda" rows={6} />
                <Button size="lg" className="w-full">Kirim Pesan</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <span>Jl. Merpati No.rt 01, modalan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-red-600" />
                    <div>
                      <p>Paket Tour: <a href="https://wa.me/6281378641157?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20paket%20tour." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">081378641157</a></p>
                      <p>Sewa Mobil: <a href="https://wa.me/6285640644321?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20sewa%20mobil." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">085640644321</a></p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-red-600" />
                    <a href="mailto:cvpendopotrans@gmail.com" className="hover:text-red-600">cvpendopotrans@gmail.com</a>
                  </li>
                </ul>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Kami</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.908533919598!2d110.4062303147779!3d-7.79995299437868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a575534e59251%3A0xac9898b281480b4d!2sPendopo%20Trans%20Nusantara!5e0!3m2!1sen!2sid!4v1629886305789!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default ContactPage;