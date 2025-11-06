import { menuItems } from "@/lib/menu-items";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="kontak"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Pendopo Trans Nusantara
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
              Pendopo Trans Nusantara memberikan pelayanan terbaik sebagai jasa
              penyedia layanan wisata dan sewa mobil di Yogyakarta dengan
              komitmen untuk memberikan pengalaman yang tak terlupakan.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
              Jl. Merpati No.rt 01, modalan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-xs md:text-sm text-gray-400">
                @wisatakejogja.id
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
              Kontak Kami
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Paket Tour</p>
                  <a
                    href="https://wa.me/6281378641157?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20paket%20tour."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-white hover:text-red-400 font-medium transition-colors duration-300"
                  >
                    081378641157
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Sewa Mobil</p>
                  <a
                    href="https://wa.me/6285640644321?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20sewa%20mobil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-white hover:text-red-400 font-medium transition-colors duration-300"
                  >
                    085640644321
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                </div>
                <a
                  href="mailto:cvpendopotrans@gmail.com"
                  className="text-sm md:text-base text-white hover:text-red-400 font-medium transition-colors duration-300"
                >
                  cvpendopotrans@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
              Informasi
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {menuItems.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div className="md:col-span-1">
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
              Lokasi Kami
            </h4>
            <div className="relative" style={{ paddingBottom: '75%', height: 0 }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6942194204603!2d110.4061928750053!3d-7.822154092198635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57b25594025d%3A0x7424ecb4ad0e4914!2sPendopo%20Trans!5e0!3m2!1sid!2sid!4v1762387181480!5m2!1sid!2sid" style={{ border: "0", position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {new Date().getFullYear()} Pendopo Trans Nusantara. All rights
            reserved.
            <span className="block mt-1 md:mt-2 text-xs text-gray-500">
              Made with ❤️ for unforgettable Yogyakarta experiences
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
