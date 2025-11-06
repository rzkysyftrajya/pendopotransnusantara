import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/lib/menu-items";
import { Menu, Phone, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card shadow-glass animate-slide-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mr-3 overflow-hidden">
              <img
                src="/logo.png"
                alt="Pendopo Trans Nusantara Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Pendopo Trans
              </span>
              <span className="text-xs text-gray-600 font-medium">
                Nusantara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-red-600 relative group py-2 ${
                  isActive(item.href)
                    ? "text-red-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/50 rounded-full px-4 py-2 backdrop-blur-sm">
              <Phone className="w-4 h-4 text-red-500" />
              <span className="font-medium">081378641157</span>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl shadow-xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-pulse-glow"
            >
              <a
                href="https://wa.me/6285640644321?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20sewa%20mobil."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Book Now</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden glass hover:bg-white/20 transition-all duration-300 magnetic-hover"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="glass-card">
              <div className="flex flex-col space-y-6 p-6">
                <Link to="/" className="mb-6 flex items-center">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg mr-3 overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Pendopo Trans Nusantara Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                      Pendopo Trans
                    </span>
                    <span className="text-xs text-gray-600 font-medium">
                      Nusantara
                    </span>
                  </div>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 backdrop-blur-sm group ${
                        isActive(item.href)
                          ? "text-red-600 font-bold bg-red-50"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.label}
                        <span className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </span>
                    </Link>
                  ))}
                </nav>
                <div className="border-t border-white/20 pt-6">
                  <div className="text-center space-y-4">
                    <p className="text-sm text-gray-600">
                      Butuh bantuan booking?
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://wa.me/6281378641157?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20paket%20tour."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-lg font-medium text-gray-700 hover:text-red-600 bg-white/50 rounded-xl py-3 px-4 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-5 h-5 text-red-500" />
                        <span>081378641157</span>
                      </a>
                      <a
                        href="https://wa.me/6285640644321?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20sewa%20mobil."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-lg font-medium text-gray-700 hover:text-red-600 bg-white/50 rounded-xl py-3 px-4 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-5 h-5 text-red-500" />
                        <span>085640644321</span>
                      </a>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-red-500/50 transition-all duration-500 animate-bounce-in mt-4"
                    >
                      <a
                        href="https://wa.me/6285640644321?text=Halo%20Pendopo%20Rentcar%2C%20saya%20ingin%20memesan%20sewa%20mobil."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>Book Your Ride</span>
                        <Sparkles className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
