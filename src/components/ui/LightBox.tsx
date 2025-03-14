
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightBoxProps {
  images: string[];
  currentImage: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const LightBox: React.FC<LightBoxProps> = ({
  images,
  currentImage,
  onClose,
  onPrevious,
  onNext,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`lightbox-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div
        className={`lightbox-container ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose}>
          <X size={24} />
        </button>
        <button className="lightbox-nav lightbox-prev" onClick={onPrevious}>
          <ChevronLeft size={24} />
        </button>
        <button className="lightbox-nav lightbox-next" onClick={onNext}>
          <ChevronRight size={24} />
        </button>
        <img
          src={images[currentImage]}
          alt={`Gallery item ${currentImage + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default LightBox;
