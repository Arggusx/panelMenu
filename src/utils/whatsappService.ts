export const sendWhatsAppMessage = (phone: string, message: string): void => {
    // Remove any non-numeric characters from the phone number
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Ensure the phone number has the country code
    const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    
    // Open in a new tab
    window.open(whatsappUrl, "_blank");
  };