import React, { useEffect} from 'react';
import { X } from 'lucide-react';
import { Order } from '../../types/types';
import WhatsAppButton from './WhatsAppButton';

interface QRCodeModalProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ order, isOpen, onClose }) => {

  useEffect(() => {
  }, [isOpen, order]);
  
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

  if (!isOpen) return null;

  const whatsappMessage = `Olá ${order.customerName}! Seu pedido #${order.id} está pronto para retirada. Mesa: ${order.table}`;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">QR Code do Pedido #{order.id}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <p className="text-center text-sm text-gray-600 mb-2">
            Envie o QR code do pedido #{order.id} da mesa {order.table}.
          </p>
        </div>
        
        <WhatsAppButton 
          phone={order.customerPhone} 
          message={whatsappMessage}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default QRCodeModal;