import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonialImages = [
  "/galeri-testimoni/testi-1.webp",
  "/galeri-testimoni/testi-2.webp",
  "/galeri-testimoni/testi-3.webp",
  "/galeri-testimoni/testi-4.webp",
  "/galeri-testimoni/testi-5.webp",
  "/galeri-testimoni/testi-6.webp",
  "/galeri-testimoni/testi-7.webp",
  "/galeri-testimoni/testi-8.webp",
  "/galeri-testimoni/testi-9.webp",
  "/galeri-testimoni/testi-10.webp",
  "/galeri-testimoni/testi-11.webp",
  "/galeri-testimoni/testi-12.webp",
  "/galeri-testimoni/testi-13.webp",
  "/galeri-testimoni/testi-14.webp",
  "/galeri-testimoni/testi-15.webp",
  "/galeri-testimoni/testi-16.webp",
  "/galeri-testimoni/testi-17.webp",
  "/galeri-testimoni/testi-18.webp",
  "/galeri-testimoni/testi-19.webp",
  "/galeri-testimoni/testi-20.webp",
  "/galeri-testimoni/testi-21.webp",
  "/galeri-testimoni/testi-22.webp",
  "/galeri-testimoni/testi-23.webp",
  "/galeri-testimoni/testi-24.webp",
  "/galeri-testimoni/testi-25.webp",
  "/galeri-testimoni/testi-26.webp",
  "/galeri-testimoni/testi-27.webp",
  "/galeri-testimoni/testi-28.webp",
  "/galeri-testimoni/testi-29.webp",
  "/galeri-testimoni/testi-30.webp",
  "/galeri-testimoni/testi-31.webp",
  "/galeri-testimoni/testi-32.webp",
  "/galeri-testimoni/testi-33.webp",
  "/galeri-testimoni/testi-34.webp",
  "/galeri-testimoni/testi-35.webp",
  "/galeri-testimoni/testi-36.webp",
  "/galeri-testimoni/testi-37.webp",
  "/galeri-testimoni/testi-38.webp",
  "/galeri-testimoni/testi-39.webp",
  "/galeri-testimoni/testi-40.webp",
  "/galeri-testimoni/testi-41.webp",
];

const TestimonialImagesPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 mt-20"> {/* Added mt-20 for spacing from fixed header */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Galeri Testimoni</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {testimonialImages.map((imageUrl, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={imageUrl}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Lihat</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialImagesPage;
