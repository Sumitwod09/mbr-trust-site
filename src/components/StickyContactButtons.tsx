import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919821282719";
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
        <FontAwesomeIcon icon={faWhatsapp} className="w-12 h-12" />
      </Button>

      {/* Call Button */}
      <Button
        variant="call"
        size="iconLg"
        onClick={handleCall}
        className="rounded-full"
        aria-label="Call us directly"
      >
        <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default StickyContactButtons;
