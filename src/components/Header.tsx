import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Paket Wisata", href: "/paket-wisata" },
    { label: "Sewa Mobil", href: "/sewa-mobil" },
    { label: "Travel Blog", href: "/blog" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const whatsappNumber = "6281378641157";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-all duration-300 group"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-red-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Pendopo Trans Nusantara
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  isActive(item.href)
                    ? "text-red-600 font-bold bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm text-gray-600 font-medium">
                Butuh bantuan booking?
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold text-red-600">081378641157</p>
                <p className="text-sm font-bold text-red-600">085640644321</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-bold"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Need help booking?
                </p>
                <p className="text-sm font-medium">
                  081378641157 / 085640644321
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
