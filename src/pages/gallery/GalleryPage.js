import React from 'react';
import { galleryImages } from '../../data';

function GalleryPage({ onImageClick }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => onImageClick(image)}
          >
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;