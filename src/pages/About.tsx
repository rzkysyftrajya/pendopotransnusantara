import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Building, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl max-w-3xl">
            Menghubungkan Nusantara, Menginspirasi Perjalanan
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Pendopo Trans Nusantara bergerak dalam jasa perjalanan wisata
              serta penyedia transportasi yang berlokasi di Yogyakarta sejak
              2016.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Kami siap membantu semua kebutuhan Kamu sesuai dengan budget yang
              Kamu miliki tanpa mengurangi fasilitas dan kenyamanan yang Kamu
              inginkan. Kami hadir untuk memberikan pelayanan terbaik agar
              liburan Kamu menjadi lebih seru dan berkesan bersama Pendopo Trans
              Nusantara.
            </p>
            <p className="text-lg text-muted-foreground">
              Pendopo Trans Nusantara menyediakan berbagai macam paket wisata
              untuk segala kebutuhan liburanmu. Paket yang kami tawarkan yaitu:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Wisata</h3>
                <p className="text-sm text-muted-foreground">
                  Berbagai paket wisata menarik di Yogyakarta
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Custom Tour</h3>
                <p className="text-sm text-muted-foreground">
                  Tur sesuai keinginan dan kebutuhan Anda
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Honeymoon</h3>
                <p className="text-sm text-muted-foreground">
                  Paket romantis untuk pasangan
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Gathering</h3>
                <p className="text-sm text-muted-foreground">
                  Paket untuk acara gathering dan outing
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Sewa Mobil</h3>
                <p className="text-sm text-muted-foreground">
                  Sewa mobil dengan supir profesional
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Paket Sewa Mobil dan Bus</h3>
                <p className="text-sm text-muted-foreground">
                  Sewa bus untuk kelompok besar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Legalitas Kami
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Berikut Legalitas Dari CV. Pendopo Trans Nusantara
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">SK KEMENKUMHAM</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  AHU-0041967.AH.01.01 TAHUN 2023
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Nomor Induk Berusaha (NIB)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  1306230071731
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">NPWP</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  39.233.327.4-543.000
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
