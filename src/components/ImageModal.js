import React from 'react';
import { X } from 'lucide-react';

export const ImageModal = ({ selectedImage, setSelectedImage }) => {
  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedImage(null)}
    >
      <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full object-contain" />
      <button 
        className="absolute top-4 right-4 text-white"
        onClick={() => setSelectedImage(null)}
      >
        <X size={32} />
      </button>
    </div>
  );
};