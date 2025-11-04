import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Paket Wisata", href: "/paket-wisata" },
    { label: "Sewa Mobil", href: "/sewa-mobil" },
    { label: "FAQS", href: "/faq" },
    { label: "Syarat dan Ketentuan", href: "/terms" },
  ];

  return (
    <footer
      id="kontak"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Pendopo Trans Nusantara
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pendopo Trans Nusantara memberikan pelayanan terbaik sebagai jasa
              penyedia layanan wisata dan sewa mobil di Yogyakarta dengan
              komitmen untuk memberikan pengalaman yang tak terlupakan.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-400">@wisatakejogja.id</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Paket Tour</p>
                  <a
                    href="tel:081378641157"
                    className="text-white hover:text-red-400 font-medium transition-colors duration-300"
                  >
                    081378641157
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Sewa Mobil</p>
                  <a
                    href="tel:085640644321"
                    className="text-white hover:text-red-400 font-medium transition-colors duration-300"
                  >
                    085640644321
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-red-400" />
                </div>
                <a
                  href="mailto:cvpendopotrans@gmail.com"
                  className="text-white hover:text-red-400 font-medium transition-colors duration-300"
                >
                  cvpendopotrans@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Informasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pendopo Trans Nusantara. All rights
            reserved.
            <span className="block mt-2 text-xs text-gray-500">
              Made with ❤️ for unforgettable Yogyakarta experiences
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
