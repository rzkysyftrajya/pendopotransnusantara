import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";

const PaketWisata = () => {
  const whatsappNumber = "6281378641157";

  const oneDayPackages = [
    {
      name: "Paket Merapi",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Pasar Ngasem",
        "Tamansari",
        "Lava Tour",
        "Heha Sky View",
        "Pusat Oleh-oleh",
      ],
      price: "308.000",
    },
    {
      name: "Paket Patehan",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Pasar Ngasem",
        "Taman Sari",
        "Hutan Pinus",
        "Pictniq",
        "Pusat Oleh Oleh",
      ],
      price: "218.000",
    },
    {
      name: "Paket Bantul",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Kebun Buah Mangunan",
        "Hutan Pinus Mangunan",
        "Pantai Mesra",
        "Heha Ocean",
        "Pusat Oleh-oleh",
      ],
      price: "239.000",
    },
    {
      name: "Paket Borobudur",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Candi Borobudur",
        "VW Safari",
        "Studio Gamplong",
        "Mahaloka Paradise",
        "Pusat Oleh-oleh",
      ],
      price: "349.000",
    },
    {
      name: "Paket Prambanan",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Tebing Breksi",
        "Obelix Hills",
        "Candi Prambanan",
        "Pinus Pengger",
        "Pusat Oleh-oleh",
      ],
      price: "247.000",
    },
    {
      name: "Paket Imogiri",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Taman Sari",
        "Hutan Pinus",
        "Pantai parangtritis",
        "Obelix Sea View",
        "Pusat Oleh-oleh",
      ],
      price: "228.000",
    },
    {
      name: "Paket Gunung Kidul",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Cave Tubing Goa Pindul",
        "Puncak Segoro",
        "Pantai Ngobaran",
        "Malioboro",
        "Pusat Oleh-oleh",
      ],
      price: "258.000",
    },
    {
      name: "Paket Kulon Progo",
      duration: "1 Hari",
      location: "Yogyakarta",
      destinations: [
        "Tumpeng Manoreh",
        "Candi Borobudur",
        "Air Terjun Kedung Kayang",
        "Obelix Village",
        "Wisata Oleh Oleh",
      ],
      price: "288.000",
    },
  ];

  const twoDayPackages = [
    {
      name: "Paket Sewon",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Pasar Ngasem",
        "Tamansari",
        "Candi Prambanan",
        "Kebun Buah Mangunan",
        "Hutan Pinus",
        "Pantai Parangtritis",
        "Obellix Sea View",
        "Pusat Oleh-oleh",
      ],
      price: "747.000",
    },
    {
      name: "Paket Gondomanan",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Suraloka Zoo",
        "Bhumi Merapi",
        "Ibarbo Park",
        "Pasar Ngasem",
        "Candi Prambanan",
        "Tempo Gelato",
        "Pusat Oleh-oleh",
      ],
      price: "759.000",
    },
    {
      name: "Paket Wonosari",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Heha Ocean View",
        "Pantai Watulawang",
        "Pinus Pengger",
        "Pasar Ngasem",
        "Keraton",
        "Tebing Breksi",
        "Candi Plaosan",
        "Pusat Oleh-oleh",
      ],
      price: "709.000",
    },
    {
      name: "Paket Krapyak",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Pantai Mesra",
        "Pantai Ngobaran",
        "Obelix Sea View",
        "Heha Sky View",
        "Tebing Breksi",
        "Candi Prambanan",
        "Pusat oleh-Oleh",
      ],
      price: "778.000",
    },
    {
      name: "Paket Kotagede",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Kebun Buah Mangunan",
        "Hutan Pinus",
        "Gumuk Pasir",
        "Pantai Parangtritis",
        "Obelix Sea View",
        "Pasar Ngasem",
        "Tamansari",
        "Studio Gamplong",
        "Mahaloka Paradise",
        "Pule Payung",
        "Pusat Oleh-oleh",
      ],
      price: "747.000",
    },
    {
      name: "Paket Gamping",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Taman Sari",
        "Kopi Klothok",
        "Obelix Hills",
        "Tebing Breksi",
        "Malioboro",
        "Tumpeng Menoreh",
        "VW Safari",
        "Borobudur",
        "Pusat Oleh-oleh",
      ],
      price: "879.000",
    },
    {
      name: "Paket Gedongtengen",
      duration: "2 Hari 1 Malam",
      location: "Yogyakarta",
      destinations: [
        "Tumpeng Menoreh",
        "Studio Gamplong",
        "Mahaloka Paradise",
        "Tempo Gelato",
        "Heha Sky View",
        "Pantai Mesra",
        "Pantai Drini",
        "Pusat Oleh-oleh",
      ],
      price: "829.000",
    },
    {
      name: "Paket Pundong",
      duration: "2 Hari",
      location: "Yogyakarta",
      destinations: [
        "Borobudur",
        "Air Terjun Kedung Kayang",
        "Lava Tour",
        "Kopi Klothok",
        "Goa Pindul",
        "Pantai Ngobaran",
        "Puncak Segoro",
        "Wisata Oleh Oleh",
      ],
      price: "877.000",
    },
    {
      name: "Paket Mantrijeron",
      duration: "2 Hari 1 Malam",
      location: "Yogyakarta",
      destinations: [
        "Pasar Ngasem",
        "Keraton",
        "Pictniq",
        "Malioboro",
        "Hutan Pinus",
        "Tempo Glato",
        "Obelix Hills",
        "Tebing Breksi",
        "Pusat oleh-oleh",
      ],
      price: "699.000",
    },
  ];

  const threeDayPackages = [
    {
      name: "Jogokaryan",
      duration: "3 Hari 2 Malam",
      location: "Yogyakarta",
      destinations: [
        "Kopi Klothok",
        "Museum Merapi",
        "Candi Plaosan",
        "Tebing Breksi",
        "Hutan Pinus Asri",
        "Songgo Langit",
        "Pantai Parangtritis",
        "Malioboro",
        "Pasar Ngasem",
        "Tamansari",
        "Studio Gamplong",
        "Pusat Oleh Oleh",
      ],
      price: "1.027.000",
    },
    {
      name: "Mangkuyudan",
      duration: "3 Hari 2 Malam",
      location: "Yogyakarta",
      destinations: [
        "Cave Tubing Goa Pindul",
        "Pantai Drini",
        "Obelix Sea View",
        "Pule Payung",
        "Sungai Mudal",
        "Studio Gamplong",
        "Malioboro",
        "Pasar Ngasem",
        "Tamansari",
        "Hutan Pinus Asri",
        "Heha SkyView",
        "Wisata Oleh Oleh",
      ],
      price: "1.125.000",
    },
    {
      name: "Kaliurang",
      duration: "3 Hari 2 Malam",
      location: "Yogyakarta",
      destinations: [
        "Candi Prambanan",
        "Tebing Breksi",
        "Obelix Hills",
        "Sunrise Mangunan",
        "Hutan Pinus Asri",
        "Gumuk Pasir",
        "Pantai Parangtritis",
        "Pasar Ngasem",
        "Tamansari",
        "Keraton",
        "Malioboro",
        "Wisata Oleh Oleh",
      ],
      price: "1.125.000",
    },
    {
      name: "Danurejan",
      duration: "3 Hari 2 Malam",
      location: "Yogyakarta",
      destinations: [
        "Kopi klothok",
        "Lava tour",
        "Borobudur",
        "Malioboro",
        "Pantai Indrayanti",
        "Pantai Drini",
        "Heha Sky View",
        "Pinus Pengger",
        "Pasar Ngasem",
        "Tamansari",
        "Jurang Kanigoro",
        "Wisata Oleh Oleh",
      ],
      price: "1.194.000",
    },
  ];

  const companyPackages = [
    {
      name: "Paket Adventure",
      duration: "2 Hari 1 Malam",
      location: "Yogyakarta",
      destinations: [
        "Outbound",
        "Cave Tubing Goa Pindul",
        "Heha Sky View",
        "Gala Dinner",
        "Pantai Parangtritis",
        "Jeep Gumuk Pasir",
        "Obelix Sea View",
        "Pusat Oleh Oleh",
      ],
      price: "1.677.000",
    },
  ];

  interface Package {
    name: string;
    duration: string;
    location: string;
    destinations: string[];
    price: string;
  }

  const PackageCard = ({ pkg }: { pkg: Package }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-red-600" />
          <span className="text-sm text-muted-foreground">{pkg.location}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {pkg.duration}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Destinasi:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {pkg.destinations.map((dest: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                {dest}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Start From</p>
            <p className="text-2xl font-bold text-red-600">Rp. {pkg.price}</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 hover:shadow-lg transition-all"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20info%20paket%20${pkg.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/600x400/transparent/F00"
            alt="Yogyakarta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <p className="text-lg md:text-xl text-white/80 mb-2">
                Praktis & Terpercaya
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Berpengalaman Layanan Respon Cepat Dan Tepat
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              One Day Trip Yogyakarta
            </h1>
          </div>
        </div>
      </section>

      {/* One Day Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 1 Hari
            </h2>
            <p className="text-lg text-muted-foreground">
              Pilih paket wisata satu hari yang sesuai dengan preferensi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Two Day Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 2 Hari 1 Malam
            </h2>
            <p className="text-lg text-muted-foreground">
              Nikmati pengalaman wisata yang lebih lengkap dengan paket dua hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twoDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Three Day Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Tour Jogja 3 Hari 2 Malam
            </h2>
            <p className="text-lg text-muted-foreground">
              Eksplorasi Yogyakarta secara mendalam dengan paket tiga hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeDayPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Company Outing
            </h2>
            <p className="text-lg text-muted-foreground">
              Paket khusus untuk kegiatan perusahaan dan team building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-rose-500 to-red-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Masih Bingung Rencana Liburan Anda ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Jangan Khawatir! Tim Ahli Kami siap membantu anda merancang liburan
            impian ke jogja dengan paket tour yang paling sesuai untuk anda.
            dapatkan yang tak terlupakan tanpa repot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 transition-all"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo,%20saya%20ingin%20konsultasi%20paket%20tour`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Chat CS
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaketWisata;
