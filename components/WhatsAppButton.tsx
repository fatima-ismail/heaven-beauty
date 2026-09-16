import { contact } from "@/lib/content";

export function WhatsAppButton() {
  const whatsappNumber = contact.phoneE164.replace(/\D/g, "");

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${contact.phoneDisplay}`}
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 3a12.8 12.8 0 0 0-10.9 19.5L3.5 28.5l6.2-1.6A12.8 12.8 0 1 0 16 3Zm0 23.4a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.7 1 1-3.6-.3-.4A10.6 10.6 0 1 1 16 26.4Zm5.8-7.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.2-.8 1-1 1.2-.4.3-.7.1a8.5 8.5 0 0 1-2.5-1.6 9.3 9.3 0 0 1-1.7-2.2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6s0-.4-.1-.6l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3 1.2 3.5 1.3 3.8a12.5 12.5 0 0 0 4.9 4.4c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z" />
      </svg>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
