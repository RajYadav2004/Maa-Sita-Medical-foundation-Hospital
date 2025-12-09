import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "1800CHARITY";
const WHATSAPP_MESSAGE = "Hello! I would like to inquire about your hospital services.";

export function WhatsAppButton() {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        onClick={handleClick}
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl animate-pulse-slow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent rounded-full flex items-center justify-center animate-bounce">
        <span className="text-[10px] font-bold text-accent-foreground">1</span>
      </span>
    </div>
  );
}
