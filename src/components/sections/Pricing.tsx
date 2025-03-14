
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cakeSizes = [
  {
    title: 'Bolo Pequeno',
    description: 'Ideal para 10-15 pessoas',
    price: 'A partir de R$150',
    details: ['15cm de diâmetro', 'Personalização básica', 'Diversos sabores disponíveis'],
  },
  {
    title: 'Bolo Médio',
    description: 'Perfeito para 20-30 pessoas',
    price: 'A partir de R$250',
    details: ['20cm de diâmetro', 'Personalização completa', 'Todos os sabores disponíveis'],
  },
  {
    title: 'Bolo Grande',
    description: 'Recomendado para 40-50 pessoas',
    price: 'A partir de R$350',
    details: ['25cm de diâmetro', 'Design personalizado premium', 'Opções de múltiplos andares'],
  },
];

const sweetItems = [
  {
    title: 'Meio Cento de Docinhos',
    description: 'Pacote com 50 unidades variadas',
    price: 'R$120',
    details: ['Brigadeiros', 'Beijinhos', 'Cajuzinhos', 'Casadinhos', 'Embalagem incluída'],
  },
  {
    title: 'Cento de Docinhos',
    description: '100 unidades para sua festa',
    price: 'R$220',
    details: ['Até 5 sabores diferentes', 'Decoração personalizada', 'Embalagem para evento'],
  },
];

const customItems = [
  {
    title: 'Encomendas Personalizadas',
    description: 'Criações exclusivas para momentos especiais',
    price: 'Preço sob consulta',
    details: ['Projetos totalmente personalizados', 'Temas específicos', 'Ingredientes especiais disponíveis', 'Consulta personalizada'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Nossos Produtos</h2>
        <p className="text-lg text-bakery-green/80 max-w-2xl mx-auto">
          Criações artesanais feitas com ingredientes selecionados e muito carinho
        </p>
      </div>

      <Tabs defaultValue="bolos" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-bakery-cream">
          <TabsTrigger 
            value="bolos" 
            className="text-bakery-green data-[state=active]:bg-bakery-gold data-[state=active]:text-bakery-green"
          >
            Bolos Decorados
          </TabsTrigger>
          <TabsTrigger 
            value="docinhos"
            className="text-bakery-green data-[state=active]:bg-bakery-gold data-[state=active]:text-bakery-green"
          >
            Docinhos
          </TabsTrigger>
          <TabsTrigger 
            value="personalizados"
            className="text-bakery-green data-[state=active]:bg-bakery-gold data-[state=active]:text-bakery-green"
          >
            Personalizados
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="bolos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cakeSizes.map((item, index) => (
              <PricingCard key={index} item={item} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="docinhos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sweetItems.map((item, index) => (
              <PricingCard key={index} item={item} index={index} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="personalizados">
          <div className="mx-auto max-w-md">
            {customItems.map((item, index) => (
              <PricingCard key={index} item={item} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

interface PricingCardProps {
  item: {
    title: string;
    description: string;
    price: string;
    details: string[];
  };
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ item, index }) => {
  return (
    <Card className="pricing-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader>
        <CardTitle className="text-xl font-script text-bakery-green font-bold">
          {item.title}
        </CardTitle>
        <CardDescription className="text-bakery-green/70">
          {item.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default Pricing;
