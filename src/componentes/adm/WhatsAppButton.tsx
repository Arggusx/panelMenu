import React from 'react';
import { sendWhatsAppMessage } from '../../utils/whatsappService';
import { Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phone: string;
  orderId: string;
  token: string;
  qrUrl: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone,
  qrUrl,
  className = '',
}) => {
  const handleSendMessage = () => {
    const message = `Olá! Seu pedido está pronto. Valide no balcão acessando: ${qrUrl}`;
    sendWhatsAppMessage(phone, message);
  };

  return (
    <button
      onClick={handleSendMessage}
      className={`flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors ${className}`}
    >
      <Phone size={18} />
      <span>Enviar via WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
