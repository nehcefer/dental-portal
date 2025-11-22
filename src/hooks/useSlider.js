import { useState, useEffect } from 'react';

export const useSlider = (slidesLength, autoPlayInterval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [slidesLength, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  };

  return { currentSlide, setCurrentSlide, nextSlide, prevSlide };
};  