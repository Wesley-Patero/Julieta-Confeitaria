
import React from 'react';

const pricingItems = [
  {
    title: 'Bolos Personalizados',
    description: 'Bolos personalizados para qualquer ocasião',
    price: 'A partir de R$250',
    details: ['Design personalizado', 'Diversos sabores', 'Diferentes tamanhos disponíveis'],
  },
  {
    title: 'Cupcakes',
    description: 'Perfeitos para festas e eventos',
    price: 'R$120/dúzia',
    details: ['Sabores clássicos', 'Decorações personalizadas', 'Encomendas em quantidade bem-vindas'],
  },
  {
    title: 'Brownies',
    description: 'Guloseimas ricas e cremosas',
    price: 'R$90/dúzia',
    details: ['Receita tradicional', 'Diversas coberturas', 'Embalagem para presente disponível'],
  },
  {
    title: 'Kits para Festas',
    description: 'Pacotes completos de sobremesas',
    price: 'A partir de R$500',
    details: ['Seleção personalizada', 'Várias quantidades', 'Montagem disponível'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Nossos Preços</h2>
        <p className="text-lg text-bakery-green/80 max-w-2xl mx-auto">
          Ingredientes de qualidade e artesanato para todos os orçamentos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="pricing-card animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-script text-bakery-green font-bold mb-3">
              {item.title}
            </h3>
            <p className="text-bakery-green/70 mb-4">{item.description}</p>
            <p className="text-2xl font-bold text-bakery-gold mb-6">{item.price}</p>
            <ul className="space-y-2">
              {item.details.map((detail, detailIndex) => (
                <li
                  key={detailIndex}
                  className="text-bakery-green/80 flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-bakery-gold mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
