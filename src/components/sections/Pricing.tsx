
import React from 'react';

const pricingItems = [
  {
    title: 'Custom Cakes',
    description: 'Personalized cakes for any occasion',
    price: 'Starting from $50',
    details: ['Custom design', 'Various flavors', 'Different sizes available'],
  },
  {
    title: 'Cupcakes',
    description: 'Perfect for parties and events',
    price: '$24/dozen',
    details: ['Classic flavors', 'Custom decorations', 'Bulk orders welcome'],
  },
  {
    title: 'Brownies',
    description: 'Rich and fudgy treats',
    price: '$18/dozen',
    details: ['Traditional recipe', 'Various toppings', 'Gift packaging available'],
  },
  {
    title: 'Party Kits',
    description: 'Complete dessert packages',
    price: 'Starting from $100',
    details: ['Custom selection', 'Various quantities', 'Setup available'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Prices</h2>
        <p className="text-lg text-bakery-green/80 max-w-2xl mx-auto">
          Quality ingredients and craftsmanship for every budget
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
