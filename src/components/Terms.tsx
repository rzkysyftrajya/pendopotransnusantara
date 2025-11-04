import { AlertCircle } from "lucide-react";

const Terms = () => {
  const terms = [
    "Harga sudah termasuk sopir dan BBM dalam kota Yogyakarta",
    "Harga belum termasuk parkir, tol, dan tiket wisata",
    "Tidak berlaku di periode high season atau peak season",
    "Overtime dikenakan biaya tambahan sesuai ketentuan yang berlaku",
    "Pembatalan pemesanan minimal 2x24 jam sebelum tanggal keberangkatan",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-8 h-8 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Syarat & Ketentuan
            </h2>
          </div>
          <ul className="space-y-4">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start gap-3 text-white text-lg">
                <span className="mt-1">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Terms;
