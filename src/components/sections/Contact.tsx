
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/27999208521', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-bakery-green text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-script font-bold text-bakery-cream mb-8 tracking-wide inline-block">
          Entre em Contato
        </h2>
        <p className="text-xl text-bakery-cream/90 mb-12 animate-fade-in">
          Encomende seu bolo agora ou solicite um orçamento!
        </p>
        
        <button
          onClick={openWhatsApp}
          className="group flex items-center justify-center space-x-3 mx-auto bg-bakery-gold 
                   hover:bg-bakery-cream text-bakery-green px-8 py-4 rounded-full 
                   transition-all duration-300 transform hover:scale-105 animate-slide-up"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-lg font-medium">Conversar no WhatsApp</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
