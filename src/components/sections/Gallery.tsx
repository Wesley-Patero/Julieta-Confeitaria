
import React, { useState } from 'react';
import LightBox from '../ui/LightBox';

const galleryImages = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  'https://images.unsplash.com/photo-1587248720327-8eb72564be1e',
  'https://images.unsplash.com/photo-1579372786545-d24232daf58c',
  'https://images.unsplash.com/photo-1557308536-ee471ef2c390',
  'https://images.unsplash.com/photo-1550617931-e17a7b70dce2',
  'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e',
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-bakery-cream">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-script font-bold text-bakery-green mb-8 tracking-wide inline-block">
          Nossa Galeria
        </h2>
        <p className="text-lg text-bakery-green/80 max-w-2xl mx-auto">
          Descubra nossas deliciosas criações e inspire-se para sua próxima celebração
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={`${image}?auto=format&fit=crop&w=600&q=80`}
              alt={`Item da galeria ${index + 1}`}
              className="aspect-square"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <LightBox
          images={galleryImages}
          currentImage={currentImage}
          onClose={closeLightbox}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};

export default Gallery;
