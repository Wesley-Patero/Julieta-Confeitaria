
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="section-title">Quem é a Julieta Confeitaria?</h2>
          <p className="text-lg text-bakery-green/80 leading-relaxed animate-fade-in">
            A Julieta Confeitaria nasceu de uma paixão por doces artesanais e sabores inesquecíveis. 
            Cada criação é feita com cuidado, carinho e um toque de elegância para adoçar seus momentos especiais.
          </p>
          <p className="text-lg text-bakery-green/80 leading-relaxed animate-fade-in animate-delay-200">
            Nosso compromisso com a qualidade e atenção aos detalhes garante que cada 
            sobremesa não apenas tenha um sabor extraordinário, mas também seja visualmente 
            deslumbrante, tornando suas celebrações ainda mais memoráveis.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-bakery-gold rounded-2xl transform rotate-3 transition-transform 
                        group-hover:rotate-6 duration-300"></div>
          <img
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Cozinha"
            className="relative rounded-2xl shadow-xl transform transition-transform duration-300 
                     group-hover:-rotate-3 object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
