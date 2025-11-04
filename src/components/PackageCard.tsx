import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, MapPin, Clock, CheckCircle2, XCircle } from "lucide-react";

// Define a unified package interface
export interface Package {
  name: string;
  duration: string;
  location: string;
  short_description?: string;
  destinations: string[];
  includes?: string[];
  excludes?: string[];
  price: string;
  image: string;
}

export const PackageCard = ({
  pkg,
  whatsappNumber,
}: {
  pkg: Package;
  whatsappNumber: string;
}) => {
  return (
    <Dialog>
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col bg-white rounded-2xl border-0 hover-lift">
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Duration badge with enhanced styling */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-4 py-2 m-3 rounded-full shadow-lg">
                {pkg.duration}
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 shadow-text">
                  {pkg.name}
                </h3>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{pkg.location}</span>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <CardContent className="p-6 flex-grow bg-gradient-to-br from-white to-gray-50">
              <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                {pkg.short_description ||
                  `Jelajahi destinasi terbaik di ${pkg.location} dengan pengalaman yang tak terlupakan...`}
              </p>

              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Mulai dari</p>
                  <p className="text-2xl font-bold text-gradient">
                    Rp {pkg.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">per orang</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary hover-lift ml-4"
                >
                  Lihat Detail
                </Button>
              </div>
            </CardContent>
          </div>
        </DialogTrigger>
      </Card>

      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            {pkg.name}
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-4">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="mb-6">
            <h4 className="font-bold text-lg mb-3">Destinasi</h4>
            <ul className="space-y-2 text-gray-700">
              {pkg.destinations.map((dest, i) => (
                <li key={i} className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{dest}</span>
                </li>
              ))}
            </ul>
          </div>

          {pkg.includes && (
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Fasilitas Termasuk</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pkg.excludes && (
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Tidak Termasuk</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                {pkg.excludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-4 mt-6 pt-4 border-t">
          <div className="mr-auto">
            <p className="text-sm text-gray-500">Harga per orang</p>
            <p className="text-2xl font-bold text-red-600">Rp {pkg.price}</p>
          </div>
          <DialogTrigger asChild>
            <Button variant="outline">Tutup</Button>
          </DialogTrigger>
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan paket wisata ${pkg.name}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan via WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
