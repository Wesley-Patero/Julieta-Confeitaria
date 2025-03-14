
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="section-title">Who is Julieta Confeitaria?</h2>
          <p className="text-lg text-bakery-green/80 leading-relaxed animate-fade-in">
            Julieta Confeitaria was born from a passion for artisanal sweets and unforgettable flavors. 
            Each creation is made with care, affection, and a touch of elegance to sweeten your special moments.
          </p>
          <p className="text-lg text-bakery-green/80 leading-relaxed animate-fade-in animate-delay-200">
            Our commitment to quality and attention to detail ensures that every 
            dessert not only tastes extraordinary but also looks stunning, making 
            your celebrations even more memorable.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-bakery-gold rounded-2xl transform rotate-3 transition-transform 
                        group-hover:rotate-6 duration-300"></div>
          <img
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Kitchen"
            className="relative rounded-2xl shadow-xl transform transition-transform duration-300 
                     group-hover:-rotate-3 object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
