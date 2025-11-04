import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Pemesanan paket wisata dan paket sewa mobil dapat dilakukan dengan menghubungi nomor Admin yang tertera di website. Admin akan membantu Kamu untuk memilih paket sesuai kebutuhan dan budget Kamu.",
    },
    {
      question: "Bagaimana memilih paket yang tepat?",
      answer:
        "Sesuaikan dengan kebutuhan dan situasi rombongan Anda. Hal yang perlu diperhatikan di awal adalah estimasi waktu mulai trip di hari pertama, terutama bila rencana kedatangan rombongan Anda datang di hari yang sama dengan tanggal mulai trip. Catatan: Bila kedatangan Anda melalui Yogyakarta International Airport, Anda perlu menambahkan 2 jam di awal sebelum jadwal mulai kegiatan.",
    },
    {
      question: "Detail Itinerary?",
      answer:
        "Secara umum, garis besar itinerary bisa dipahami dari urutan kegiatan dan waktu keseluruhan yang tertera di setiap paket.",
    },
    {
      question: "Bagaimana Proses pembayarannya?",
      answer:
        "Pembayaran terbagi menjadi 2 tahap, yaitu: Downpayment. Downpayment sebesar 50% adalah tanda konfirmasi order dari pihak klien kepada pihak Pendopo Tour. Wajib dilakukan maksimal pada H-15 dari tanggal kegiatan demi memastikan semua keperluan tour dapat dipersiapkan dengan baik. Pelunasan. Jika tanpa hotel Pelunasan bisa dilakukan (maksimal) di hari pertama pelaksanaan tour. Jika dengan hotel Pelunasan wajib dilakukan maksimal pada H-4 pelaksanaan tour.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan Anda
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
