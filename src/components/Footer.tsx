import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const whatsappNumbers = [
    { label: "Paket Tour", number: "6281378641157" },
    { label: "Paket Sewa Mobil", number: "6285640644321" },
  ];

  const quickLinks = [
    { label: "Paket Wisata", href: "#paket-wisata" },
    { label: "Sewa Mobil", href: "#sewa-mobil" },
    { label: "FAQS", href: "#faq" },
    { label: "Syarat dan Ketentuan", href: "#" },
  ];

  return (
    <footer id="kontak" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Pendopo Trans Nusantara
            </h3>
            <p className="text-background/80 mb-6">
              Pendopo Trans Nusantara memberikan pelayanan terbaik sebagai jasa
              penyedia layanan wisata dan sewa mobil di Yogyakarta
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              {whatsappNumbers.map((wa, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${wa.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-red-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>
                    {wa.label}: +{wa.number}
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5" />
                <span>Email :</span>
              </div>
              <div className="ml-8 text-background/80">
                cvpendopotrans@gmail.com
              </div>
              <a
                href="https://instagram.com/wisatakejogja.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-red-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow Us</span>
              </a>
              <div className="ml-8 text-background/80">@wisatakejogja.id</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            Pendopo Trans Nusantara © 2024 | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
