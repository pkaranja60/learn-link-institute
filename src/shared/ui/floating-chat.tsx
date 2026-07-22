import { MessageCircle } from "lucide-react";

export function FloatingChat() {
  return (
    <a
      aria-label="Chat with Us on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105"
      href="https://wa.me/254712028449"
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle className="size-6" />
      <span className="font-semibold">Chat with Us!</span>
    </a>
  );
}
