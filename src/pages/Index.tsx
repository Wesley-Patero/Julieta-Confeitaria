
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
    </main>
  );
};

export default Index;
