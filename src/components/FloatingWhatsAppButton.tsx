import React from "react";

const FloatingWhatsAppButton = () => {
  const whatsappNumber = "6285640644321"; // Using Sewa Mobil number for general inquiries
  const message = "Halo Pendopo Rentcar, saya ingin bertanya.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Hubungi via WhatsApp"
    >
      <img src="/icon.png" alt="WhatsApp Icon" className="w-12 h-12" />
    </a>
  );
};

export default FloatingWhatsAppButton;
