import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Order } from '../../types/Order';
import WhatsAppButton from './WhatsAppButton';

interface QRCodeModalProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ order, isOpen, onClose }) => {
  const [qrUrl, setQrUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {

      if (!order.token) return;
      // Talvez precise colocar "/pedidos/qrcode"
      fetch(`https://panel-menu-eng-soft.vercel.app/qrcode/${order.id}/${order.token}`)
        .then(res => res.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          setQrUrl(url);
        });
    } else {
      if (qrUrl) {
        URL.revokeObjectURL(qrUrl);
        setQrUrl('');
      }
    }
  }, [isOpen, order]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
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

          {qrUrl && (
            <div>
              <img className='h-40 w-40' src={`https://online-menu-api-iota.vercel.app/qrcode/${order.id}`} alt="QR Code" />
            </div>
          )}
        </div>

        <WhatsAppButton
          phone={order.customerPhone}
          orderId={order.id.toString()}
          token={order.token}
          qrUrl={`https://online-menu-api-iota.vercel.app/qrcode/${order.id}`}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default QRCodeModal;
