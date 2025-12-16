import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'm interested in your construction services. Please contact me.");

const StickyContactButtons = () => {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="iconLg"
        onClick={handleWhatsApp}
        className="rounded-full animate-pulse-glow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Call Button */}
      <Button
        variant="call"
        size="iconLg"
        onClick={handleCall}
        className="rounded-full"
        aria-label="Call us directly"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default StickyContactButtons;
